import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getHolidays } from "../../services/apiHolidays";

export function useHolidays(planId, page = true) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // PAGINATION
  if (page) page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: holidays, count } = {},
    error,
  } = useQuery({
    queryKey: ["holidays", planId, page],
    queryFn: () => getHolidays(planId, page),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["holidays", planId, page + 1],
      queryFn: () => getHolidays(planId, page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["holidays", planId, page - 1],
      queryFn: () => getHolidays(planId, page - 1),
    });

  return { isLoading, error, holidays, count };
}