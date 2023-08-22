import { BaseLayout } from "~/components/layout/BaseLayout";
import { ChildProps } from "~/definitions/react";
import SidebarProvider, { useSidebar } from "~/context/sidebar-context";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "~/components/containers/Sidebar";
import Header from "~/components/containers/Header";


interface IProps extends ChildProps {}

export default function DashboardLayout({children}: IProps) {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const router = useRouter();
  
  useEffect(() => {
    if(isSidebarOpen) closeSidebar()
  },[router.pathname])

  return (
    <BaseLayout>
      <SidebarProvider>
        <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
          <Sidebar>
            sidebar
          </Sidebar>
          <div className="flex flex-col flex-1 w-full">
            <Header />
            <main className="h-full overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </BaseLayout>
  )
}