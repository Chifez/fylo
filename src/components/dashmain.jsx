import React from 'react'

const Dashmain = ({upload,setUpload,uploadList,setUploadList,uploadFile}) => {

 
  return (

    <div className='h-[80vh] w-full col-span-4 bg-white mt-10'>
    <h3 className='text-center font-semibold text-xl text-black uppercase'>My files</h3>
    <p>{uploadList}</p>
    <div className='flex justify-center items-center h-5/6 w-full'>
      {uploadList === null && <div>No Files</div>}
      {uploadList && uploadList.map((item) =>
              <div key={Math.floor(Math.random() * 3)}>
                <h2>{item?.item?.name} resume</h2>
                {/* <img src={item.share} alt="share" />
                <img src={item.delete} alt="delete" /> */}
                <div>
                    <p>uploaded {Date.now()}</p>
                   
                </div>
              </div>
      )}
    </div>
  <div className='flex justify-center items-center'>
      <button className='fixed left-2/4 top-3/4 text-center font-semibold text-xl px-16 rounded-md bg-btn border-2 border-transparent hover:text-black hover:bg-blue-600'><input className='opacity-0 absolute w-16' type="file" onChange={(e)=>{setUpload(e.target.files[0])}}/>Add new file</button>
      <button className='bg-[green] my-4 px-12 rounded-md' onClick={uploadFile}>upload file</button>
  </div>
</div>
    
  )
}

export default Dashmain