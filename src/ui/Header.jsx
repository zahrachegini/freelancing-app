import React from "react";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import useUser from "../features/authentication/useUser";

function Header() {
  const { isLoading, user } = useUser();
  return (
    <div className="bg-secondary-0 border-b border-secondary-200 py-4 px-8">
      <div
        className={`contsiner xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
