
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTdMTvLlRbAGnBuwnF5c8jI1ypqeQlpP8",
  authDomain: "curus-d9e17.firebaseapp.com",
  projectId: "curus-d9e17",
  storageBucket: "curus-d9e17.appspot.com",
  messagingSenderId: "493388684203",
  appId: "1:493388684203:web:6de9ed5aa5652b085610ee",
  measurementId: "G-0MXXBXCV7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
