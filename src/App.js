import './App.css';
import Home from './pages/Home';
import { useState,useEffect } from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signOut,signInWithPopup,onAuthStateChanged } from 'firebase/auth';
import {auth} from './fire.js'
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
        if(currentUser !== user){
          setUser(currentUser)
        }else{
          setUser('')
        }
      })
      console.log(user)
      },[])
      

const handleLogin = async () =>{
    try{
     await signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        // setEmail('')
        // setPassword('')
        const currentUser = userCredential.user;
        navigate('/dashboard');
        setUser(currentUser);
        //use toastify to set a successful login 
      })
    }catch(error){
      const errorMessage = error.message;
      alert(`${errorMessage}`)
      // setError(errorCode && errorMessage);
    }
  
    
  }

const handleSignUp =async () =>{
  try{
   await createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      // setEmail('')
      // setPassword('')
      const currentUser = userCredential.currentUser;
      navigate('/dashboard')
      setUser(currentUser);
      
      //use toastify or an alert system to show succesful login
    })

  }
  catch(error){
    const errorMessage = error.message;
    alert(`${errorMessage}`)
    // setError(errorCode && errorMessage);
  }
}

const googleSignIn =async () => {
  try{
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth,provider)
    .then((result) => {
      navigate('/dashboard')
      const currentUser= result.currentUser;
      setUser(currentUser)
      //use toastify to set up a suceesful login 
    })
  }
  catch(error){
    const errorMessage =error.message;
    alert(`${errorMessage}`)
    // setError(errorMessage);
  }

}

const logOut =async()=>{
  try{
   await signOut(auth)
    .then(()=>{
      navigate('/signin')
      //probably set an alert to show the sign out was successful and also navigate out
    })

  }
  catch(error){
    const errorMessage = error.message;
    alert(`${errorMessage}`)
    // setError(errorMessage);
  }
}

  return (
   
      <Routes>
        <Route path='/' element= {<Home />} />
        
        <Route path='signin' element={<SigninPage
          email ={email}
          setEmail ={setEmail}
          password ={password}
          setPassword ={setPassword}
          error={error}
          googleSignIn={googleSignIn}
          handleLogin ={handleLogin }
          />} />

        <Route path='signup' element ={<SignupPage 
          email ={email}
          setEmail ={setEmail}
          password ={password}
          setPassword ={setPassword}
          name={name}
          setName={setName}
          handleSignUp={handleSignUp}
          error={error}
        />} />

        <Route path='dashboard/*' element={<Dashboard
         name={name}
         logOut={logOut}
         email ={email}
         setEmail ={setEmail}
         password ={password}
         setPassword ={setPassword}
         setName={setName}
         setError={setError}
         error={error}
         />} />

        <Route path='reset' element={<Reset 
          email ={email}
          setEmail ={setEmail}
          error={error}
          setError={setError}
        />} />
      </Routes>
  );
}

export default App;
