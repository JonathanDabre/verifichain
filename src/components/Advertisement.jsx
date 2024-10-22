"use client";
import React from 'react'
import Link from 'next/link';

const Advertisement = () => {
  return (
    <div className=' px-5 lg:px-10 py-10 bg-black'>
        <div className='xl:h-[300px]  border border-[#656565] flex flex-col-reverse xl:flex-row justify-center items-center bg-gradient-to-br from-black to-[#1A1A1A] rounded-xl shadow-sm'>
            <div className="text-part flex flex-col items-start w-full px-5 xl:px-10 xl:py-10 pb-10">
                <Link href="/dashboard" className=" border cursor-pointer w-fit bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold ">Explore</Link>
                <div className="mt-4 font-semibold text-xl  xl:text-3xl w-[70%] text-left text-white">Overview of your Documentation work at Your Ease </div>
                <div className="mt-4 text-left w-[70%] text-xs xl:text-sm text-[#737373] ">Manage your documents work from anywhere in the world with our robust global capabilities</div>
            </div>
            <div className="w-[100%] xl:w-[50%] flex justify-start xl:justify-center px-5 xl:pr-20  xl:px-10  py-10">
                <img className='rounded-lg' src="https://cdn.dribbble.com/users/130603/screenshots/5685838/ab_bookdemo_anim_dribbble.gif" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Advertisement