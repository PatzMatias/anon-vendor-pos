import type { DefaultJWT, JWT } from "next-auth/jwt";
import { auth } from "~/lib/firebase/client-config";
import { signInWithCustomToken } from "firebase/auth";


export type CUSTOM_CLAIMS = {
  user: boolean,
  admin: boolean,
  agent: boolean;
}

export default async function SignInWithCustomToken(token: string) {
  try {
    const user = await signInWithCustomToken(auth, token)
    return user;
  } catch(e) {
    console.error(e);
    return false;
  }
}