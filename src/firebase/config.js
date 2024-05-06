// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvMZkqSkeTfh9P453j8gwdlZZ2f6zhzLg",
  authDomain: "react-curso-bfc25.firebaseapp.com",
  projectId: "react-curso-bfc25",
  storageBucket: "react-curso-bfc25.appspot.com",
  messagingSenderId: "1060791095110",
  appId: "1:1060791095110:web:1c89bac6ba9ec6e3521f47"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp ); // Contiene todas las funcionalidades de identificacicom
export const FirebaseDB   = getFirestore( FirebaseApp ); // Contiene la configuracion de mi base de datos