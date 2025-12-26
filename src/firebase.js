// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkH_ZZY-HwI9BRfELCsL0Mx9YGFJuufyw",
  authDomain: "mrfinisher.firebaseapp.com",
  projectId: "mrfinisher",
  storageBucket: "mrfinisher.firebasestorage.app",
  messagingSenderId: "943881114982",
  appId: "1:943881114982:web:609c341b62d525c0dd64a7",
  measurementId: "G-F990FWSCSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);