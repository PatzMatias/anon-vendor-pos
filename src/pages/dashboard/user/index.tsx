import Link from "next/link";
import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";

export default function UserPage() {

  return (
    <section className="container-fluid grid px-6 mx-auto">
      <h1>This is a user page.</h1>
      <p>Lorep ipsum dolor sit amet <Link href="#">This is a link</Link></p>
    </section>
  );
}


UserPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}