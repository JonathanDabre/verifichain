import React from 'react'
import { FaCircleExclamation } from "react-icons/fa6";

const Invalid = () => {
  return (
    <div className=''>
        <div className="flex px-5 py-3 space-x-4 bg-[#fbddbd]  text-black rounded-lg">
            <div className="icon">
                <div className="iconbg text-[#ED9300] text-2xl">
                    <FaCircleExclamation />
                </div>
            </div>
            <div className="h-[100%] flex items-center">
                <div className="text text-sm font-semibold pt-[2px] ">This hash is invalid. Hash not found on chain. Please Check.</div>
            </div>

        </div>
    </div>
  )
}

export default Invalid