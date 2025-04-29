// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1c6c7.firebaseapp.com",
  projectId: "mern-blog-1c6c7",
  storageBucket: "mern-blog-1c6c7.firebasestorage.app",
  messagingSenderId: "134963830069",
  appId: "1:134963830069:web:eddfb7dae5df4f07f5807c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
