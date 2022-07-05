import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='py-5 lg:py-10 m-auto my-5 lg:my-0 w-[90vw] h-[10vh] inset-x-0 lg:mx-0 lg:w-full rounded-md flex lg:flex-row lg:h-auto justify-between border items-center z-20 fixed'>
        <h1 className='text-3xl lg:px-5 font-semibold left-5 lg:-ml-5 z-1 relative'>Fylo</h1>
        <div className=''>
          <div className='lg:hidden z-20 right-5 absolute' onClick={(e) => setIsOpen(!isOpen)}>
            <div className={`w-4 h-0.5 ${isOpen ? 'rotate-45' :'rotate-0'} ${isOpen ? 'translate-y-1' : 'translate-y-0'} my-0.5 bg-white`}></div>
            <div className={`w-4 h-0.5 my-0.5 ${isOpen ? 'opacity-0' : 'opacity-1'} bg-white`}></div>
            <div className={`w-4 h-0.5  ${isOpen ? '-rotate-45' :'rotate-0'} ${isOpen ? '-translate-y-1' : 'translate-y-0'} my-0.5 bg-white`}></div>
          </div>
          <div className={`flex lg:translate-y-0 ${ isOpen ? 'translate-y-0':'-translate-y-[100vh]'} transition-all flex-col pt-[11vh] lg:pt-0 lg:flex-row justify-between items-center w-screen lg:w-auto h-[60vh] lg:h-[0vh] inset-x-0 top-0 bg-black lg:bg-inherit fixed lg:relative`}>
            <a  onClick={(e) => setIsOpen(!isOpen)} className='m-1 sm:m-5' href="#feature" data-aos="fade-left" data-aos-duration="1000">Features</a>
            <a onClick={(e) => setIsOpen(!isOpen)} className='m-1 sm:m-5' href="#team" data-aos="fade-left" data-aos-duration="1500">Team</a>
           <Link  to="/signin" onClick={(e) => setIsOpen(!isOpen)} className='m-1 sm:m-5'  data-aos="fade-left" data-aos-duration="2000">Sign In</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar