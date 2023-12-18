import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects";
import Empty from "./../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی پروژه</th>
        <th>ددلاین پروژه</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت پروژه</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow project={project} index={index} key={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
