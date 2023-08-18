import type { Profile, Account } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { adminAuth } from "~/lib/firebase/admin-config";
import SetUserRolesViaCustomClaims from "~/server/auth/set-custom-claims";

export default async function SignUpUser(account: Account | null, profile: Profile, token: JWT) {
  try {
    const newUserClaims = {
      user: true,
      admin: false,
      agent: false
    }
    if(profile?.email) {
      if(token?.sub) {
        const createUser = await adminAuth.createUser({
          email: profile?.email,
          emailVerified: profile?.email_verified,
          displayName: profile?.name,
          photoURL: token.picture,
          disabled: false,
        });
        const userId = createUser.uid;
        if(userId) {
          await SetUserRolesViaCustomClaims(userId, newUserClaims);
          return true;
        }
      }
      
    }
  } catch(e) {
    console.error(e);
    return false;
  }
} 