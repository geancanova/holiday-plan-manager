import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPlans } from "../../services/apiPlans";
import { PAGE_SIZE } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

export function usePlans() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "title-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: plans, count } = {},
    error,
  } = useQuery({
    queryKey: ["plans", sortBy, page],
    queryFn: () => getPlans({ sortBy, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["plans", sortBy, page + 1],
      queryFn: () => getPlans({ sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["plans", sortBy, page - 1],
      queryFn: () => getPlans({ sortBy, page: page - 1 }),
    });

  return { isLoading, error, plans, count };
}
