import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loader from "./../../ui/Loader";

function Logout() {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loader />
  ) : (
    <button onClick={logout}>
      <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-600 hover:text-error" />
    </button>
  );
}

export default Logout;
