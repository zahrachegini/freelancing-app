import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtoHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form action="" className="space-y-8" onSubmit={sendOtoHandler}>
        <TextField
          label="شماره موبایل"
          name={phoneNumber}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تائید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
