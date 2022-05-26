import React from 'react'


const Signup = ({email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    handleSignUp}) => {



  return (
    <form action="submit">
        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="firstname">firstname</label>
            <input className='outline-none' value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="firstname" placeholder='firstname' required />
        </div>

        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="lastname">lastname</label>
            <input className='outline-none' type="text" name ="lastname" placeholder='lastname' />
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
            <input className='outline-none' type="date" name="age" placeholder='age'/>
        </div>

        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="email">
                email
            </label>
            <input className='outline-none' value={email} type="email" name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} required />
        </div>

        <div className='my-2 flex flex-col'>
            <label  className='text-white' htmlFor="password">
                password
            </label>
            <input className='outline-none' type="password" value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}   required />
            <img src="" alt="" />
        </div>
        <div className='text-center border-2 border-transparent px-16 bg-btn hover:bg-blue-600 hover:text-black'>
        <button onClick={handleSignUp} className='font-semibold text-white'>sign up</button>
        </div>
    </form>
  )
}
export default Signup