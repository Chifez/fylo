import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Settings = (email,
    setEmail,
    password,
    setPassword,error,setError) => {


  return (
    
    <div className='h-screen w-[80vw] p-3 flex flex-col justify-start'>
      <div className='flex flex-col'>
          <Link to='/dashboard'>
            <button className='bg-pool px-3 py-1 border-2 border-transparent rounded-md'>back home</button>
          </Link>
            <h3 className='text-center text-2xl m-5 relative font-semibold capitalize'>settings</h3>
      </div>
       <Outlet />
    </div>
  )
}

export default Settings 