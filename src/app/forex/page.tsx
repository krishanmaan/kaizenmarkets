import React from 'react'
import Navbar from '../components/Navbar'
import StartTradingPage from '../components/StartTradingPage'
import Footor from '../components/Footor'
import one from '../../../public/img/one.png'
import Costs from '../components/Costs'
import ic1 from '../../../public/img/icon/one1.png';
import ic2 from '../../../public/img/icon/one2.png';
import ic3 from '../../../public/img/icon/one3.png';
import ic4 from '../../../public/img/icon/one4.png';
import ic5 from '../../../public/img/icon/one5.png';
import ic6 from '../../../public/img/icon/one6.png';
import ic7 from '../../../public/img/icon/one8.png';
import ic8 from '../../../public/img/icon/one9.png';
import footerban from '../../../public/img/bg/footer-ban.png'


import Image from 'next/image'

const page = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-custom2">
        <Navbar />
        <div className="p-8 flex items-center justify-between max-w-screen-xl mx-auto">
          <div>
            <h1 className="text-gray-900 text-4xl font-bold">Forex</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>Forex</span>
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
            <h1 className="text-3xl font-bold pb-6 border-b border-gray-700">Forex Overview</h1>
            <p className="font-light text-sm pt-4">
              The spot foreign exchange market (also called “Forex” or “FX”) is not traded on exchange but rather accomplished over-the-counter by two counter parties. Initially, Forex was traded “Interbank” since trading was conducted only by banks trading with each other. However, with the development of information systems and technology, financial institutions introduced margin trading on foreign exchange at more competitive terms. At present, the majority of foreign exchange transactions are performed by speculators. Institutional investors, funds and government institutions contribute to the rest of the market participants. <br /><br />

              It is estimated that daily Forex Market turnover exceeds 4 trillion U.S. Dollars in volume traded. Forex market today is essentially the largest and most liquid of the financial markets. Forex gives traders an access to the market 24 hours a day, 5 days a week, with prices being quoted to one thousandth of a cent!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center bg-gray-900 pt-20 pb-20  flex flex-col items-center justify-center"
      // style={{
      //     backgroundImage: `url(${footerban.src})`, 

      // }}
      >
        <div className="text-center text-white max-w-screen-xl">
          <p className="text-2xl mb-8 font-Poppins  text-gray-100">Kaizen Markets Trading Advantages</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 p-6 gap-1 mb-12 max-w-screen-xl mx-auto">
          <div className="bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center">
            <Image
              src={ic1.src}
              alt="Forex Illustration"
              className="max-w-full h-auto  mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-sm font-Poppins mt-2 text-gray-300">Fast & Secure Execution</h3>
          </div>
          <div className="bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center">
            <Image
              src={ic8.src}
              alt="Forex Illustration"
              className="max-w-full h-auto  mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-sm font-Poppins mt-2 text-gray-300">Flexible leverage up to 1:400</h3>
          </div>
          <div className="bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center">
            <Image
              src={ic4.src}
              alt="Forex Illustration"
              className="max-w-full h-auto  mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-sm font-Poppins mt-2 text-gray-300">Deposits from as low as $10</h3>
          </div>
          <div className="bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center">
            <Image
              src={ic6.src}
              alt="Forex Illustration"
              className="max-w-full h-auto  mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-sm font-Poppins mt-2 text-gray-300">True STP, ECN and NDD execution</h3>
          </div>
          <div className="bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center">
            <Image
              src={ic5.src}
              alt="Forex Illustration"
              className="max-w-full h-auto  mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-sm font-Poppins mt-2 text-gray-300">Fast account opening & approval</h3>
          </div>
          <div className="bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center">
            <Image
              src={ic3.src}
              alt="Forex Illustration"
              className="max-w-full h-auto  mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-sm font-Poppins mt-2 text-gray-300">Personalized “My Kaizen Markets “</h3>
          </div>
          <div className="bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center">
            <Image
              src={ic2.src}
              alt="Forex Illustration"
              className="max-w-full h-auto  mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-sm font-Poppins mt-2 text-gray-300">Swap-Free (Islamic) Accounts</h3>
          </div>
          <div className="bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center">
            <Image
              src={ic8.src}
              alt="Forex Illustration"
              className="max-w-full h-auto  mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-sm font-Poppins mt-2 text-gray-300">Instant funding & withdrawal</h3>
          </div>


        </div>


        <div className="flex gap-4 max-w-screen-xl">
          <a href="https://office.kaizenmarkets.com/">
            <button className="bg-yellow-500 text-white py-2 px-6  font-semibold hover:bg-purple-600 transition duration-300">Open Live Account</button>
          </a>
          <a href="https://office.kaizenmarkets.com/trader/registration">
            <button className=" text-white py-2 px-6  font-semibold hover:bg-gray-200 hover:text-gray-800 transition duration-300 border ">Open Demo Account</button>
          </a>
        </div>
      </div>

      <Costs />
      <StartTradingPage />
      <Footor />
    </div>
  )
}

export default page