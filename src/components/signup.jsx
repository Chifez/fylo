import React from 'react'


// import {createUserWithEmailAndPassword} from "firebase/auth";
// import auth from '../fire.js'

const Signup = ({setEmail,setPassword,setName,register}) => {


    // const handleLogin =async()=>{
    //     await createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       // Signed in 
    //       const user = userCredential.user;
    //       setUser(user)
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //     });
    //   }
    



  return (
    <form action="submit">
        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="firstname">firstname</label>
            <input onChange={(e)=>{setName(e.target.value)}} type="text" name="firstname" placeholder='firstname' required />
        </div>

        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="lastname">lastname</label>
            <input type="text" name ="lastname" placeholder='lastname' />
        </div>

        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="gender" placeholder='gender'>gender</label>
            <select name="gender" id="gender">
                <option value="">select a gender</option>
                <option value="gender">male</option>
                <option value="gender">female</option>
            </select>
        </div>

        <div className='my-2 flex flex-col'>
            <label className='text-white' htmlFor="age">age</label>
            <input type="date" name="age" placeholder='age'/>
        </div>

        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="email">
                email
            </label>
            <input type="email" name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} required />
        </div>

        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="password">
                password
            </label>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}   required />
            <img src="" alt="" />
        </div>
        <div className='text-center border-2 border-transparent px-16 bg-btn hover:bg-blue-600 hover:text-black'>
        <button onClick={register} className='font-semibold text-white'>sign up</button>
        </div>
    </form>
  )
}
export default Signup