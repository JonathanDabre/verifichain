"use client";

import React from 'react'

const Hero = () => {
  return (
    <div className='hero bg-gradient-to-br from-black to-[#1A1A1A] px-5 py-10 flex flex-col space-y-8'>
        <div className="flex flex-col justify-center items-start xl:items-center  ">
            <div className="headline font-semibold text-2xl xl:text-5xl xl:w-[60%] text-start xl:text-center mb-6 text-white">Empower Your Workflow with Seamless Document Verification</div>
            <div className="tagline text-sm xl:text-lg w-[80%]  xl:w-[60%] text-start xl:text-center text-[#98989C]">Effortlessly manage your documents and verify credentials in real-time with VerifiChain, your trusted verification partner.</div>
        </div>

        <div className="buttons flex items-center  justify-start xl:justify-center space-x-3 text-xs xl:text-sm font-semibold">
            <div className="">
                <button className='bg-white text-black px-5 py-2 rounded-lg hover:bg-white'>Try for Free</button>
            </div>
            <div className="">
                <button className='border  border-white text-white  px-5 py-2 rounded-lg'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Hero