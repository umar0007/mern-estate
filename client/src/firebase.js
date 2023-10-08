// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3b2c5.firebaseapp.com",
  projectId: "mern-estate-3b2c5",
  storageBucket: "mern-estate-3b2c5.appspot.com",
  messagingSenderId: "522032821323",
  appId: "1:522032821323:web:5602828f0a4a57ea6349ce" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);