import React from 'react'
import { icons } from '../data'

const Info = () => {
    const {location,mail,phone,facebook,instagram,twitter}= icons
  return (
      <div className='mx-8 my-4 relative bottom-16'>
      <h3 className='text-5xl font-semibold mb-2 py-4'>Fylo</h3>
      <div className='grid grid-rows-1 lg:grid-cols-6 my-5 gap-5'>
          <div className='lg:col-span-2'>
              <div className='flex items-center'>
              <img className='w-8 h-8 object-cover mr-2 invert'src={location} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dicta labore omnis rerum odio quasi harum cumque vitae soluta quae!</p>
              </div>
          </div>
          <div className='mb-5'>
              <div className='flex lg:block'>
                  <img className='mr-2 mb-2 w-8 h-8 object-cover invert'src={phone} alt="" />
                  <p>+1234568799</p>
              </div>
              <div className='flex lg:block'>
                  <img className='mr-2 w-8 h-8 object-cover invert' src={mail} alt="" />
                  <p>example@fylo.com</p>
              </div>
          </div>
          <div className='mb-5'>
              <p>About us</p>
              <p>jobs</p>
              <p>press</p>
              <p>blog</p>
          </div>
          <div>
              <p>Contact us</p>
              <p>Terms</p>
              <p>privacy</p>
          </div>
          <div className='flex align-center justify-center lg:justify-around invert'>
              <img className='m-2 w-6 h-6 object-cover'src={facebook} alt="" />
              <img className='m-2 w-6 h-6 object-cover' src={twitter} alt="" />
              <img className='m-2 w-6 h-6 object-cover' src={instagram} alt="" />
          </div>
      </div>
      </div>
  )
}
export default Info