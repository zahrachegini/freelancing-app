import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loader from "./../../ui/Loader";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه ای یافت نشد" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی پروژه</th>
          <th>بودجه</th>
          <th>ددلاین پروژه</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>...</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectsTable;
