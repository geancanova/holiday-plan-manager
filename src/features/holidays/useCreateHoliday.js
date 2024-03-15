import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditHoliday } from "../../services/apiHolidays";

export function useCreateHoliday() {
  const queryClient = useQueryClient();

  const { mutate: createHoliday, isLoading: isCreating } = useMutation({
    mutationFn: createEditHoliday,
    onSuccess: () => {
      toast.success("New holiday successfully created");
      queryClient.invalidateQueries({ queryKey: ["holidays"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createHoliday };
}
