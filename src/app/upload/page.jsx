import React from 'react'
import DragAndDrop from './DragAndDrop'

const page = () => {
  return (
    <div className='bg-black py-6 px-5 lg:px-10 min-h-[100vh]'>
        <div className='font-semibold text-2xl text-white  mb-5'>Upload a file</div>
        <DragAndDrop/>
    </div>
  )
}

export default page