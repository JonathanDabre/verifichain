import React from 'react'
import DocumentList from './DocumentList'

const page = () => {
  return (
    <div className='bg-black py-6 lg:px-10 min-h-[100vh]'>
      <div className='font-semibold text-2xl text-white  mb-5'>Manage</div>
      <DocumentList/>
    </div>
  )
}

export default page