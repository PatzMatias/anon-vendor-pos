import { adminAuth } from "~/lib/firebase/admin-config";

export type CUSTOM_CLAIMS = {
  user: boolean,
  admin: boolean,
  agent: boolean;
}

export default async function SetUserRolesViaCustomClaims(uid: string, claims: CUSTOM_CLAIMS) {
  try {
    await adminAuth.setCustomUserClaims(uid, claims);
    return true;
  } catch(e) {
    console.error(e);
    return false;
  }
}