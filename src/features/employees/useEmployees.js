import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../services/apiEmployees";

export function useEmployees(teamId) {
  const {
    isLoading,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees", teamId],
    queryFn: () => getEmployees(teamId),
  });

  return { isLoading, error, employees };
}
