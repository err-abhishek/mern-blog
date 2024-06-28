// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-217d9.firebaseapp.com",
  projectId: "mern-blog-217d9",
  storageBucket: "mern-blog-217d9.appspot.com",
  messagingSenderId: "173853446659",
  appId: "1:173853446659:web:47fdb45abade6a323c3436"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);