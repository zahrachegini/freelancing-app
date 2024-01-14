import React from "react";
import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();

  return (
    <div className="bg-secondary-0 border-b border-secondary-200 py-4 px-8">
      Header
    </div>
  );
}

export default Header;
