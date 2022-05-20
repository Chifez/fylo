import React from 'react'

const Navbar = () => {
  return (
    <div className='px-2 py-10 flex flex-row justify-between items-center sm:px-20 '>
        <h1 className='text-3xl font-semibold'>Fylo</h1>
        <div className='flex flex-cols justify-between items-center'>
            <a  className='m-1 sm:m-5' href="#/">Features</a>
            <a  className='m-1 sm:m-5' href="#/">Team</a>
            <a  className='m-1 sm:m-5' href="#/">Sign In</a>
        </div>
    </div>
  )
}

export default Navbar