import React from 'react'
import { Link } from 'react-router-dom';

const Settingspages = () => {
  return (
    <div>
         <Link to='password'>
          <h3>change password</h3>
        </Link>
        <Link to='name'>
          <h4>change username</h4>
        </Link>
    </div>
  )
}

export default Settingspages