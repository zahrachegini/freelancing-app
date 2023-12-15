import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ isSendingOtp, phoneNumber, onChange, onSubmit }) {
  return (
    <div>
      <form action="" className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name={phoneNumber}
          value={phoneNumber}
          onChange={onChange}
        />
        <div className="">
          {isSendingOtp ? (
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
