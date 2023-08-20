// import { useSession } from "next-auth/react";
// import { db } from "~/lib/firebase/config";
import type { ReactElement } from "react";
import Head from "next/head";

interface DashboardLayoutProps {
  children?: ReactElement
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

  return (
    <>
      <Head>
        <title>Dashboard - Anon Vendor POS</title>
        <meta name="description" content="Anon Vendor POS Dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is the dashboard page.</h1>
      <main>{children}</main>
      <h1>This is a footer.</h1>
    </>
  );
}

