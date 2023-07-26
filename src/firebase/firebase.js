// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH5uX9ZTXkLZ9yqjYWUNIjDeweoKdfa34",
  authDomain: "netflix-473cc.firebaseapp.com",
  projectId: "netflix-473cc",
  storageBucket: "netflix-473cc.appspot.com",
  messagingSenderId: "1008518203955",
  appId: "1:1008518203955:web:f2cfa04fe1935bdc173146",
  measurementId: "G-Y7RVYT2B46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
