"use client";
import React from 'react'
import { BsShieldFillCheck } from "react-icons/bs";
import { RiCircleFill } from "react-icons/ri";

const Details = ({documentName, documentDescription, documentOwner, documentPermission}) => {
    const permissionMap = {
        "edit": "#50E3C2", 
        "read": "#FDBE46",
        "none": "#FC5C58"
    }

    const editColor = permissionMap.edit;  // "#50E3C2"
    const readColor = permissionMap.read;  // "#FDBE46"
    const noneColor = permissionMap.none;  // "#FC5C58"

    console.log(permissionMap.documentPermission);

  return (
    <div className='bg-[#0A0A0A] flex px-5 py-6 rounded-lg border border-[#656565]  '>
        <div className="iconpart pr-5">
            <div className="iconbg text-7xl text-[#0CCE6B]">
                <BsShieldFillCheck />
            </div>
        </div>
        <div className="textpart flex flex-col px-5">
            <div className="name flex flex-col text-sm space-y-1">
                <div className="label text-[#98989C] " >Name</div>
                <div className="value text-white font-semibold">{documentName}</div>
            </div>

            <div className="name flex flex-col text-sm mt-5 space-y-1">
                <div className="label text-[#98989C] " >Description</div>
                <div className="value text-white font-semibold">{documentDescription}</div>
            </div>
            
            <div className="mt-5 flex space-x-10 ">
                <div className="name flex flex-col text-sm space-y-1">
                    <div className="label text-[#98989C] " >Permission</div>
                    <div className="value flex items-center space-x-3 text-white font-semibold">
                        <div className={`circle ${documentPermission === "read" ? 'text-[#FDBE46]' : documentPermission === "edit" ? 'text-[#50E3C2]' : 'text-[#FC5C58]'}`}>
                            <RiCircleFill />
                        </div>
                        <div className="">
                            {documentPermission}
                        </div>
                    </div>
                </div>
                <div className="name flex flex-col text-sm  space-y-1">
                    <div className="label text-[#98989C] " >Owner</div>
                    <div className="value bg-[#4F1C31] px-3 py-2 rounded-lg text-[#EC5F8F] ">{documentOwner}</div>
                </div>
            </div>

            

           
        </div>
    </div>
  )
}

export default Details