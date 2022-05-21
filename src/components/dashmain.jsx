import React from 'react'

const Dashmain = ({upload}) => {
  return (
    upload.map((item) =>{
        return (
            <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.share} alt="share" />
            <img src={item.delete} alt="delete" />
            <div>
                <p>uploaded {Date.now()}</p>
            </div>
            </div>
        )
    })
  )
}

export default Dashmain