import { useQuery } from "@tanstack/react-query";
import { getHolidays } from "../../services/apiHolidays";

export function useHolidays(planId) {
  const {
    isLoading,
    data: holidays,
    error,
  } = useQuery({
    queryKey: ["holidays", planId],
    queryFn: () => getHolidays(planId),
  });

  return { isLoading, error, holidays };
}