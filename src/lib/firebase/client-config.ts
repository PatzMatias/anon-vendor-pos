// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { env } from "~/env.mjs";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_REACT_APP_API_KEY,
  authDomain: env.NEXT_PUBLIC_REACT_APP_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_REACT_APP_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_REACT_APP_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_REACT_APP_APP_ID
}

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const clientDb = getFirestore(app);
const auth = getAuth(app);

export { 
  clientDb,
  auth
}