import React from 'react'
import { Link } from 'react-router-dom'

const Signin = ({ email,
  setEmail,
  password,
  setPassword,
  handleLogin }) => {

  return (
      <>
      <form onSubmit={(e)=>e.preventDefault()} >
        <div className='flex flex-col'>
          <input className='my-5 px-3 outline-none' type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input className='my-5 px-3 outline-none' type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
          <button onClick={handleLogin} className='border-2 border-transparent font-semibold px-24 bg-btn text-white hover:bg-blue-600 hover:text-black'>login</button>
          <p>
              <Link to='/reset' className='text-sm text-[gray]'>forgot password ?</Link> {/*remember to create a reset page*/}
          </p>
      </form>
      </>
  )
}
export default Signin