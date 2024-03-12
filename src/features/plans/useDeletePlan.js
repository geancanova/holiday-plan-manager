import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deletePlan as deletePlanApi } from "../../services/apiPlans";

export function useDeletePlan() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletePlan } = useMutation({
    mutationFn: deletePlanApi,
    onSuccess: () => {
      toast.success("Plan successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deletePlan };
}
