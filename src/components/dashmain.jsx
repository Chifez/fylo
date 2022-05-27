import React from 'react'

const Dashmain = ({upload,setUpload}) => {
  return (

    <div className='h-[80vh] w-full col-span-4 bg-white mt-10'>
    <h3 className='text-center font-semibold text-xl text-black uppercase'>My files</h3>
    <div className='flex justify-center items-center h-5/6 w-full'>
      {upload.length <= 0 && <div>No Files</div>}
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
<button className='fixed left-2/4 top-3/4 text-center font-semibold text-xl px-16 rounded-md bg-btn border-2 border-transparent hover:text-black hover:bg-blue-600'onClick={(e) => setUpload(e.target[0].file[0])}> <input className='opacity-0 absolute w-16' type="file" />Add new file</button>
</div>
    
  )
}

export default Dashmain