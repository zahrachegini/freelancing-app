import React from "react";
import Loader from "../../ui/Loader";
import useProposals from "./../proposal/useProposals";
import Stats from "./Stats";
import DashboardHeader from "../../ui/DashboardHeader";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
