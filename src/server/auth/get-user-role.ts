import type { Profile } from "next-auth";
import { adminAuth } from "~/lib/firebase/admin-config";

export default async function GetUserRole(profile?: Profile) {
  try {
    let role;
    if(profile && profile.email) {
      const user = await adminAuth.getUserByEmail(profile.email);
      if(user.customClaims) {
        const getRole = Object.entries(user.customClaims)
          .filter(([_key, value]: [string, boolean]) => value)
          .map(([key, _value]: [string, string]) => key);
        role = getRole[0];
      }
    }
    return role;
  } catch(e) {
    console.error(e);
    return undefined;
  }
}