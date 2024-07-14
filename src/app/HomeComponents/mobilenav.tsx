import Link from "next/link";
import React from "react";

function Mobilenav() {
  const nav = [
    {
      head1: "About",
      head2: "Resume",
      head3: "Portfolio",
      head4: "Contact",
    },
  ];
  return (
    <div>
      <div className="bg-[#1E1E1F] w-full rounded-t-lg border border-[#383838] shadow-custom relative ">
        {nav.map((Value, index) => (
          <div
            key={index}
            className="flex justify-center sm:justify-around p-3 gap-x-6  bg-[#2828297d] nav_radius text-[15px]"
          >
            <Link className="text-white hover:text-[#E3C08D] " href="/">
              {Value.head1}
            </Link>
            <Link className="text-white hover:text-[#E3C08D]" href="/Resume">
              {Value.head2}
            </Link>
            <Link
              className="text-white hover:text-[#E3C08D] "
              href="/PortfolioProject"
            >
              {Value.head3}
            </Link>
            <Link
              className="text-white hover:text-[#E3C08D] "
              href="/contactUs"
            >
              {Value.head4}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobilenav;
