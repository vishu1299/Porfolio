import Link from "next/link";
import React from "react";
import Contact_form from "./Contact_form";

function Map() {
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
            <Link
              className="text-white hover:text-[#E3C08D]"
              href="/PortfolioProject"
            >
              {Value.head3}
            </Link>
            <Link className="text-[#E3C08D]" href="">
              {Value.head4}
            </Link>
          </div>
        ))}
        <div className="xl:p-8 p-2 sm:p-6 xl:text-justify">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563976.985715158!2d73.39740284488856!3d29.269223375213684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x732eaab4aaa6c143!2sHaryana!5e0!3m2!1sen!2sin!4v1720951154031!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              className="w-full rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Contact_form />
        </div>
      </div>
    </>
  );
}

export default Map;
