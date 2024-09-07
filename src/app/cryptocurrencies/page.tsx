import React from 'react'
import Navbar from '../components/Navbar'
import StartTradingPage from '../components/StartTradingPage'
import Footor from '../components/Footor'
import one from '../../../public/img/one.png'
import Image from 'next/image';

const page = () => {
  return (
    <div className="w-full text-justify">
      <div className="bg-gradient-custom2 pt-24">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-gray-900 text-4xl font-bold">Cryptocurrencies</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>Cryptocurrencies</span>
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
        <div className="py-10 px-6 flex flex-col gap-10 max-w-screen-lg mx-auto items-center justify-center">
          <div className="bg-gradient-to-r p-10 sm:p-20 from-gray-800 to-black w-full text-white text-left rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h1 className="text-3xl font-bold pb-6 border-b border-gray-700">Cryptocurrencies</h1>
            <p className="font-light text-sm pt-4">
              Cryptocurrencies Are Technology Derived Exchange That Has Vastly Increased Its Value Over The Last Eight Years. <br /> <br />

              The first cryptocurrency, Bitcoin, was established in 2009 by Satoshi Nakamoto. He was developing a P2P system that allowed users to exchange money over the internet.
            </p>
          </div>
        </div>
      </div>
      <StartTradingPage />
      <Footor />
    </div>
  )
}

export default page