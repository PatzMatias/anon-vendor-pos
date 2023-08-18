import React from "react";
import { useSession } from "next-auth/react";
import { db } from "~/lib/firebase/config";

export default function Admin() {

  return (
    <>
      <h1>This is a user page.</h1>
    </>
  );
}

