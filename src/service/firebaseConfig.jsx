// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Firestore, getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJFF69wjmYogVZtws3SBTnCafAE6_FAiM",
  authDomain: "ai-trip-planner-7c574.firebaseapp.com",
  projectId: "ai-trip-planner-7c574",
  storageBucket: "ai-trip-planner-7c574.firebasestorage.app",
  messagingSenderId: "902571485183",
  appId: "1:902571485183:web:4280c168069859efd829ca",
  measurementId: "G-0KWVFLFBGF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

