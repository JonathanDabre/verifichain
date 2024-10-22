"use client";
import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa";


const NotificationCard = ({type, title, description}) => {
  return (
    <div>
        <div className="bg-[#1A1A1A] rounded-xl border border-[#656565] flex space-x-4 items-center pl-4 pr-8 py-4">
            <div className={`icon bg-black p-3 text-xl flex items-center h-fit rounded-lg text-white`}  >{type==="request"?<IoMail/>:<FaBell />}</div>
            <div className="textpart flex flex-col justify-between">
                <div className="number text-xl font-semibold text-white">{title}</div>
                <div className="title text-[13px] font-semibold text-[#5B5B5B]">{description}</div>
            </div>
        </div>
    </div>
  )
}

export default NotificationCard