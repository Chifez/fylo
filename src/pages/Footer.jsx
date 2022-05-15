import React from 'react'
import Info from '../components/info'
import Register from '../components/register'

const Footer = () => {
  return (
    <div className='bg-footerbg relative'>
        <Register />
        <Info />
    </div>
  )
}

export default Footer