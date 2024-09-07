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
            <h1 className="text-gray-900 text-4xl font-bold">Energies</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>Energies</span>
            </nav>
          </div>
          <div>
            <Image
              src={one.src}
              alt="Forex Illustration"
              className="max-w-full h-auto"
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="py-10 px-6 flex flex-col gap-10 max-w-screen-lg mx-auto items-center justify-center">
          <div className="bg-gradient-to-r p-10 sm:p-20 from-gray-800 to-black w-full text-white text-left rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h1 className="text-3xl font-bold pb-6 border-b border-gray-700">Energies</h1>
            <p className="font-light text-sm pt-4">
              The Energy Is The Significant Source Of Power To Run The Economy. In Order To Power Up The Electricity, Drive A Vehicle, And To Make Plastic Products, We Require The Use Of Crude Oils. <br /> <br />

              Approximately half of the total oil reserves are explored in the middle east. To acquire crude oil, countries without oil reserves will trade energies over the financial market. <br /> <br />

              Trading in spot metals has become in high demand recently due to various factors such as market volatility which is caused by real time news and events, both financial and economic factors which are still the strongest influences affecting commodity trading. <br /> <br />

              In the forex market, investors are trading a pair of currency and anticipating a profit from the changing values of currency over time. <br /><br />
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