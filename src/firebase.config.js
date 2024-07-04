
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAkwKsQ3RRUhVc-8qUe2NuNAus0XbYQkOQ",
  authDomain: "maltimard-e8d56.firebaseapp.com",
  projectId: "maltimard-e8d56",
  storageBucket: "maltimard-e8d56.appspot.com",
  messagingSenderId: "1077808001859",
  appId: "1:1077808001859:web:3cad6faf976e747035b5f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app
