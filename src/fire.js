// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrF_f-xQ-ZwLRr4KfCgGwSSAgUyg6FkVY",
  authDomain: "login-3bb6c.firebaseapp.com",
  projectId: "login-3bb6c",
  storageBucket: "login-3bb6c.appspot.com",
  messagingSenderId: "357598710858",
  appId: "1:357598710858:web:c8d4e931ffd965ab30aab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app)

export{auth,db};