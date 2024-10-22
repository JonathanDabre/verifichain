"use client";
import React, { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Details from './Details';

const Valid = () => {

    const [showDetails, setShowDetails] = useState(false);

    const toggleShowDetails = ()=>{
        setShowDetails(!showDetails);
    }

  return (
    <div>
        <div className="flex px-5 py-3 space-x-4 bg-[#e1f7e1]  text-black rounded-lg">
            <div className="icon">
                <div className="iconbg text-[#0CCE6B] text-2xl">
                    <FaCircleCheck />
                </div>
            </div>
            <div className="h-[100%] flex items-center">
                <div className="text text-sm font-semibold pt-[2px] ">The Hash verified. Click to show more details</div>
            </div>
        </div>
        <div className="show-more text-white my-5">
            <div className="show-more-btn cursor-pointer flex justify-between rounded-lg w-fit  hover:bg-[#1F2226] space-x-3 px-3 py-2 " onClick={toggleShowDetails}>
                <div className="text-sm font-semibold">Show more details</div>
                <div className={`icon text-xl ${showDetails?'rotate-180':''}`}><MdOutlineKeyboardArrowDown /></div>
            </div>
        </div>
        {showDetails && (
            <Details documentName="Temporary Test Name" documentDescription="This is temporary description added to test the UI of this website, later replace it with the actual values." documentPermission="read" documentOwner="0x02674674795B8574517C541701db829A4A692C42"/>
        )}
    </div>
  )
}

export default Valid