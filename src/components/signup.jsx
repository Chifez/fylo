import React from 'react'
import { useState,useEffect } from 'react'
import{Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth";
import auth from '../fire.js'

const Signup = () => {
    const [user,setUser] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword]=useState('')

    const handleLogin =async()=>{
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      }
    



  return (
    <form action="submit">
        <div className='my-2 flex flex-col'>
            <label className='w-5' htmlFor="firstname">firstname</label>
            <input type="text" name="firstname" placeholder='firstname' required />
        </div>

        <div className='my-2 flex flex-col'>
            <label className='w-5' htmlFor="lastname">lastname</label>
            <input type="text" name ="lastname" placeholder='lastname' />
        </div>

        <div className='my-2 flex flex-col'>
            <label className='w-5' htmlFor="gender" placeholder='gender'>gender</label>
            <select name="gender" id="gender">
                <option value="">gender</option>
                <option value="gender">male</option>
                <option value="gender">female</option>
            </select>
        </div>

        <div className='my-2 flex flex-col'>
            <label className='w-5' htmlFor="age">age</label>
            <input type="date" name="age" placeholder='age'/>
        </div>

        <div className='my-2 flex flex-col'>
            <label className='mr-10' htmlFor="email">
                email
            </label>
            <input type="email" name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} required />
        </div>

        <div className='my-2 flex flex-col'>
            <label className='w-5' htmlFor="password">
                password
            </label>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}   required />
            <img src="" alt="" />
        </div>
        <div className='text-center font-semibold border-2 border-transparent px-16 bg-btn hover:bg-blue-600 hover:text-black'>
        <button onClick={handleLogin}>sign up</button>
        </div>
    </form>
  )
}

export default Signup