import React from 'react'

const page = () => {
  return (
    <div className='min-h-[100vh] bg-black'>
        <div className='flex justify-center'>
            <img className='w-[150px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlICHqS0bieikH1Y_fF91-6hHY3WsJmpXo8A&s" alt="" />
        </div>
        <div className="textpart text-white flex  flex-col justify-center mt-5">
            <div className="text-center text-6xl font-semibold">404</div>
            <div className="text-lg font-semibold text-center">Awww... Don&apos;t Cry.</div>
            <div className="text-[#98989C] text-xs text-center w-[60%] mx-auto mt-3 flex justify-center"><div className='text-center'>What you&apos;re looking for may have been misplaced in Long Term Memory</div></div>

        </div>
    </div>
  )
}

export default page