"use client";
import React from 'react'
import NumberCards from '@/components/NumberCards'
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { IoTrashBin } from "react-icons/io5";
import NotificationCard from './NotificationCard';

const DashboardComponent = () => {
    const [uploadCount,setUploadCount] = useState(0);
  const [verifiedCount, setVerifiedCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);

  const notificationData = [
    { 
      "id": 1,
      "type": "request",
      "title": "Hello you have one notification",
      "description": "One person has requested for view access of your document"
    },
    { 
      "id": 2,
      "type": "message",
      "title": "Your file has been uploaded",
      "description": "We have added your file on the blockchain"
    },
    { 
      "id": 3,
      "type": "request",
      "title": "Hello you have one notification",
      "description": "One person has requested for Download access of your document"
    },
    { 
      "id": 4,
      "type": "request",
      "title": "Hello you have one notification",
      "description": "One person has requested for view access of your document"
    },
    { 
      "id": 5,
      "type": "message",
      "title": "One person has downloaded your file",
      "description": "Your file hashed: 0x12hdindle1.... has been downloaded, tap to know more."
    },
  ]
  return (
    <div className='bg-black py-6 lg:px-10 min-h-[100vh]'>
        <div className='font-semibold text-2xl text-white  mb-5'>Your Document Statistics</div>
        <div className="flex justify-between mb-10 ">
          <NumberCards icon={<IoCloudUploadSharp />} iconColor="#FFF" title="Documents Uploaded" number={uploadCount}/>
          <NumberCards icon={<IoShieldCheckmark />} iconColor="#FFF" title="Documents Verified" number={verifiedCount}/>
          <NumberCards icon={<BsFillCloudDownloadFill />} iconColor="#FFF" title="Documents Downloaded" number={downloadCount}/>
          <NumberCards icon={<IoTrashBin />} iconColor="#FFF" title="Documents Deleted" number={deleteCount}/>
        </div>
        <div className='font-semibold text-2xl text-white  mb-5'>Notifications</div>
        <div className="mapHere flex flex-col space-y-3 mb-10">
          {notificationData.map((notification) => (
            <NotificationCard
              key={notification.id}
              type={notification.type}
              title={notification.title}
              description={notification.description}
            />
          ))}
        </div>

    </div>
  )
}

export default DashboardComponent