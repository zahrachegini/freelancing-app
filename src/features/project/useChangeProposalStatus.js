import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";

export default function useChangeProposalStatus() {
  const { mutate: changeProposalStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeProposalStatus };
}
