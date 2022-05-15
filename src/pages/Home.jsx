import React from 'react'
import Main from '../components/main';
import Navbar from '../components/navbar';

const Home = () => {
  return (
      <div className='h-screen bg-light'>
          <Navbar />
          <Main />
      </div>
  )
}

export default Home