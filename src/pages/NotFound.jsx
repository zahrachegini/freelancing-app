import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container flex justify-center xl:max-w-screen-xl">
      <div className="sm:max-w-sm flex justify-center py-10">
        <div className="">
          <h1 className="text-xl font-bold text-secondary-700 mb-8">
            صفحه موردنظر یافت نشد!
          </h1>
          <button onClick={moveBack} className="flex items-center gap-x-5">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
