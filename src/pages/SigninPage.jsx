import React from 'react'
import Signin from '../components/signIn'
import {Link} from 'react-router-dom'

const SigninPage = () => {
  return (
    <div id='signin'>
        <h2>welcome back, login</h2>
        <div>
        <Signin />
        <p>OR</p>
        <button> <img src="" alt="" /><a href="#google">continue with google</a></button>
        <p>don't have an account? <Link to="/signup">sign up</Link></p>
        </div>
    </div>
  )
}
export default SigninPage