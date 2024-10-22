"use client";
import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div>
        <div className="pt-5 pb-20 bg-gradient-to-br from-black to-[#1A1A1A] flex flex-col items-center">
            <div className="text-part px-10 xl:px-0 flex flex-col items-center">
                {/* <div className=" border border-[#FF9416] w-fit bg-[#f9eee0] text-[#FF9416] px-6 py-2 rounded-full text-sm font-semibold ">Projects</div> */}
                <div className="mt-6 xl:mt-10 font-semibold text-xl xl:text-4xl xl:w-[60%] text-left lg:text-center text-white">Transform Your Documentation Experience with Powerful Features</div>
                <div className="mt-3 lg:mt-6 xl:mt-10 text-left lg:text-center xl:w-[50%] text-xs xl:text-lg text-[#737373] ">Discover the innovative tools and functionalities that make VerifiChain the ultimate solution for seamless and efficient Document management.</div>
            </div>
            <div className="project-cards flex max-w-[450px] xl:max-w-none flex-col items-center xl:flex-row space-y-8 xl:space-y-0 xl:justify-between xl:space-x-5 pt-10  px-10">
                <ProjectCard title="Store Your Document on Decentralized network" description="Monitor the exact location and status of your packages at every stage of their journey" imageLink="https://media.licdn.com/dms/image/D5612AQE71M_jZyZEjA/article-cover_image-shrink_720_1280/0/1694445169540?e=2147483647&v=beta&t=4MKCpyJIH4ZHFCne91_5Ojn05eQwlTFfjEBRggHhItE" redirectLink="/upload"/>
                <ProjectCard title="Manage Access of your Documents" description="Monitor the exact location and status of your packages at every stage of their journey" imageLink="https://img.freepik.com/premium-photo/digital-red-glowing-access-denied-sign-virtual-blue-glowing-frame-abstract-background-3d-rendering_670147-1486.jpg" redirectLink="/manage"/>
                <ProjectCard title="Get your Documents Verified seemlessly" description="Monitor the exact location and status of your packages at every stage of their journey" imageLink="https://cdn.prod.website-files.com/61436206a95bd10922bde560/65d6229d93a2ff6a5efd04f9_6268086b973db521486ba9bc_kyc%2520kyb%2520use%2520case.png" redirectLink="/verify"/>

            </div>

        </div>
    </div>
  )
}

export default Project