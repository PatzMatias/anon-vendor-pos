import React from "react";
import { useSession, signOut } from "next-auth/react";


export default function SignIn() {
  const { data: session } = useSession();

  console.log("session data", session);

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      {/* <button onClick={() => signIn()}>Sign in</button> */}
    </>
  )
}