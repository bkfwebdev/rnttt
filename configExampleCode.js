// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCubBXuwYviGJ6XUOIQfRgi56_ZatWRy0",
  authDomain: "tictactoereactfirebase.firebaseapp.com",
  projectId: "tictactoereactfirebase",
  storageBucket: "tictactoereactfirebase.appspot.com",
  messagingSenderId: "1018900234625",
  appId: "1:1018900234625:web:eaeb1035752ccfcd43e880",
  measurementId: "G-HWBJ7TG3CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);