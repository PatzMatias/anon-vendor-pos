
import type { ReactElement } from "react";
import type { ChildProps } from "~/definitions/react";
import SidebarProvider from "~/context/sidebar-context";

interface IProps extends ChildProps {}

export function BaseLayout({ children }: IProps): ReactElement {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
}

export function ApplyBaseLayout(page: ReactElement) {
  return (
    <BaseLayout>{page}</BaseLayout>
  )
}