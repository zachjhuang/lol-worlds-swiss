// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrsw3IctnqcJPZtLI4igY3fyyjJQm58rE",
  authDomain: "worlds-swiss.firebaseapp.com",
  projectId: "worlds-swiss",
  storageBucket: "worlds-swiss.appspot.com",
  messagingSenderId: "964565555819",
  appId: "1:964565555819:web:88a573c62b4f664d6eaf2e",
  measurementId: "G-SVKM25VYYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);