import React from 'react'

const Feature = (props) => {
    const {src,alt,main,desc} = props
  return (
      <div className='grid place-items-center text-center h-2/3'>
          <img src={src} alt={alt} />
          <h3 className='text-xl font-semibold'>{main}</h3>
          <p className='w-2/3 '>{desc}</p>
      </div>
  )
}

export default Feature