import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditPlan } from "../../services/apiPlans";

export function useCreatePlan() {
  const queryClient = useQueryClient();

  const { mutate: createPlan, isLoading: isCreating } = useMutation({
    mutationFn: createEditPlan,
    onSuccess: () => {
      toast.success("New plan successfully created");
      queryClient.invalidateQueries({ queryKey: ["plans"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createPlan };
}
