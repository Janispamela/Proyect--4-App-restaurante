// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApllx7KhW-1KtKkN5pOt_ptqBFj7wA6y8",
  authDomain: "proyecto-4-app-restaurante.firebaseapp.com",
  projectId: "proyecto-4-app-restaurante",
  storageBucket: "proyecto-4-app-restaurante.appspot.com",
  messagingSenderId: "226261714415",
  appId: "1:226261714415:web:91f15e7b5e48927060221a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);