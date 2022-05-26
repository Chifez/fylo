import React from 'react'
import { useEffect } from 'react'
import Signin from '../components/signIn'
import {Link,useNavigate} from 'react-router-dom'

const SigninPage = ({email,user,
  setEmail,
  password,
  setPassword,
  googleSignIn,
  handleLogin,
  error}) => {
 
 const navigate = useNavigate()
    useEffect(()=>{
      if (user) navigate('/dashboard')
    },[user])

  return (
    <div id='signin' className='bg-light flex justify-center items-center h-screen text-center '>
      <div className='border-2 border-darkbg rounded-md p-10 '>
        <h2 className='text-white'>welcome, login</h2>
        <div>
        <Signin email ={email}
          setEmail ={setEmail}
          password ={password}
          setPassword ={setPassword}
          handleLogin ={handleLogin}/>
        <p>OR</p>
        <button className='text-white'onClick={googleSignIn}> <img src="" alt="" /><p>continue with google</p></button>
        {error && <p>{error}</p>}
        <p className='text-white'>don't have an account? <Link className='text-[yellow]' to="/signup">sign up</Link></p>
        </div>

      </div>
    </div>
  )
}
export default SigninPage