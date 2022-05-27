import React from 'react'
import { useState } from 'react'
import { auth } from '../fire';
import { updatePassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Updatepassword = ({email,
    setEmail,
    password,
    setPassword,error,setError}) => {

 const [changePassword,setChangePassword] = useState('');
 const [confirmPassword,setconfirmPassword] = useState('');

 const newPassword =()=>{
     if (changePassword.length >= 6 && confirmPassword.length >= 6 ){   
         if(changePassword === confirmPassword){
            setPassword(confirmPassword)
         }else{
             alert("password must be the same")
             return;
         }
         return password;
     }else{
         alert("password must be 6 or more characters long")
     }
 }

 const passwordUpdate =async()=>{
    newPassword(); 
     if(password){
         try{
             const user = auth.currentUser
           await updatePassword(user,newPassword)
             .then(()=>{
                //use either an alert or toastify to say successful
             })
         } catch(error){
             const errorMessage=error.message
            alert(`${errorMessage}`)
         }
     }
 }
        
  return (
    <div className='mx-auto flex justify-center items-center bg-light h-[40vh] w-[40vw]'>
         <form action="submit" className='flex flex-col justify-center items-center  '>
            <h3 className='p-3 font-semibold text-xl text-white capitalize'>change password</h3>
            <div className='flex flex-col m-3'>
            <label htmlFor="passsword" className='text-white font-medium capitalize'>password</label>
            <input className=' px-2 text-lg outline-none' type="text"  onChange={(e)=>setChangePassword(e.target.value)}/>
            </div>
            <div className='flex flex-col m-3'>
            <label htmlFor="passsword" className='text-white font-medium capitalize'>confirm password</label>
            <input className=' px-2 text-lg outline-none' type="text"  onChange={(e)=>setconfirmPassword(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
            <button className='px-2 py-1 m-2 bg-btn rounded-md font-medium capitalize' onClick={(e)=>{e.preventDefault();
                passwordUpdate()}}>update password</button>
            <button className='text-[yellow] underline'><Link to ='/dashboard/settings'>back to settings</Link></button>
            </div>
        </form>
    </div>
  )
}

export default Updatepassword