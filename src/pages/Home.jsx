import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    {/* Hero Section */}
    <div className='relative'>
      <Navbar/>
      <Hero/>
    </div>
    </>
  )
}

export default Home