"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import portfolioimg from "/public/images/my-avatar.png";
import email from "/public/images/sidenav-icon1.png";
import phone from "/public/images/sidenav-icon2.png";
import birthday from "/public/images/sidenav-icon3.png";
import location from "/public/images/sidenav-icon4.png";
import download from "/public/images/home-download.png";
import menuDown from "/public/images/menuDown.png";

function Sidenav() {
    const [showdata, setshowdata] = useState(false)

    const toggleData = () => {
        setshowdata(!showdata)
    }
    return (
        <>
            {/* side nav */}
            <div className="bg-[#1E1E1F]  xl:pb-10 xl:w-[23%]  w-full rounded-xl border border-[#383838] ">
                <div className="bg-[#383838] border-[#E3C08D] border-t-2 border-l-2  flex justify-end max-w-max float-end p-1 nav_radius1 xl:hidden ">
                    <Image onClick={toggleData}
                        src={menuDown}
                        height={20}
                        alt="Menu"
                    />
                </div>
                <div className="xl:p-5 p-2 ">
                    {/* sidenav profile section */}
                    <div className="xl:pt-10 xl:pb-5 flex gap-x-3 justify-start xl:flex-col pt-0 ">
                        <div className="bg-[#383838] rounded-2xl w-[80px] h-[74px]  xl:w-[150px] xl:h-[147px] xl:mx-auto ">
                            <Image
                                src={portfolioimg}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="xl:pt-6 flex flex-col gap-y-3">
                            <h1 className='xl:text-[26px] text-[17px] text-white text-center font-[500]'>Vishwas Gupta</h1>
                            <p className="bg-[#2C2C2B] text-[11px] text-white mx-auto text-center rounded-lg tracking-tight p-2 max-w-max">Frontend developer</p>
                        </div>
                        <hr className=" h-[2px] mt-8 xl:my-3 mx-auto w-[10rem] xl:w-[15rem] bg-[#383838] border-0 xl:flex hidden" />
                    </div>
                    {/* side nav contact info*/}
                    <div className={`${showdata ? 'flex' : 'hidden'} xl:flex flex-col gap-y-10 `}>

                        <div className="flex justify-start items-center gap-3 ">
                            <div className="bg-[#202022] shadow-custom  rounded-xl p-3 border-t-[1px] border-l-[1px] border-gray-500">
                                <Image
                                    src={email}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className=" my-auto">
                                <p className="text-[12px] text-gray-500">Email</p>
                                <a href="mailto:vishvasgupta2002@gmail.com" className="text-[14px] text-white">vishvasgupta2002gmail</a>
                            </div>
                        </div>

                        <div className="flex justify-start items-center gap-3 ">
                            <div className="bg-[#202022] shadow-custom  rounded-xl p-3 border-t-[1px] border-l-[1px] border-gray-500">
                                <Image
                                    src={phone}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="  my-auto">
                                <p className="text-[12px] text-gray-500">Phone</p>
                                <a href="tel:+91 9416979830" className="text-[14px] text-white">(+91) 9416979830</a>
                            </div>
                        </div>

                        <div className="flex justify-start items-center gap-3">
                            <div className="bg-[#202022] shadow-custom  rounded-xl p-3 border-t-[1px] border-l-[1px] border-gray-500">
                                <Image
                                    src={birthday}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="  my-auto">
                                <p className="text-[12px] text-gray-500">Birthday</p>
                                <a href="mailto:vishvasgupta2002@gmail.com" className="text-[14px] text-white">20.07.2002</a>
                            </div>
                        </div>

                        <div className="flex justify-start items-center gap-3">
                            <div className="bg-[#202022] shadow-custom  rounded-xl p-3 border-t-[1px] border-l-[1px] border-gray-500">
                                <Image
                                    src={location}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="my-auto">
                                <p className="text-[12px] text-gray-500">Location</p>
                                <a href="mailto:vishvasgupta2002@gmail.com" className="text-[14px] text-white">Bahadurgarh,Haryana</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`bg-[#E8AA50] p-5 justify-center rounded-b-2xl xl:flex ${showdata ? 'flex' : 'hidden'}`}>
                    <div className="flex justify-center gap-2 my-auto">
                        <div className="">
                            <Image
                                src={download}
                                height={30}
                                alt='Download' />
                        </div>
                        <a href='/cv/Vishvas_Resume.pdf' className='my-auto font-medium'>Download CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidenav;
