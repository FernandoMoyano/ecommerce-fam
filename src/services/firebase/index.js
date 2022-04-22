
import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBT1r3GF6NQgeJhT5Qap_QikLu8d0Y6VMg",
  authDomain: "todotechbackend.firebaseapp.com",
  projectId: "todotechbackend",
  storageBucket: "todotechbackend.appspot.com",
  messagingSenderId: "261518524205",
  appId: "1:261518524205:web:197bdd82c9765b0d2d9da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)