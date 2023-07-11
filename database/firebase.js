// database/firebaseDb.js
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDCubBXuwYviGJ6XUOIQfRgi56_ZatWRy0",
    authDomain: "tictactoereactfirebase.firebaseapp.com",
    projectId: "tictactoereactfirebase",
    storageBucket: "tictactoereactfirebase.appspot.com",
    messagingSenderId: "1018900234625",
    appId: "1:1018900234625:web:eaeb1035752ccfcd43e880",
    measurementId: "G-HWBJ7TG3CQ"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;