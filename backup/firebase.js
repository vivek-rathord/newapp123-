// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR51HBee8dlrGE6o_ZGoehCwO2WUzHqzQ",
  authDomain: "otp-netcoder-website-demo.firebaseapp.com",
  projectId: "otp-netcoder-website-demo",
  storageBucket: "otp-netcoder-website-demo.firebasestorage.app",
  messagingSenderId: "635675102143",
  appId: "1:635675102143:web:5cd64d587cffb77ec8ef0a",
  measurementId: "G-877FWG6SJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export Firebase services
export { auth, RecaptchaVerifier, signInWithPhoneNumber };