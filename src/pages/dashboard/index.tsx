import type { ReactElement } from "react";
import FullPageLayout from "~/components/layout/FullPageLayout";

export default function Home() {

  return (
    <section className="container-fluid grid px-6 mx-auto">
      <h1>Welcome to the dashboard</h1>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <FullPageLayout header={true}>{page}</FullPageLayout>
  )
}