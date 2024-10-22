"use client";
import React from 'react'
import { FaBoxes } from "react-icons/fa";
import { HiShieldExclamation } from "react-icons/hi";
import { PiCubeTransparentFill } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";

const Usp = () => {
  return (
    <div className='flex flex-col items-center px-5 bg-black py-16'>
        <div className="text-lg lg:text-2xl font-semibold text-center text-white">Multiple Advantages Working with us</div>
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:px-0  w-full mt-[56px]">
          <div className="flex justify-between w-full xl:px-20 text-xl xl:text-6xl text-[#737373]">
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><FaBoxes/></div>
                <div className="text-xs lg:text-sm  mt-2 font-semibold">Decentralized </div>
              </div>  
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><HiShieldExclamation/></div>
                <div className="text-xs lg:text-sm  mt-2 font-semibold">Tamper Proof </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><PiCubeTransparentFill/></div>
                <div className="text-xs lg:text-sm  mt-2 font-semibold">Transparency </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><AiOutlineStock/></div>
                <div className="text-xs lg:text-sm  mt-2 font-semibold">Scalable </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><FaGlobeAmericas/></div>
                <div className="text-xs lg:text-sm  mt-2 font-semibold">Global</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Usp