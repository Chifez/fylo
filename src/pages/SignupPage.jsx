import React from 'react'
import Signup from '../components/signup'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, handleSignUp} from "../fire";

const SignupPage = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword]=useState('')
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const history = useNavigate();

    const register = () => {
      if (!name || !password || !email) alert("incomplete details"); //remember to fix the alert system
      handleSignUp(name, email, password);
    };

    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/dashboard");
    }, [user, loading]);

  return (
    <div className='bg-light flex items-center justify-center h-screen '>
        <div className='border-2 border-darkbg rounded-md p-10 shadow-md shadow-gray-500 '>
          <h2 className='text-center text-xl font-semibold capitalize text-white'>sign up</h2>
          <Signup setEmail={setEmail} setPassword={setPassword} setName={setName} register={register} />
          <div className='text-center'>
          <p className='text-white'>already have an account ?<Link to='/signin' className='text-yellow-500' > sign In</Link></p>
          </div>
        </div>
    </div>
  )
}
export default SignupPage