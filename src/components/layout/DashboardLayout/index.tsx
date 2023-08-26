import { BaseLayout } from "~/components/layout/BaseLayout";
import type { ChildProps } from "~/definitions/react";
import { useSidebar } from "~/context/sidebar-context";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
import Sidebar from "~/components/containers/Sidebar";
import Header from "~/components/containers/Header";
import { cn } from "~/lib/utils";


interface IProps extends ChildProps {}

export default function DashboardLayout({children}: IProps) {
  // const router = useRouter();
  const { isSidebarOpen } = useSidebar();
  // useEffect(() => {
  //   if(isSidebarOpen) closeSidebar()
  // },[isSidebarOpen, router.pathname, closeSidebar])
  
  const fullScreenWrapperClasses = cn(`flex h-screen bg-background dark:bg-gray-900`, {
    ['overflow-hidden']: isSidebarOpen
  })

  return (
    <BaseLayout>
        <div className={fullScreenWrapperClasses}>
          <Sidebar />
          <div className="flex flex-col flex-1 w-full">
            <Header />
            <main className="h-full overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
    </BaseLayout>
  )
}