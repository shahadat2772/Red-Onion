// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0u4dpT_rOUDR6nurkkbBeYY8qE4b_SyQ",
  authDomain: "red-onion-d5724.firebaseapp.com",
  projectId: "red-onion-d5724",
  storageBucket: "red-onion-d5724.appspot.com",
  messagingSenderId: "605315776833",
  appId: "1:605315776833:web:708af08be6cc9408a021c0",
  measurementId: "G-HG6WK9W346",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
