import { useRouter } from "next/router";
import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";


export default function Admin() {

  const router = useRouter()

  console.log("router query >>> ",router.query);

  return (
    <section className="container-fluid grid px-6 mx-auto">
        <h1>This is an {router.query.slug} page.</h1>
    </section>
  );
}


Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}