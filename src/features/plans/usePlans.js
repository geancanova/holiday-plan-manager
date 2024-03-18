import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPlans } from "../../services/apiPlans";
import { PAGE_SIZE } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

export function usePlans() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: plans, count } = {},
    error,
  } = useQuery({
    queryKey: ["plans", page],
    queryFn: () => getPlans(page),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["plans", page + 1],
      queryFn: () => getPlans(page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["plans", page - 1],
      queryFn: () => getPlans(page - 1),
    });

  return { isLoading, error, plans, count };
}
