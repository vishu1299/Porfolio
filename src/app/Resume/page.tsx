import React from 'react'
import Sidenav from '../HomeComponents/sideNav'
import MainSide from './Components/MainSide'

function page() {
    return (
        <>
            <div className="flex justify-center w-full pt-20">
                <div className="max-w-[1536px] w-[80%] ">
                    <div className="flex justify-center gap-x-6 h-screen">
                        <Sidenav />
                        < MainSide />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
