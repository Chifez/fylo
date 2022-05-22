import React from 'react'
import { useState,useEffect } from 'react'
import {signInWithEmailAndPassword} from "firebase/auth";
import auth from '../fire.js'


const Signin = () => {
  const [user,setUser] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword]=useState('')
  const [passwordError,setPasswordError] =useState('')
  const [emailError, setEmailError] =useState('')

  
 
  const handleLogin =async()=>{
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setEmailError(errorMessage);
      setPasswordError(errorMessage)
    });
  }

  return (
      <>
      <form action="submit" >
        <div className='flex flex-col'>
        <input className='my-5 px-3' type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input className='my-5 px-3' type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className='border-2 border-transparent font-semibold px-24 bg-btn hover:bg-blue-600 hover:text-black' onClick={handleLogin}>login </button>
        <p>
             <a className='text-sm' href="#google">forgot password?</a>
        </p>
      </form>
      </>
  )
}

export default Signin