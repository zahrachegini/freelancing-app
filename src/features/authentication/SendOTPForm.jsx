import React from "react";
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";

export default function SendOTPForm({
  onSubmit,
  isPending: isSendingOtp,
  register,
}) {
  return (
    <div className="">
      <form action="" className="space-y-4" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
        />
        <div className="">
          {isSendingOtp ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              ارسال کد تائید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
