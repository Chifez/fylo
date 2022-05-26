import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const SideBar = ({logOut,name}) => {
  return (
    <> <nav className='bg-darkbg col-span-1 py-10 flex flex-col justify-between items-center font-semibold text-xl capitalize text-white cursor-pointer'>
              <div>
                  <img src="" alt="" />
                  <h3>name</h3>
              </div>
              <div className='w-full'>
                <div className='py-5 my-2 active:border-r-4 text-center active:border-r-lime-400 hover:bg-slate-600'>
                    <img src="" alt="" />
                    <Link to='settings'><p>settings</p></Link>
                </div>
                <div className='py-5  my-2 text-center active:border-r-4 active:border-r-lime-400 hover:bg-slate-600' onClick={logOut}>
                    <img src="" alt="" />
                    <h3>logout</h3>
                </div>
              </div>
          </nav>
          <Outlet />
          </>
  )
}

export default SideBar