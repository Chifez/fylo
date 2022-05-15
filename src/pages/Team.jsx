import React from 'react'
import Teamcard from '../components/teamcard'
import {icons,desc}from '../data'

const Team = () => {
    const {sync,forward,account} = icons
    const{team} =desc

  return (
      <div className='px-4 py-3 pb-64 h-max bg-darkbg'>
          <div className=' my-32 grid gap-4 grid-cols-2 place-items-center'>
              <img className='w-full h-full  border-2 border-pool'src ={sync} alt=" " />
              <div className='h-3/5 border-2 border-red-400 grid place-items-center'>
                  <h2 className='text-4xl font-extrabold'>Stay productive<br/>wherever you are</h2>
                  <p>never let location be an issue when accessing your files.fylo has you covered for all of your file storage needs.<br/> securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required <br/>
                    <a className='flex flex-row items-center border-b border-pool text-pool w-fit 'href="/">
                        see how fylo works <img className='w-4 h-4 mx-3 bg-pool border-transparent rounded-full'src={forward} alt="" />
                    </a>
                  </p>
              </div>
          </div>

        
          <div className='grid grid-cols-3'>
<Teamcard desc = {team} img={account}name ='Satish Patel' title='Founder & CE0, Huddle' />
<Teamcard desc ={team} img={account} name ='Bruce Mckenzie' title='Founder & CE0, Huddle' />
<Teamcard desc ={team} img={account} name ='Iva Boyd' title='Founder & CE0, Huddle'/>

          </div>
      </div>
  )
}

export default Team