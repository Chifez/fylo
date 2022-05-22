import React from 'react'
import { Link } from 'react-router-dom'

const Signin = ({setEmail,email,setPassword,password,handleLogin}) => {
  

  return (
      <>
      <form action="submit" >
        <div className='flex flex-col'>
          <input className='my-5 px-3' type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
          <input className='my-5 px-3' type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
          <button className='border-2 border-transparent font-semibold px-24 bg-btn text-white hover:bg-blue-600 hover:text-black' onClick={() =>handleLogin(email,password)}>login</button>
          <p>
              <Link to='/reset' className='text-sm text-gray'>forgot password?</Link>
          </p>
      </form>
      </>
  )
}
export default Signin