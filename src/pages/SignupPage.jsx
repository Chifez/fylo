import React from 'react'
import Signup from '../components/signup'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <div>
        <h2>sign up</h2>
        <Signup />
        <p>already have an account ?<Link to='/signin'>sign In</Link></p>
        <p>OR</p>
        <button> <img src="" alt="" /><a href="#google">continue with google</a></button>
    </div>
  )
}

export default SignupPage