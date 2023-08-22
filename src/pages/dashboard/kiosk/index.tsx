import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";

export default function Kiosk() {

  return (
    <section className="container-fluid grid px-6 mx-auto">
      <h1>This is a kiosk page.</h1>
    </section>
  );
}


Kiosk.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}