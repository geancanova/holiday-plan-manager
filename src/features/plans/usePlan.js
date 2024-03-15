import { useQuery } from "@tanstack/react-query";
import { getPlan } from "../../services/apiPlans";
import { useParams } from "react-router-dom";

export function usePlan() {
  const { planId } = useParams();

  const {
    isLoading,
    data: plan,
    error,
  } = useQuery({
    queryKey: ["plan", planId],
    queryFn: () => getPlan(planId),
    retry: false,
  });

  return { isLoading, error, plan };
}
