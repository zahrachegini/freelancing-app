import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    console.log(data);
    console.log(projectId);
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تائید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
