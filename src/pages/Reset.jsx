import React from 'react'
import { auth } from '../fire'
import { sendPasswordResetEmail } from 'firebase/auth'


const Reset = ({setEmail,email,error,setError}) => {

const resetPassword =async()=>{
    try{
        await sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert("sucessful,check your email")
        })
    }catch(error){
        const errorMessage = error.message;
        setError(errorMessage)
    }
}

  return (
    <div className='bg-darkbg h-screen flex justify-center items-center'>
        <div className='flex flex-col border-2 border-darkbg rounded-md p-10 shadow-md shadow-gray-500'>
        <h2 className='text-center text-white text-xl font-semibold'>Reset password</h2>
        <input className='m-5 px-5 text-base font-medium' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
        {error && <p>{error}</p>}
        <button onClick={resetPassword}className='border-2 font-semibold border-transparent px-10 text-white rounded-full bg-btn hover:bg-blue-600 hover:text-black' >reset password</button>
        </div>
    </div>
  )
}

export default Reset