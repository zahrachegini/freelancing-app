import React from "react";
import Table from "./../../../ui/Table";
import Loader from "./../../../ui/Loader";
import Empty from "./../../../ui/Empty";
import useProjects from "../../../hooks/useProjects";
import ProjectsRow from "./ProjectRow";

function ProjectTable() {
  const { projects, isLoading } = useProjects();

  if (isLoading) return <Loader />;

  if (!projects.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>علیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectsRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
