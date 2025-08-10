// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKp7Hkew-H3JnkcWuUZ7Xk_DW8S18vG_g",
  authDomain: "codecraft-ai-pbimz.firebaseapp.com",
  projectId: "codecraft-ai-pbimz",
  storageBucket: "codecraft-ai-pbimz.firebasestorage.app",
  messagingSenderId: "487214446820",
  appId: "1:487214446820:web:4c1caeb010669fbd06d4f1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
