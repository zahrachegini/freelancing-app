import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loader from "../../ui/Loader";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = project.status === "OPEN" ? "CLOSE" : "OPEN";
    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader height={20} width={50} />
      ) : (
        <Toggle
          enabled={project.status === "OPEN" ? true : false}
          label={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
