import firebase from "firebase/compat/app"; //doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
});

const db = firebaseApp.firestore();
export { db };
