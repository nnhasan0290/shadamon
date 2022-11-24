// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserPopupRedirectResolver,
  browserSessionPersistence,
  getAuth,
  initializeAuth,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKQIFPHhpSL7v5366mF_WhYDKZyDGNKZQ",
  authDomain: "shadamon-369505.firebaseapp.com",
  projectId: "shadamon-369505",
  storageBucket: "shadamon-369505.appspot.com",
  messagingSenderId: "1077672517924",
  appId: "1:1077672517924:web:d9a810adbebecde875d3b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

auth.languageCode = "bn";
