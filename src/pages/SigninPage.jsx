import React from 'react'
import Signin from '../components/signIn'
import {Link} from 'react-router-dom'

const SigninPage = () => {
  return (
    <div id='signin' className='bg-light flex justify-center items-center h-screen text-center text-white'>
      <div className='border-2 border-darkbg rounded-md p-10 shadow-md shadow-gray-500'>
        <h2 className='text-xl font-semibold capitalize'>welcome, login</h2>
        <div>
        <Signin />
        <p className=''> — OR —</p>
        <button  className='border-2 border-transparent px-10 rounded-full bg-gray-700 text-black'> <img src="" alt="" /><a href="#google">continue with google</a></button>
        <p>don't have an account ? <Link className='text-yellow-500' to="/signup"> sign up</Link></p>
        </div>

      </div>
    </div>
  )
}
export default SigninPage