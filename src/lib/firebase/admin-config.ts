import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { env } from "~/env.mjs";

// const firebaseAdminConfig = {credential: cert(env.GOOGLE_APPLICATION_CREDENTIALS)}
const firebaseAdminConfig = {
  credential: cert({
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  })
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseAdminConfig);
const db = getFirestore();
const adminAuth = getAuth();

export {
  app,
  db,
  adminAuth,
};
