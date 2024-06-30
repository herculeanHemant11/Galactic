// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "dine-easy-11.firebaseapp.com",
  projectId: "dine-easy-11",
  storageBucket: "dine-easy-11.appspot.com",
  messagingSenderId: "474851227904",
  appId: "1:474851227904:web:baec83c64a578a2c77dbe5",
  measurementId: "G-C3VBVS1LQG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
