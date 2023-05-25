"use client";

import React from "react";
import Image from "next/image";
import navImage from "../app/resources/images/faviconForNavbar.svg";
import { BsGridFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <main className="flex item-center justify-center w-full mt-3 text-white">
      <nav className="bg-glassColor min-w-[200px] p-3  h-[65px] flex items-center justify-between border-0.5 border-[rgba(255, 255, 255, 0.5)] rounded-[18px]">
        <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[12px] bg-[#e3e3ff]">
          <Image src={navImage} className="pt-1.5" height={40} width={40} />
        </div>
        <h1 className="text-[20px]">Jaydeep .</h1>
        <button className="border-0 bg-transparent text-[26px] text-white">
          <BsGridFill />
        </button>
      </nav>
    </main>
  );
};

export default Navbar;
