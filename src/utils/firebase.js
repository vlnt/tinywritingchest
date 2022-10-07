// Import the functions you need from the SDKs you need
import * as firebase  from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
//import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApKywuBDi1rHMmveIlX-YWKKCSG8JeRLk",
  authDomain: "tinywritingchest.firebaseapp.com",
  databaseURL: "https://tinywritingchest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tinywritingchest",
  storageBucket: "tinywritingchest.appspot.com",
  messagingSenderId: "971883656591",
  appId: "1:971883656591:web:a1b0e3797f41e6d107c7fa",
  measurementId: "G-WE6Y3LVGLC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export default {app, auth, database}