import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-darkbg w-3/5 p-20 text-center absolute' >
        <h3 className='text-2xl font-semibold m-3'>Get early access today</h3>
        <p>it only takes a minute to sign up to our free starter tier is extremely generous.if you have any questions,our support team would be happy to help you</p>
        <div className='w-11/12'>
            <input className='w-7/12 rounded-full p-2 m-2' type="text" placeholder='example@gmail.com'/>
            <button className='w-4/12 bg-pool rounded-full p-2'>get started for free</button>
        </div>
    </div>

  )
}

export default Register