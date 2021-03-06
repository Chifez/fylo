import React from 'react'

const Teamcard = (props) => {
    const{desc,img,name,title,duration} = props
  return (
      <div className='p-6 bg-card m-4 rounded-md' data-aos="fade-up" data-aos-duration={duration}>
          <p>{desc}</p>
          <div className='flex mt-3'>
          <img className='w-12 h-12 sm:w-12 object-cover mr-2 sm:mr-4'src={img} alt="" />
          <div>
          <h4 className='text-xl font-semibold'>{name}</h4>
          <p>{title}</p>
          </div>
          </div>
      </div>
  )
}
export default Teamcard