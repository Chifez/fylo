import React from 'react'
import { Routes,Route,Outlet,Link } from 'react-router-dom'
// import Updatepassword from '../components/updatepassword'
// import Changename from '../components/changename'

const Settings = (email,
    setEmail,
    password,
    setPassword,error,setError) => {


  return (
    <div className='flex flex-col justify-start items-center'> 
    <div>
      <div>
          <Link to='/dashboard'>
            <button>back home</button>
          </Link>
            <h3>settings</h3>
      </div>
       <Outlet />
    </div>
      </div>
  )
}

export default Settings 