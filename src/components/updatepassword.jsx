import React from 'react'
import { useState } from 'react'
import { auth } from '../fire';
import { updatePassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Updatepassword = (email,
    setEmail,
    password,
    setPassword,error,setError) => {

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
     try{
         const user = auth.currentUser
       await updatePassword(user,newPassword)
         .then(()=>{

         })
     } catch(error){
         const errorMessage=error.message
        setError(errorMessage)
     }
 }
        
  return (
    <div>
         <form action="submit">
            <h3>change password</h3>
            <div>
            <label htmlFor="passsword">password</label>
            <input type="text"  onChange={(e)=>setChangePassword(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="passsword">confirm password</label>
            <input type="text"  onChange={(e)=>setconfirmPassword(e.target.value)}/>
            {error && <p>{error}</p>}
            <div>
            <button onClick={passwordUpdate}>update password</button>
            <button><Link to ='/dashboard/settings'>back to settings</Link></button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Updatepassword