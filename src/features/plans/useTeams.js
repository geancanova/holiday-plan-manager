import { useQuery } from "@tanstack/react-query";
import { getTeams } from "../../services/apiTeams";

export function useTeams() {
  const {
    isLoading,
    data: teams,
    error,
  } = useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });

  return { isLoading, error, teams };
}
