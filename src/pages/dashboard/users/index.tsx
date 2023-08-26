import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from "~/components/ui/CustomHead";
import DashboardPageHeader from "~/components/ui/DashboardPageHeader";

export default function UsersPage() {

  return (
    <>
      <CustomHead title={`Users`} description="The system's users management page" />
      <section className="container grid px-6 mx-auto">
        <DashboardPageHeader title={`Users`} description={`You can now start managing your users here.`} />
      </section>
    </>
  );
}


UsersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}