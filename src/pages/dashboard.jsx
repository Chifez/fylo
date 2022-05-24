import React from 'react'
import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Dashmain from '../components/dashmain'

const Dashboard = ({name,logOut,user}) => {
    const [upload, setUpload] = useState([])

    const navigate = useNavigate();

    useEffect(() =>{
        if(user){
            navigate('/dashboard')
        }else{
            navigate('/signin')
        }
    })
  
  return (
      <div className='bg-darkbg h-auto w-screen grid grid-cols-4 absolute'>
          <nav className='h-screen flex flex-col justify-around items-center col-span-1 font-semibold text-xl capitalize text-white'>
              <div>
                  <img src="" alt="" />
                  <h3>name</h3>
              </div>
              <div className=''>
                <div>
                    <img src="" alt="" />
                    <h3>settings</h3>
                </div>
                <div className='bg-btn' onClick={logOut}>
                    <img src="" alt="" />
                    <h3>logout</h3>
                </div>
              </div>
          </nav>
          <div className='col-span-3 h-screen w-full border-2 overflow-y-scroll p-5'>
              <h3 className='text-center font-semibold text-xl text-white uppercase'>My files</h3>
          <Dashmain upload={upload} setUpload={setUpload} />
          <button className='fixed left-2/4 top-3/4 text-center font-semibold text-xl px-16 rounded-md bg-btn border-2 border-transparent hover:text-black hover:bg-blue-600'onClick={(e) => setUpload(e.target[0].file[0])}> <input className='opacity-0 absolute w-16' type="file" />Add new file</button>
          </div>
      </div>
  )
}
export default Dashboard