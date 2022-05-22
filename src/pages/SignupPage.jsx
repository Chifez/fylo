import React from 'react'
import Signup from '../components/signup'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <div className='bg-light flex items-center justify-center h-screen text-white'>
        <div className='border-2 border-darkbg rounded-md p-10 shadow-md shadow-gray-500 '>
          <h2 className='text-center text-xl font-semibold capitalize'>sign up</h2>
          <Signup />
          <div className='text-center'>
          <p>already have an account ?<Link className='text-yellow-500' to='/signin'> sign In</Link></p>
          </div>
        </div>
    </div>
  )
}

export default SignupPage