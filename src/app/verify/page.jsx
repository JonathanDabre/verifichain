import React  from 'react'
import HashInput from './HashInput'

const page = () => {
  return (
    <div className='bg-black py-6 lg:px-10 min-h-[100vh]'>
      <div className='font-semibold text-2xl text-white  mb-5'>Verify Hash</div>
      <HashInput/>
    </div>
  )
}

export default page