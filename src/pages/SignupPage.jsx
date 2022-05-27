import React from 'react'
import Signup from '../components/signup'
import { Link } from "react-router-dom";


const SignupPage = ({ email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  handleSignUp,
  error 
}) => {
  
  return (
    <div className='bg-light flex items-center justify-center h-screen '>
        <div className='border-2 border-darkbg rounded-md p-10 shadow-md shadow-gray-500 '>
          <h2 className='text-center text-xl font-semibold capitalize text-white'>sign up</h2>
          <Signup  email ={email}
          setEmail ={setEmail}
          password ={password}
          setPassword ={setPassword}
          name={name}
          setName={setName}
          handleSignUp={handleSignUp}
/>
          <div className='text-center'>
          {/* {error && <p>{error}</p>} */}
          <p className='text-white'>already have an account ?<Link to='/signin' className='text-yellow-500' > sign In</Link></p>
          </div>
        </div>
    </div>
  )
}
export default SignupPage