import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Education from "/public/images/Resume_education.png";
import js from "/public/images/skill1.png";
import experience from "/public/images/experience.png";
import skills from "/public/images/skills.png";

function MainSide() {
    const nav = [
        {
            head1: "About",
            head2: "Resume",
            head3: "Portfolio",
            head4: "Contact",
        }
    ];

    return (
        <>
            <div className="bg-[#1E1E1F] h-[200vh] pb-5 w-[67%] rounded-xl border border-[#383838] shadow-custom ">
                {nav.map((Value, index) => (
                    <div key={index} className="flex justify-end gap-x-6 p-3 bg-[#282829] nav_radius ">
                        <Link className='text-white hover:text-[#E3C08D]' href='/'>{Value.head1}</Link>
                        <Link className='text-[#E3C08D]' href='../Resume'>{Value.head2}</Link>
                        <Link className='text-white hover:text-[#E3C08D]' href=''>{Value.head3}</Link>
                        <Link className='text-white hover:text-[#E3C08D]' href=''>{Value.head4}</Link>
                    </div>
                ))}
                <div className="p-8">
                    <h1 className='article-title text-white text-[32px] font-bold relative pb-[7px] '>Resume</h1>
                    <div className="flex justify-start items-center gap-3 pt-10">
                        <div className="bg-[#202022] shadow-custom rounded-xl p-3">
                            <Image
                                src={Education}
                                height={30}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="my-auto">
                            <p className="text-[24px] text-white font-bold">Education</p>
                        </div>
                    </div>
                    {/* Timeline Section */}
                    <div className="relative border-l border-gray-700 ml-6 mt-8">
                        <div className="mb-10 ">
                            <div className="absolute -left-2 border-[3px] border-gray-700 rounded-full drop-shadow-xl bg-yellow-500 w-4 h-4"></div>
                            <div className="pl-8">
                                <p className="text-gray-400">2023 — Present</p>
                                <h3 className="text-white text-lg font-semibold">MCA(Masters of Computer Application)</h3>
                                <p className="text-gray-500">Doing Master's Degree in Computer science from Ganga Institute of Technology and Management – Jhajjar,HR</p>
                            </div>
                        </div>
                        <div className="mb-10 ">
                            <div className="absolute -left-2 border-[3px] border-gray-700 rounded-full drop-shadow-xl bg-yellow-500 w-4 h-4"></div>
                            <div className="pl-8">
                                <p className="text-gray-400">2020 — 2023</p>
                                <h3 className="text-white text-lg font-semibold">BCA (Bachelor of Computer Application)</h3>
                                <p className="text-gray-500">Completed my Bachelors Degree in Computer Science from Vaish College of Engineering – Rohtak, HR and secured First Division with Distinction</p>
                            </div>
                        </div>
                        <div className="mb-10 ">
                            <div className="absolute -left-2 border-[3px] border-gray-700 rounded-full drop-shadow-xl bg-yellow-500 w-4 h-4"></div>
                            <div className="pl-8">
                                <p className="text-gray-400">2019 — 2020</p>
                                <h3 className="text-white text-lg font-semibold">Class - 12</h3>
                                <p className="text-gray-500">Completed higher secondary education from Bal Bharti School, Bahadurgarh and achieved 82%.</p>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}

                    <div className="flex justify-start items-center gap-3 pt-10">
                        <div className="bg-[#202022] shadow-custom rounded-xl p-3">
                            <Image
                                src={experience}
                                height={30}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="my-auto">
                            <p className="text-[24px] text-white font-bold">Experience</p>
                        </div>
                    </div>
                    {/* Timeline Section */}
                    <div className="relative border-l border-gray-700 ml-6 mt-8">
                        <div className="mb-10 ">
                            <div className="absolute -left-2 border-[3px] border-gray-700 rounded-full drop-shadow-xl bg-yellow-500 w-4 h-4"></div>
                            <div className="pl-8">
                                <p className="text-gray-400">Xcrino Business Solutions(Present)</p>
                                <h3 className="text-white text-lg font-semibold">Frontend Developer</h3>
                                <p className="text-gray-500">I currently hold the position of Frontend Developer, focusing on Various Projects employing a diverse array of technologies</p>
                                <br />
                                <p className="text-gray-500">Within this role, I've been responsible for designing and
                                    implementing the website interface, ensuring optimal
                                    functionality across various devices, including mobile, desktop, and tablets.</p>
                            </div>
                        </div>
                    </div>

                    {/*Skills*/}
                    <div className="flex justify-start items-center gap-3 pt-10 pb-10">
                        <div className="bg-[#202022] shadow-custom rounded-xl p-3">
                            <Image
                                src={skills}
                                height={30}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="my-auto">
                            <p className="text-[24px] text-white font-bold">Skills</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 pt-8">
                        <div className="bg-[#121212] absolute rounded-3xl  w-[15%]">
                            <div className="flex justify-between relative bottom-7 ">
                                <div className=" ">
                                    <Image
                                        src={js}
                                        alt='Js icons' />
                                </div>
                                <div className="bg-[#1E1E1F] shadow-custom rounded-full p-3 w-12 h-12 flex items-center justify-center">1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainSide;
