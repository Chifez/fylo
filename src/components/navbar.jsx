import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='px-2 py-5 lg:py-10 w-screen flex lg:flex-row justify-between border items-center sm:px-20 fixed'>
        <h1 className='text-3xl font-semibold z-10'>Fylo</h1>
        <div className=''>
          <div className='lg:hidden z-20 right-5 absolute' onClick={(e) => setIsOpen(!isOpen)}>
            <div className={`w-4 h-0.5 ${isOpen ? 'rotate-45' :'rotate-0'} ${isOpen ? 'translate-y-1' : 'translate-y-0'} my-0.5 bg-white`}></div>
            <div className={`w-4 h-0.5 my-0.5 ${isOpen ? 'opacity-0' : 'opacity-1'} bg-white`}></div>
            <div className={`w-4 h-0.5  ${isOpen ? '-rotate-45' :'rotate-0'} ${isOpen ? '-translate-y-1' : 'translate-y-0'} my-0.5 bg-white`}></div>
          </div>
          <div className={`flex ${ isOpen ? 'translate-y-0':'-translate-y-[100vh]'} transition-all flex-col pt-[11vh] lg:flex-row  justify-between items-center w-screen h-[40vh] inset-x-0 top-0 bg-black absolute`}>
            <a  className='m-1 sm:m-5' href="#feature" data-aos="fade-left" data-aos-duration="1000">Features</a>
            <a  className='m-1 sm:m-5' href="#team" data-aos="fade-left" data-aos-duration="1500">Team</a>
           <Link  to="/signin" className='m-1 sm:m-5'  data-aos="fade-left" data-aos-duration="2000">Sign In</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar