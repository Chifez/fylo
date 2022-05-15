import React from 'react'
import Feature from '../components/feature'
import { icons } from '../data'

const Features = () => {
const {access,security,real,store} = icons
  return (
      <div className='h-screen grid grid-cols-2 place-items-center pt-5 bg-darkbg'>
          <Feature src={access} main='Access your files,anywhere' desc='The ability to use a smartphone,tablet or computer to access your account means ypur files follow you everywhere'/>

          <Feature src={security} main='security you can trust' desc ='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files'/>

          <Feature src={real} main='Real-time collaboartion' desc='securely share files and folders with friends and colleagues for live collaboration.No email attachments required' />

          <Feature src={store} main='Store any type of file' desc="whether you're sharing holidays photos or work documents,Fylo has you covered allowing for all file types to be securely stored and shared"/>
      </div>
  )
}

export default Features