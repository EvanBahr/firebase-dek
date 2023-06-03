// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnH7s3faKsjl8Xyne1AEPZInk917JC1Ug",
  authDomain: "fir-jang.firebaseapp.com",
  projectId: "fir-jang",
  storageBucket: "fir-jang.appspot.com",
  messagingSenderId: "428775696141",
  appId: "1:428775696141:web:e699a6017b2fa7f7a83244",
  measurementId: "G-SLEDTR8WBX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
