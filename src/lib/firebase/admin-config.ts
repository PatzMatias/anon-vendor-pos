import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { env } from "~/env.mjs";

const firebaseAdminConfig = {credential: cert(env.GOOGLE_APPLICATION_CREDENTIALS)}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseAdminConfig);
const db = getFirestore();
const adminAuth = getAuth();

export {
  app,
  db,
  adminAuth,
};
