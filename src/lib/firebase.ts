import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-UmRKIXvwfV4Xf1Qp9Ns3t16YiwSCtZo",
  authDomain: "portfolio-6a471.firebaseapp.com",
  projectId: "portfolio-6a471",
  storageBucket: "portfolio-6a471.firebasestorage.app",
  messagingSenderId: "435845814367",
  appId: "1:435845814367:web:84fb6a34d0d916672ba3ea",
  measurementId: "G-P1E53TCPYY",
};

// Prevent re-initialization on hot reloads
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
