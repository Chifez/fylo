import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-2 py-10 flex flex-row justify-between items-center sm:px-20 '>
        <h1 className='text-3xl font-semibold'>Fylo</h1>
        <div className='flex flex-cols justify-between items-center'>
            <a  className='m-1 sm:m-5' href="#feature" data-aos="fade-left" data-aos-duration="1000">Features</a>
            <a  className='m-1 sm:m-5' href="#team" data-aos="fade-left" data-aos-duration="1500">Team</a>
            <Link  to="/signin" className='m-1 sm:m-5'  data-aos="fade-left" data-aos-duration="2000">Sign In</Link>
        </div>
    </div>
  )
}

export default Navbar