import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";




const Navbar = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="bg-[var(--primary-bg-color)] p-4 w-screen">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <CiMail className="w-5 h-5 text-white" />
              <span className="text-white ml-2">info@nessa.in</span>
            </div>
            <div className="flex items-center ml-4">
              <IoCallOutline className="w-5 h-5 text-white" />
              <span className="text-white ml-2">+91-79-2970-1779</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#2672BE] rounded-full px-3 py-1">
              <CiSearch className="w-5 h-5 text-white" />
              <input
                type="text"
                placeholder="Search Product"
                className="ml-2 outline-none bg-[#2672BE] text-white placeholder:text-[#ffffffe5] "
              />
            </div>
            <div className="flex items-center ml-4">
              <IoEarthOutline className="w-5 h-5 text-white" />
              <span className="text-white ml-2">IN(ENG)</span>
              <FaCaretDown className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 w-screen">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/navbar/logo.svg"
              alt="Logo"
              className="h-[8vh] object-contain"
            />
          </div>
          <div className="flex gap-[4vw]">
            <div className="text-black ">
              Home
            </div>
            <div className="text-black flex items-center gap-1">
              Solutions
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </div>
            <div className="text-black flex items-center gap-1">
              Products
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </div>
            <div className="text-black flex items-center gap-1">
              Corporates
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </div>
            <div className="text-black">
              Insights
            </div>
            <div className="text-black">
              About Us
            </div>
          </div>
          <button className="bg-[var(--primary-bg-color)] text-white px-4 py-2 rounded ml-8">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar