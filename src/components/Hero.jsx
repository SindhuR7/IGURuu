import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import img from '../assets/perosn.png'

const Hero = () => {
  return (
    <section className='absolute top-0 left-0 bg-[linear-gradient(135deg,#2d5a61_0%,#e8b4a2_100%)] min-h-screen w-full z-[-1]'>
      <div className='max-w-6xl w-full mx-auto p-4 flex items-center justify-between'>
        {/* Left Side Content */}
        <div className='space-y-4 w-[480px]'>
          {/* Heading */}
          <h1 className='text-6xl leading-tight font-semibold text-white relative'>
            <p className='h-12 w-[3px] bg-[#ff6d34] absolute top-5 -left-3'></p> Your next big <br/>idea starts here
          </h1>

          {/* description */}
          <p className='text-white/80 text-[25px]'>
            The ideal framework to learn how to <br/>manage all aspects of startups.
          </p>

          {/* Button */}
          <Button onClick={'/sign_in'} title='Start for free' styling='bg-[#ff6d34] px-10 py-4 rounded-full text-[24px] text-white cursor-pointer m-4 hover:bg-[#00bdbd] transition-all duration-400'/>
        </div>

        {/* Right Side */}
        <div className='flex justify-center'>
          <img className='w-3xl' src={img} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero