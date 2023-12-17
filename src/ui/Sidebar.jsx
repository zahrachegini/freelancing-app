import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <NavLink to="/owner/dasboard" className='flex items-center gap-x-2'>
            <HiHome />
            <span>خانه</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/owner/projects">پروژه ها</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
