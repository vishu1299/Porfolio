import Image from "next/image";
import React from "react";
import Link from "next/link";
// import project1 from "/public/images/project-1.jpg";

function Projects() {
  const projects = [
    {
      image: "/images/project-1.jpg",
      heading: "finance",
      discription: " Web development",
    },
    {
      image: "/images/project-2.png",
      heading: "finance",
      discription: " Web development",
    },
    {
      image: "/images/project-3.jpg",
      heading: "finance",
      discription: " Web development",
    },
    {
      image: "/images/project-4.png",
      heading: "finance",
      discription: " Web development",
    },
    {
      image: "/images/project-5.png",
      heading: "finance",
      discription: " Web development",
    },
    {
      image: "/images/project-6.png",
      heading: "finance",
      discription: " Web development",
    },
    {
      image: "/images/project-7.png",
      heading: "finance",
      discription: " Web development",
    },
    {
      image: "/images/project-8.jpg",
      heading: "finance",
      discription: " Web development",
    },
    {
      image: "/images/project-9.png",
      heading: "finance",
      discription: " Web development",
    },
  ];

  const nav = [
    {
      head1: "About",
      head2: "Resume",
      head3: "Portfolio",
      head4: "Contact",
    },
  ];

  return (
    <>
      <div className="bg-[#1E1E1F] h-auto pb-5 xl:w-[67%]  rounded-xl border border-[#383838] shadow-custom mt-8 xl:mt-0">
        {nav.map((Value, index) => (
          <div
            key={index}
            className="xl:flex justify-end  gap-x-6 p-3 bg-[#282829] nav_radius hidden "
          >
            <Link className="text-white hover:text-[#E3C08D]" href="/">
              {Value.head1}
            </Link>
            <Link className="text-white hover:text-[#E3C08D]" href="/Resume">
              {Value.head2}
            </Link>
            <Link className="text-[#E3C08D]" href="/PortfolioProject">
              {Value.head3}
            </Link>
            <Link className="text-white hover:text-[#E3C08D]" href="/contactUs">
              {Value.head4}
            </Link>
          </div>
        ))}
        <div className="xl:p-8 p-2 sm:p-6 xl:text-justify">
          <h1 className="article-title text-white text-[32px] font-bold relative pb-[7px] ">
            Portfolio
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 mb-3 gap-8 pt-10">
            {projects.map((pro, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-4 custom_animation"
              >
                <div className=" overflow-hidden">
                  <Image
                    className="rounded-xl object-cover"
                    alt=""
                    src={pro.image}
                    height={500}
                    width={500}
                  />
                </div>
                <div className="">
                  <h3 className="text-white font-normal text-lg">
                    {pro.heading}
                  </h3>
                  <p className="text-gray-400 font-light text-sm">
                    {pro.discription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
