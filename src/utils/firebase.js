// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4VnD9tHxIXw6REkYMC0jhN_QgYhZd4fs",
  authDomain: "fooddelivery-000.firebaseapp.com",
  projectId: "fooddelivery-000",
  storageBucket: "fooddelivery-000.appspot.com",
  messagingSenderId: "501165176708",
  appId: "1:501165176708:web:660f6246f82a38d424cfd1",
  measurementId: "G-26PLNM9CQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
