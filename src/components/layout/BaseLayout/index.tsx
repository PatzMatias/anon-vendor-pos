
import type { ReactElement } from "react";
import type { ChildProps } from "~/definitions/react";
import SidebarProvider from "~/context/sidebar-context";
import Head from "next/head";

interface IProps extends ChildProps {}

export function BaseLayout({ children }: IProps): ReactElement {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </>
  )
}

export function ApplyBaseLayout(page: ReactElement) {
  return (
    <BaseLayout>{page}</BaseLayout>
  )
}