import React from 'react'
import Main from '../components/main';
import Navbar from '../components/navbar';
import Features from './Features';
import Footer from './Footer';
import Team from './Team';

const Home = () => {
  return (
    <div  className="App overflow-hidden w-full h-auto text-white bg-darkbg scroll-smooth">
      <div id='home' className='lg:h-screen bg-light'>
          <Navbar />
          <Main />
      </div>
      <div>
            <Features />
            <Team />
            <Footer />
        </div>
  

    </div>
  )
}

export default Home