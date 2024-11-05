// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZBoIN7LESW2_Mk8_ELKDriOWWXMkxGlg",
    authDomain: "webapp-d815e.firebaseapp.com",
    projectId: "webapp-d815e",
    storageBucket: "webapp-d815e.appspot.com",
    messagingSenderId: "838186904312",
    appId: "1:838186904312:web:6fbbb51930a26cd6c6a90d",
    measurementId: "G-WYES6HBJHZ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
