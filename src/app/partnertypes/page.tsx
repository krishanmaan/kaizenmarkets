import React from 'react'
import Navbar from '../components/Navbar'
import StartTradingPage from '../components/StartTradingPage'
import Footor from '../components/Footor'
import one from '../../../public/img/one.png'
import Image from 'next/image';

const page = () => {
  return (
    <div className="w-full">
    <div className="bg-gradient-custom2 pt-24">
      <Navbar />
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
        <div>
          <h1 className="text-gray-900 text-4xl font-bold">Partner Types</h1>
          <nav className="text-gray-600 mt-4">
            <a href="/">
              <span>Home</span>
            </a>
            <span className="mx-2">/</span> <span>Partner Types</span>
          </nav>
        </div>
        <div>
      <Image 
        src={one.src} 
        alt="Forex Illustration" 
        className="max-w-full h-auto"
        width={500}  // Replace with the actual width of your image
        height={300} // Replace with the actual height of your image
      />
    </div>
      </div>
    </div>
      <StartTradingPage/>
      <Footor/>
    </div>
  )
}

export default page