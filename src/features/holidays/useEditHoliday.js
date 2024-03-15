import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditHoliday } from "../../services/apiHolidays";

export function useEditHoliday() {
  const queryClient = useQueryClient();

  const { mutate: editHoliday, isLoading: isEditing } = useMutation({
    mutationFn: ({ newHolidayData, id }) => createEditHoliday(newHolidayData, id),
    onSuccess: () => {
      toast.success("Holiday successfully edited");
      queryClient.invalidateQueries({ queryKey: ["holidays"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editHoliday };
}
