import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteHoliday as deleteHolidayApi } from "../../services/apiHolidays";

export function useDeleteHoliday() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteHoliday } = useMutation({
    mutationFn: deleteHolidayApi,
    onSuccess: () => {
      toast.success("Holiday successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["holidays"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteHoliday };
}
