// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDFKdwjRKRmQsThnSnUDufju6d-C-lGDgo",
  authDomain: "webkelasxrpl2.firebaseapp.com",
  projectId: "webkelasxrpl2",
  storageBucket: "webkelasxrpl2.appspot.com",
  messagingSenderId: "688839380825",
  appId: "1:688839380825:web:cdae7ba46729e36f9a4648",
  measurementId: "G-3N6QXXTJ7S"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();