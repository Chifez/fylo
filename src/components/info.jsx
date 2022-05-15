import React from 'react'
import { icons } from '../data'

const Info = () => {
    const {location,mail,phone}= icons
  return (
      <div>
          <div>
              <h3>Fylo</h3>
              <div>
              <img src={location} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dicta labore omnis rerum odio quasi harum cumque vitae soluta quae!</p>
              </div>
          </div>
          <div>
              <div>
                  <img src={phone} alt="" />
                  <p>+1234568799</p>
              </div>
              <div>
                  <img src={mail} alt="" />
                  <p>example@fylo.com</p>
              </div>
          </div>
          <div>
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
      </div>
  )
}
export default Info