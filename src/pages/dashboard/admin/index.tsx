import { useSession } from "next-auth/react";
import { db } from "~/lib/firebase/config";
import DashboardLayout from "../layout";

export default function Admin() {

  return (
    <>
      <DashboardLayout>
        <h1>This is an admin page.</h1>
      </DashboardLayout>
    </>
  );
}

