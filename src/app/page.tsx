import React from 'react'
import Sidenav from './HomeComponents/sideNav';
import Home from './HomeComponents/home';


function page() {
  return (
    <>
      <div className="flex justify-center w-full md:pt-20 pt-5">
        <div className="max-w-[1536px] xl:w-[80%]  w-[90%]">
          <div className="xl:flex xl:justify-center gap-x-6 h-screen">
            <Sidenav />
            <Home />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
