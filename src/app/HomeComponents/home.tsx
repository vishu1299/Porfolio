import Image from 'next/image';
import React from 'react'
import webDesign from "/public/images/webdesign_icon.png";
import webdevelop_icon from "/public/images/webdevelop_icon.png";
import responsive_icon from "/public/images/responsive_icon.png";
import Link from 'next/link';

function Home() {

    // interface Header {
    //     head1: string;
    //     head2: string;
    //     head3: string;
    //     head4: string;
    // }

    const nav = [
        {
            head1: "About",
            head2: "Resume",
            head3: "Portfolio",
            head4: "Contact",
        }
    ]
    return (
        <>
            <div className="bg-[#1E1E1F] h-auto pb-5 w-[67%] rounded-xl border border-[#383838] shadow-custom ">
                {nav.map((Value, index) => (
                    <div key={index} className="flex justify-end  gap-x-6 p-3 bg-[#282829] nav_radius ">
                        <Link className='text-[#E3C08D]' href='#'>{Value.head1}</Link>
                        <Link className='text-white hover:text-[#E3C08D]' href='../Resume'>{Value.head2}</Link>
                        <Link className='text-white hover:text-[#E3C08D]' href=''>{Value.head3}</Link>
                        <Link className='text-white hover:text-[#E3C08D]' href=''>{Value.head4}</Link>
                    </div>
                ))}
                <div className="p-8">
                    <h1 className='article-title text-white text-[32px] font-bold relative pb-[7px] '>About Me</h1>
                    <section className="text-[14px] text-gray-300 leading-5	pt-5">
                        <p>
                            As a frontend enthusiast, I thrive on transforming intricate designs into seamless and captivating user experiences
                        </p>
                        <br />
                        <p>
                            Leveraging my
                            expertise in HTML, CSS, and JavaScript, I am committed to pushing the boundaries of frontend development and delivering innovative
                            solutions that delight users and exceed expectations.
                        </p>
                    </section>
                    <div className="pt-8">
                        <h1 className='text-white text-[24px] font-semibold  '>What i'm doing</h1>
                        <section className="grid grid-cols-2 gap-4 pt-6 gap-y-5">
                            <div className="flex gap-3 bg-[#212123] rounded-xl p-6 shadow-custom">
                                <div className="">
                                    <Image
                                        height={100}
                                        width={100}
                                        src={webDesign}
                                        alt='web design' />
                                </div>
                                <div className="text-white flex flex-col gap-y-2">
                                    <h1 className='text-[15px] font-medium'>Web Design</h1>
                                    <p className='text-[12px] text-gray-300'>Developed intuitive and user-friendly interfaces by applying user-centered design principles and conducting user research</p>
                                </div>
                            </div>
                            <div className="flex gap-3 bg-[#212123] rounded-xl p-6 shadow-custom">
                                <div className="">
                                    <Image
                                        height={100}
                                        width={100}
                                        src={webdevelop_icon}
                                        alt='web design' />
                                </div>
                                <div className="text-white flex flex-col gap-y-2">
                                    <h1 className='text-[15px] font-medium'>Web Development</h1>
                                    <p className='text-[12px] text-gray-300'>Proficient in React.js with experience building dynamic, single-page applications (SPAs) that enhance user engagement.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 bg-[#212123] rounded-xl p-6 shadow-custom">
                                <div className="">
                                    <Image
                                        height={100}
                                        width={100}
                                        src={responsive_icon}
                                        alt='web design' />
                                </div>
                                <div className="text-white flex flex-col gap-y-2">
                                    <h1 className='text-[15px] font-medium'>Responsive Design</h1>
                                    <p className='text-[12px] text-gray-300'>Designed and developed mobile-first web pages, ensuring that the user experience is optimized for mobile devices before scaling up to larger screens.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
