// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-597f2.firebaseapp.com",
  projectId: "real-estate-597f2",
  storageBucket: "real-estate-597f2.appspot.com",
  messagingSenderId: "745047074031",
  appId: "1:745047074031:web:37c03c0b3333e335cf271a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);