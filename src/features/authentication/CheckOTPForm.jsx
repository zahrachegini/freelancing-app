import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loader from "../../ui/Loader";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      <form action="" className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تائید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <div className="">
          {isPending ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تائید
            </button>
          )}
        </div>
      </form>
      <div className="mt-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد تائید</button>
        )}
      </div>
      <div className="">
        {otpResponse && (
          <p className="flex items-center gap-x-2 text-warning">
            <span>ویرایش شماره موبایل</span>
            <button onClick={onBack}>
              <CiEdit className="w-6 h-6" />
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default CheckOTPForm;
