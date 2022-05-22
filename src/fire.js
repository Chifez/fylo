// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signOut,sendPasswordResetEmail,createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore"

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

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const handleLogin= async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        
          // ...
          
    })
}catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
   
  };
  };


  const handleSignUp = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };



  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    handleLogin,
    handleSignUp,
    sendPasswordReset,
    logout,
  };