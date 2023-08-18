import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
  type DefaultUser,
  // type Profile as DefaultProfile,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { app, db, adminAuth } from "~/lib/firebase/admin-config";
import { env } from "~/env.mjs";
import type { DefaultJWT } from "next-auth/jwt";
import SignUpUser from "~/server/auth/sign-up-process";
import CreateCustomToken from "~/server/auth/create-custom-token";
import SetUserRolesViaCustomClaims from "~/server/auth/set-custom-claims";
import GetUserRole from "~/server/auth/get-user-role";

export type UserRole = "admin" | "agent" | "user" | null;

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      role?: string;
      // ...other properties
      // role: UserRole;
    };
    customToken?: string;
  }

  interface Profile {
    iss?: string;
    azp?: string;
    aud?: string;
    at_hash?: string;
    given_name?: string;
    family_name?: string;
    locale?: string;
    iat?: number;
    exp?: number;
    name?: string;
    email?: string;
    email_verified?: boolean;
    picture?: string;
    sub?: string;
  }

  // interface AdapterUser extends DefaultUser {
  //   role: UserRole;
  // }

  // interface User extends DefaultUser {
  //   role: UserRole;
  // }

  

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    exp?: number;
    iat?: number;
    jti?: string;
    customToken?: string;
    role?: string;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    // signIn: async ({account, profile, user}) => {
    //   /**
    //    * todo: intercept sign in here
    //    */
    //   return true
    // },
    session: async ({ session, token }) => {
    session.user.id = token.sub ? token.sub : '';
    session.customToken = token.customToken ? token.customToken : '';
    session.user.role = token.role ? token.role : '';

      return session;
    },
    jwt: async ({
      token,
      account,
      profile,
      trigger
    }) => {

      let role;

      if("signUp" === trigger) {
        if(profile) await SignUpUser(account, profile, token)
      }

      if("signIn" === trigger) {
        if(account?.provider === "google") {
          token.role = await GetUserRole(profile);
        }
      }

      if("update" !== trigger) {
        if(account?.provider === "google") {
          token.customToken = await CreateCustomToken(token);
          
        }
      }

      return token;
    }
  },
  session: {
    strategy: 'jwt'
  },
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "your_username" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {
    //     // You need to provide your own logic here that takes the credentials
    //     // submitted and returns either a object representing a user or value
    //     // that is false/null if the credentials are invalid.
    //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //     // You can also use the `req` object to obtain additional parameters
    //     // (i.e., the request IP address)
    //     const res = await fetch("/api/credentials/login", {
    //       method: 'POST',
    //       body: JSON.stringify(credentials),
    //       headers: { "Content-Type": "application/json" }
    //     })
    //     const user = await res.json()
  
    //     // If no error and we have user data, return it
    //     if (res.ok && user) {
    //       return user
    //     }
    //     // Return null if user data could not be retrieved
    //     return null
    //   }
    // })
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  adapter: FirestoreAdapter(db),
  debug: env.NODE_ENV === "development"
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
