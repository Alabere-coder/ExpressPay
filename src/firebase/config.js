import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDiws6D6_0guIt2dwsw6fKY5jiDIMjAIks",
  authDomain: "expresspay-898ef.firebaseapp.com",
  projectId: "expresspay-898ef",
  storageBucket: "expresspay-898ef.appspot.com",
  messagingSenderId: "667639064904",
  appId: "1:667639064904:web:605394a467b442ac742b7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;