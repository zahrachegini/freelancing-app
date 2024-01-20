import React from "react";
import AppLayou from "../../ui/AppLayou";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavLink";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayou>
      <Sidebar>
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayou>
  );
}

export default OwnerLayout;
