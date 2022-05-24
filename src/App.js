import './App.css';
import Home from './pages/Home';
import { useState,useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signOut,signInWithPopup,onAuthStateChanged } from 'firebase/auth';
import {auth,db} from './fire.js'
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/dashboard';
import Reset from './pages/Reset';

function App() {
  const [email,setEmail] =useState('');
    const [password,setPassword]=useState('');
    const [name, setName] = useState("");
    const[user,setUser] =useState('');
    const[error,setError] = useState('');
    const navigate =useNavigate();

    useEffect(()=>{
      onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
          setUser(currentUser)
        }
        console.log(user)
      })
    },[])
      

const handleLogin = async () =>{
  try{
   await signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const currentUser = userCredential.user;
      navigate('/dashboard')
      // setUser(currentUser);
      // console.log(user)
      //set the navigation here 
    })

  }catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode && errorMessage);
  }
}

const handleSignUp =async () =>{
  try{
   await createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const currentUser = userCredential.currentUser;
      navigate('/dashboard')
      // setUser(currentUser);
      // console.log(user)
      //set the navigation here
    })

  }
  catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode && errorMessage);
  }
}

const googleSignIn =async () => {
  try{
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth,provider)
    .then((result) => {
      navigate('/dashboard')
      // const currentUser= result.currentUser;
      // setUser(currentUser)
      //set the navigation here too
    })
  }
  catch(error){
    const errorMessage =error.message;
    setError(errorMessage);
  }

}

const logOut =async()=>{
  try{
   await signOut(auth)
    .then(()=>{
      navigate('/signin')
      // setUser('')
      // console.log(user)
      //probably set an alert to show the sign out was successful and also navigate out
    })

  }
  catch(error){
    const errorMessage = error.message;
    setError(errorMessage);
  }
}

  useEffect (() =>{
    if (user){
      
    }
  },[user])

  return (
   
      <Routes>
        <Route path='/' element= {<Home />} />
        
        <Route path='/signin' element={<SigninPage
          email ={email}
          setEmail ={setEmail}
          password ={password}
          setPassword ={setPassword}
          error={error}
          googleSignIn={googleSignIn}
          handleLogin ={handleLogin }
          />} />

        <Route path='/signup' element ={<SignupPage 
          email ={email}
          setEmail ={setEmail}
          password ={password}
          setPassword ={setPassword}
          name={name}
          setName={setName}
          handleSignUp={handleSignUp}
          error={error}

        />} />

        <Route path='/dashboard' element={<Dashboard
         name={name}
         logOut={logOut}
         />} />

        <Route path='/reset' element={<Reset 
          email ={email}
          setEmail ={setEmail}
        />} />
      </Routes>
  );
}

export default App;
