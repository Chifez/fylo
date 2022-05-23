import React from 'react'

const Reset = ({setEmail,sendPasswordReset,email}) => {
  return (
    <div className='bg-darkbg h-screen flex justify-center items-center'>
        <div className='flex flex-col border-2 border-darkbg rounded-md p-10 shadow-md shadow-gray-500'>
        <h2 className='text-center text-white text-xl font-semibold'>Reset password</h2>
        <input className='m-5 px-5 text-base font-medium' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
        <button className='border-2 font-semibold border-transparent px-10 text-white rounded-full bg-btn hover:bg-blue-600 hover:text-black' onClick={()=>{sendPasswordReset(email)}}>reset password</button>
        </div>
    </div>
  )
}

export default Reset