import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from "~/components/ui/CustomHead";

export default function UsersPage() {

  return (
    <>
      <CustomHead title={`Users`} description="The system's users management page" />
      <section className="container-fluid grid px-6 mx-auto">
        <div className="my-6">
          <h3>Users</h3>
          <p className="text-muted-foreground mt-0">You can now start managing your users here.</p>
        </div>
      </section>
    </>
  );
}


UsersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}