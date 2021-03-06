import React from 'react'
import { icons } from '../data';

const Dashmain = ({upload,setUpload,uploadList,setUploadList,uploadFile}) => {

  const newDate = new Date().toLocaleDateString();
  // let date = newDate.getDate();
  // let month = newDate.getMonth() + 1;
  // let year = newDate.getFullYear();
  
 
  return (

    <div className='h-[60vh] md:h-[80vh] w-full rows-span-4 md:col-span-4 bg-white mt-10'>
    <h3 className='text-center font-semibold text-xl text-black uppercase'>My files</h3>
    {/* <p>{uploadList}</p> */}
    <div className='flex flex-col justify-start items-start h-5/6 w-full px-3 border-2 border-[red] overflow-y-scroll'>
      {uploadList === null && <div>No Files</div>}
      {uploadList && uploadList.map((item) =>
              <div key={Math.floor(Math.random() * 3)} className="flex flex-col justify-between m-5">
                <div className='flex flex-col'>
                  <div>
                <h2>{item?.name} </h2>
                  <img src={icons.download} alt="share" />
                  <img src={icons.delete} alt="delete" />
                  </div>
                <h2>resume</h2>
                </div>
                <div className='flex justify-between'>
                    <p className='mr-2'>uploaded</p>
                    <p>{newDate}</p>
                </div>
              </div>
      )}
    </div>
  <form onSubmit={uploadFile}className='flex justify-center items-center bg-[white]'>
      <button className='absolute bottom-20 text-center font-semibold bottom-5 text-xl px-16 rounded-md bg-btn border-2 border-transparent hover:text-black hover:bg-blue-600'><input className='opacity-0 absolute w-16' type="file" onChange={(e)=>{setUpload(e.target.files[0])}}/>Add new file</button>
      <button type="submit" className='absolute bottom-5 left- bg-[green] my-4 px-12 rounded-md'>upload file</button>
  </form>
</div>
  )
}

export default Dashmain