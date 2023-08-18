import type { JWT } from "next-auth/jwt";
import { adminAuth } from "~/lib/firebase/admin-config";

export default async function CreateCustomToken(token: JWT) {
  try {
    if(token && token.sub) {
      const customToken = await adminAuth.createCustomToken(token.sub);
      return customToken;
    }
  } catch(e) {
    console.error(e);
    return undefined;
  }
}