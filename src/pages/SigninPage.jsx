import React from 'react'
import Signin from '../components/signIn'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle, handleLogin,sendPasswordReset}from '../fire.js'


const SigninPage = ({email,setEmail,password,setPassword}) => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  
 useEffect(()=>{
   if(loading){

   }if(user) navigate('/dashboard')
 },[user,loading])
  

  return (
    <div id='signin' className='bg-light flex justify-center items-center h-screen text-center '>
      <div className='border-2 border-darkbg rounded-md p-10 shadow-md shadow-gray-500'>
        <h2 className='text-xl font-semibold capitalize text-white'>welcome, login</h2>
        <div>
        <Signin setEmail={setEmail} email={email} setPassword={setPassword} password={password} handleLogin={handleLogin} sendPasswordReset={sendPasswordReset} error={error}/>
        <p className='text-white'> — OR —</p>
        <button onClick={()=>signInWithGoogle} className='border-2 font-semibold border-transparent px-10 rounded-full bg-gray-700 text-black'> <img src="" alt="" />continue with google</button>
        <p className='text-white'>don't have an account ? <Link className='text-yellow-500' to="/signup"> sign up</Link></p>
        </div>
      </div>
    </div>
  )
}
export default SigninPage