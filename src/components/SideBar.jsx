import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const SideBar = ({logOut,name,changeProfile}) => {
  // const userName = sessionStorage.getItem('userName');
  // const userName = changeProfile();
  return (
    <> <nav className='bg-darkbg w-full row-span-5 md:col-span-1 px-3 md:px-0 md:py-10 flex flex-rows md:flex-col justify-between items-center font-semibold text-md md:text-xl capitalize text-white cursor-pointer'>
              <div>
                  <img src="" alt="" />
                  <h3 className='capitalize'>hello,
                  {name}
                  </h3>
              </div>
              <div className='md:w-full flex flex-rows md:flex-col justify-between mx-2'>
                <div className='mx-2 md:mx-0 py-5 my-2 active:border-r-4 text-center active:border-r-lime-400 md:hover:bg-slate-600'>
                    <img src="" alt="" />
                    <Link to='settings'><p>settings</p></Link>
                </div>
                <div className='py-5  my-2 text-center active:border-r-4 active:border-r-lime-400 md:hover:bg-slate-600' onClick={logOut}>
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