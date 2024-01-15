import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "./../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت اضافه شد");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isCreating, createProject };
}
