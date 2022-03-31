// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5SBLP-55EEq1-4d67YEdLA6nxictOJRk",
  authDomain: "week-4--react.firebaseapp.com",
  projectId: "week-4--react",
  storageBucket: "week-4--react.appspot.com",
  messagingSenderId: "391196437973",
  appId: "1:391196437973:web:4c4f66a9e421222ab3615c",
  measurementId: "G-HHNCPY03SH"
};
initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();