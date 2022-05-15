import React from 'react'

const Navbar = () => {
  return (
    <div className='px-20 py-10 flex flex-row justify-between items-center '>
        <h1 className='text-3xl font-semibold'>Fylo</h1>
        <div className='flex flex-cols justify-between items-center'>
            <a  className='m-5' href="#/">Features</a>
            <a  className='m-5' href="#/">Team</a>
            <a  className='m-5' href="#/">Sign In</a>
        </div>
    </div>
  )
}

export default Navbar