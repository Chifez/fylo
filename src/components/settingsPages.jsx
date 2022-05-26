import React from 'react'
import { Link } from 'react-router-dom';

const Settingspages = () => {
  return (
    <div className='my-5 capitalize'>
          <h3 className='my-2'>
            <Link to='password'>change password</Link>
          </h3>
          
        <h4 className='my-2'>
            <Link to='name'>change username</Link>
        </h4>
    </div>
  )
}

export default Settingspages