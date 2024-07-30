// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d1b34.firebaseapp.com",
  projectId: "mern-estate-d1b34",
  storageBucket: "mern-estate-d1b34.appspot.com",
  messagingSenderId: "1025220280110",
  appId: "1:1025220280110:web:2765065f66c201732e44bf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
