import React,{useState}from 'react'
import { Link } from 'react-router-dom'

const Changename = ({setName}) => {
 const[updateName,setUpdateName] = useState("")
  return (
    <div>
        <input type="text" onChange={(e)=>setUpdateName(e.target.value)}/>
        <button onClick={()=>{setName(updateName)}}>update name</button>
        <button><Link to ='/dashboard/settings'>back to settings</Link></button>
    </div>
  )
}

export default Changename