import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm({ setStep, phoneNumber, onChange }) {
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtoHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      // console.log(res);
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
          onChange={onChange}
        />
        <div className="">
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تائید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
