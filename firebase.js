// Import the functions you need from the SDKs you need

import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcYscEk0eqIzdmdl4hY-2rxCnX9B8t9PY",
  authDomain: "testproject-897b0.firebaseapp.com",
  projectId: "testproject-897b0",
  storageBucket: "testproject-897b0.appspot.com",
  messagingSenderId: "364731668603",
  appId: "1:364731668603:web:5ce479f9c35ea3b2c0aade"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.appId()

const db = firebase.firestore()

export { firebase, db}