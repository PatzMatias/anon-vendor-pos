
import SidebarContent from "~/components/containers/Sidebar/SidebarContent";
import { ChildProps } from "~/definitions/react";

interface IProps extends ChildProps {}

export default function Sidebar({children}: IProps) {

  
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-background dark:bg-gray-800 lg:block">
      <SidebarContent />
    </aside>
  )
}