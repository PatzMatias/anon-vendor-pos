// import { useSession } from "next-auth/react";
// import { db } from "~/lib/firebase/config";
import DashboardLayout from "~/pages/dashboard/layout";

export default function Admin() {

  return (
    <DashboardLayout>
      <h1>Welcome to the dashboard</h1>
    </DashboardLayout>
  );
}

