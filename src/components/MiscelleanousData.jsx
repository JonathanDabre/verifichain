// "use client";
// import React from 'react'
// import { FaFillDrip } from "react-icons/fa";
// import { IoSpeedometer } from "react-icons/io5";
// import { IoPeople } from "react-icons/io5";
// import { FaFileShield } from "react-icons/fa6";
// import { BsBuildingsFill } from "react-icons/bs";
// import NumberCards from './NumberCards';
// import wallet, { WalletContext, WalletContextProvider } from '../context/wallet.js';




// const MiscelleanousData = ({name}) => {
//     const formatDate = () => {
//         const date = new Date();
      
//         const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         const months = [
//           'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//         ];
      
//         const dayName = days[date.getDay()];
//         const dayNumber = date.getDate();
//         const monthName = months[date.getMonth()];
//         const year = date.getFullYear();
      
//         return `${dayName}, ${dayNumber} ${monthName} ${year}`;
//       };

//   return (
//     <div className='px-5 xl:px-10 pt-10 pb-6'>
//         <div className="flex flex-col space-y-3 xl:space-y-0 xl:flex-row justify-between">
//             <div className="">
//                 <div className='font-semibold text-2xl text-white'>Welcome Back, {WalletContextProvider}</div>
//                 <div className="text-sm  text-[#B2B2B2]">{formatDate()}</div>
//             </div>
//         </div>
//         <div className="mt-10 flex flex-col space-y-2 xl:space-y-0 xl:flex-row justify-between">
//             <NumberCards icon={<FaFillDrip />} iconColor="#FFF" title="Upload Capacity" number="1000+" />
//             <NumberCards icon={<IoSpeedometer />} iconColor="#FFF" title="Verification Speed" number="30s" />
//             <NumberCards icon={<IoPeople />} iconColor="#FFF" title="Empowers Users" number="1M+" />
//             <NumberCards icon={<FaFileShield />} iconColor="#FFF" title="Fraud Prevention" number="95%" />
//             <NumberCards icon={<BsBuildingsFill />} iconColor="#FFF" title="Benefiting Organisations" number="500+" />
//         </div>
//     </div>
//   )
// }

// export default MiscelleanousData
"use client";
import React, { useContext } from 'react';
import { FaFillDrip } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaFileShield } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import NumberCards from './NumberCards';
import { WalletContext } from '../context/wallet.js';  // Import WalletContext

const MiscelleanousData = ({name}) => {
    // Access wallet context to get the address
    const { userAddress, isConnected } = useContext(WalletContext);

    const formatDate = () => {
        const date = new Date();
      
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const dayName = days[date.getDay()];
        const dayNumber = date.getDate();
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();
      
        return `${dayName}, ${dayNumber} ${monthName} ${year}`;
    };

  return (
    <div className='px-5 xl:px-10 pt-10 pb-6'>
        <div className="flex flex-col space-y-3 xl:space-y-0 xl:flex-row justify-between">
            <div className="">
                <div className='font-semibold text-2xl text-white'>
                    Welcome Back, {isConnected ? userAddress : 'Guest'}
                </div>
                <div className="text-sm  text-[#B2B2B2]">{formatDate()}</div>
            </div>
        </div>
        <div className="mt-10 flex flex-col space-y-2 xl:space-y-0 xl:flex-row justify-between">
            <NumberCards icon={<FaFillDrip />} iconColor="#FFF" title="Upload Capacity" number="1000+" />
            <NumberCards icon={<IoSpeedometer />} iconColor="#FFF" title="Verification Speed" number="30s" />
            <NumberCards icon={<IoPeople />} iconColor="#FFF" title="Empowers Users" number="1M+" />
            <NumberCards icon={<FaFileShield />} iconColor="#FFF" title="Fraud Prevention" number="95%" />
            <NumberCards icon={<BsBuildingsFill />} iconColor="#FFF" title="Benefiting Organisations" number="500+" />
        </div>
    </div>
  );
};

export default MiscelleanousData;
