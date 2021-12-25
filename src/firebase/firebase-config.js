import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDYSr4_JtDt6QGMLJvWweVnpg4im6I4lKE",
  authDomain: "react-dashboard-c5269.firebaseapp.com",
  projectId: "react-dashboard-c5269",
  storageBucket: "react-dashboard-c5269.appspot.com",
  messagingSenderId: "228064722225",
  appId: "1:228064722225:web:17021bbc463e778dc48410",
};
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const googleAuthenticationProvider = new GoogleAuthProvider();
export { auth, db, googleAuthenticationProvider };
