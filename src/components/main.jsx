import React from 'react'
import home_img from "../assets/icons/undraw_upload_re_pasx.svg"

const Main = () => {
  return (
    <div className=' m-2 text-center flex flex-col justify-center items-center'>
        <img className='w-80 h-2/5 object-cover' src={home_img} alt="Secure files" />
        <h2 className='text-3xl w-2/5 font-extrabold my-3'>All files in one secure location, accessible anywhere.
        </h2 >
        <p className='w-2/5 m-5'>fylo stores all your most important file in one secure location.Access them wherever you need,share and collaborate with friends family and co-workers</p>
        <button className='bg-btn rounded-full py-5 px-20 font-semibold capitalize'>get started</button>
    </div>
  )
}
export default Main