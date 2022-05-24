import React from 'react'


const Dashmain = ({upload}) => {
  return (
    <div>
      {upload.map((item) =>
              <div key={item.id}>
                <h2>{item.name} resume</h2>
                <img src={item.share} alt="share" />
                <img src={item.delete} alt="delete" />
                <div>
                    <p>uploaded {Date.now()}</p>
                </div>
              </div>
      )}
    </div>
  )
}

export default Dashmain