import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="sm:max-w-sm flex justify-center pt-10">
        <div className="">
          <h1 className="text-xl font-bold textsecondart-700 mb-8">
            صفحه موردنظر یافت نشد!
          </h1>
          <button onClick={moveBack} className="flex items-center gap-x-2">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span className="text-secondary-700">بازگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
