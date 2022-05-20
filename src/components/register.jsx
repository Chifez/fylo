import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-darkbg w-4/5 md:w-3/5 lg:px-20 px-5 py-6 text-center relative mx-auto -top-32 rounded-md' >
        <h3 className='text-2xl font-semibold m-3'>Get early access today</h3>
        <p>it only takes a minute to sign up to our free starter tier is extremely generous.if you have any questions,our support team would be happy to help you</p>
        <div className='flex flex-col justify-center items-center lg:flex-row w-11/12 sm:m-3'>
            <input className='w-11/12 lg:w-7/12 rounded-full p-2 m-2 text-black focus:outline-none' type="text" placeholder='example@gmail.com'/>
            <button className='w-11/12 lg:w-5/12 bg-pool rounded-full p-2 capitalize transition ease-in-out duration-500 lg:hover:bg-blue-300 lg:hover:text-black font-medium'>get started for free</button>
        </div>
    </div>

  )
}

export default Register