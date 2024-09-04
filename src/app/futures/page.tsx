import React from 'react'
import Navbar from '../components/Navbar'
import StartTradingPage from '../components/StartTradingPage'
import Footor from '../components/Footor'
import one from '../../../public/img/one.png'
import Image from 'next/image';

const page = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-custom2">
        <Navbar />
        <div className="p-8 flex items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-gray-900 text-4xl font-bold">Futures</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>Futures</span>
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
            <h1 className="text-3xl font-bold pb-6 border-b border-gray-700">Futures</h1>
            <p className="font-light text-sm pt-4">
              Futures Are Highly Standardized Financial Contract Or A Derivative Instrument, Which Obligates The Two Parties To Transact A Set Of Financial Instruments, At A Predetermined Future Date And Price. <br /><br />

              To reduce the counterparty risks and default risks, all futures positions are marked-to-market daily, participants must maintain a certain margin level.
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