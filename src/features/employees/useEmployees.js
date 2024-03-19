import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getEmployees } from "../../services/apiEmployees";

export function useEmployees(teamId, page = true) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // PAGINATION
  if (page) page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: employees, count } = {},
    error,
  } = useQuery({
    queryKey: ["employees", teamId, page],
    queryFn: () => getEmployees(teamId, page),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["employees", teamId, page + 1],
      queryFn: () => getEmployees(teamId, page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["employees", teamId, page - 1],
      queryFn: () => getEmployees(teamId, page - 1),
    });

  return { isLoading, error, employees, count };
}
