import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";

export default function Admin() {

  return (
    <section className="container-fluid grid px-6 mx-auto">
        <h1>This is an admin page.</h1>
    </section>
  );
}


Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}