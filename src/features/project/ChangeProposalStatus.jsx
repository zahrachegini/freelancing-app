import React from "react";
import ReactHookFormSelect from "../../ui/ReactHookFormSelect";
import { useForm } from "react-hook-form";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../ui/Loader";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تائید",
    value: 1,
  },
  {
    label: "تائید شده",
    value: 2,
  },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  console.log(projectId);
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    console.log(data);
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose(),
            queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <ReactHookFormSelect
          name="status"
          label="تغییر وضعیت درخواست"
          register={register}
          required
          options={options}
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تائید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
