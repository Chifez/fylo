import React,{useState}from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { auth } from '../fire'

const Changename = ({setName,ChangeProfile, handleAuth}) => {
 const[updateName, setUpdateName] = useState("")

 const updateUserName =()=>{
  onAuthStateChanged(auth,(currentUser)=>{
    setName(updateName);
    ChangeProfile();

  })
 }

 
  return (
    <div className='mx-auto flex flex-col justify-center items-center bg-light h-[40vh] w-[40vw]'>
      <h3 className='text-white text-xl font-semibold'>Change Name</h3>
      <div className='flex flex-col m-3'>
        <label className='text-white' htmlFor="name">Name</label>
        <input type="text" onChange={(e)=>setUpdateName(e.target.value)}/>
      </div>
        <button className='px-2 py-1 m-2 bg-btn rounded-md font-medium capitalize' 
        onClick={()=>{updateUserName()}}>update name</button>
        <button className='text-[yellow] underline'><Link to ='/dashboard/settings'>back to settings</Link></button>
    </div>
  )
}
export default Changename