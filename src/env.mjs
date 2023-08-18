import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string().min(1) : z.string().url()
    ),
    // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    FIREBASE_PROJECT_ID: z.string().min(1),
    FIREBASE_CLIENT_EMAIL: z.string().min(1),
    FIREBASE_PRIVATE_KEY: z.string().min(1),
    GOOGLE_APPLICATION_CREDENTIALS: z.string().min(1),
    // REACT_APP_API_KEY: z.string().min(1),
    // REACT_APP_AUTH_DOMAIN: z.string().min(1),
    // REACT_APP_PROJECT_ID: z.string().min(1),
    // REACT_APP_STORAGE_BUCKET: z.string().min(1),
    // REACT_APP_MESSAGING_SENDER_ID: z.string().min(1),
    // REACT_APP_APP_ID: z.string().min(1)
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
    NEXT_PUBLIC_REACT_APP_API_KEY: z.string().min(1),
    NEXT_PUBLIC_REACT_APP_AUTH_DOMAIN: z.string().min(1),
    NEXT_PUBLIC_REACT_APP_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_REACT_APP_STORAGE_BUCKET: z.string().min(1),
    NEXT_PUBLIC_REACT_APP_MESSAGING_SENDER_ID: z.string().min(1),
    NEXT_PUBLIC_REACT_APP_APP_ID: z.string().min(1)
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    // REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    // REACT_APP_AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
    // REACT_APP_PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
    // REACT_APP_STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
    // REACT_APP_MESSAGING_SENDER_ID: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // REACT_APP_APP_ID: process.env.REACT_APP_APP_ID,
    NEXT_PUBLIC_REACT_APP_API_KEY: process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
    NEXT_PUBLIC_REACT_APP_AUTH_DOMAIN: process.env.NEXT_PUBLIC_REACT_APP_AUTH_DOMAIN,
    NEXT_PUBLIC_REACT_APP_PROJECT_ID: process.env.NEXT_PUBLIC_REACT_APP_PROJECT_ID,
    NEXT_PUBLIC_REACT_APP_STORAGE_BUCKET: process.env.NEXT_PUBLIC_REACT_APP_STORAGE_BUCKET,
    NEXT_PUBLIC_REACT_APP_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_REACT_APP_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_REACT_APP_APP_ID: process.env.NEXT_PUBLIC_REACT_APP_APP_ID
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
