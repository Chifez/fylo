import React from 'react'
import home_img from "../assets/icons/undraw_upload_re_pasx.svg"

const Main = () =>  {
  return (
    <div className=' p-2 lg:m-2 text-center flex flex-col justify-center items-center'>
        <img className='w-64 object-cover md:w-80 md:h-2/5' src={home_img} alt="Secure files" />
        <h2 className='w-4/5 font-medium my-3 text-3xl lg:w-2/5 lg:font-extrabold'>All files in one secure location, accessible anywhere.
        </h2 > 
        <p className='w-4/5 lg:w-2/5 m-5 '>fylo stores all your most important file in one secure location.Access them wherever you need,share and collaborate with friends family and co-workers</p>
        <button className='bg-btn rounded-full py-3 px-24 font-semibold lg:py-5 lg:px-20 transition ease-in-out duration-500 lg:hover:bg-blue-300 lg:hover:text-black capitalize'>get started</button>
    </div>
  )
}
export default Main