import React from 'react'
import Navbar from '../components/Navbar'
import StartTradingPage from '../components/StartTradingPage'
import Footor from '../components/Footor'
import one from '../../../public/img/one.png'
import Image from 'next/image';
import money from '../../../public/img/moneybag.png'
import win from '../../../public/img/bg/desktop-platform.png'
import ios from '../../../public/img/bg/crop-ios2.png'
import and from '../../../public/img/bg/andrio.jpg'
const page = () => {
  return (
    <div className="w-full text-justify">
      <div className="bg-gradient-custom2 pt-24">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-gray-900 text-4xl font-bold">Platform for download</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>Platform</span>
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
      <section id='windows' className="  flex items-center justify-center bg-[#202938] lg:mt-24 lg:mb-10 py-16">
        <div className='max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center  '>
          <div className="flex justify-center">
            <Image
              src={win.src}
              alt="money"
              width={200}
              height={200}
              className="max-w-full w-[400px] p-10"
            />
          </div>
          <div className="px-4 lg:py-40 sm:px-6 ">
            <h2 className="text-4xl font-bold text-gray-100 mb-4 font-Inter18">TRADING WITH METATRADER 5</h2>
            <p className=" text-gray-200 mb-6 font-Inter18">MT5 Is A State-Of-The-Art, Multi-Functional Platform That Boasts Advanced Auto Trading Systems, Technical Tools And Copy Trading. MetaTrader 5 Is Designed To Accommodate Advanced Trading Across A Wider Selection Of Asset Classes Than Its Predecessor, The MT5. Feature-Rich, It Boasts Advanced Tools, And Offers Superior Execution. <br /> <br />
              To start trading, <samp className='font-extrabold'>Download MT5 for Windows now.</samp>

            </p>
            <a href="https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/mt5setup.exe">
              <button className="bg-[#FE7501] text-white px-6 text-sm py-3  rounded-lg  hover:bg-green-600 transition duration-200 font-Poppins">Download For Windows</button>
            </a>
          </div>
        </div>
      </section>
      <section id='ios' className="  flex items-center justify-center  bg-[#FEFEFE] lg:mt-24 lg:mb-10 py-16">
        <div className='max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-'>

          <div className="px-4 lg:py-40 sm:px-6 ">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-Inter18">TRADING WITH METATRADER 5</h2>
            <p className=" text-gray-800 mb-6 font-Inter18">Meta Trader 4 is your one-stop solution for trading at the global financial market, and now, you can trade directly from your iPhone or iPad by simply downloading the MT5 mobile application. This user-friendly application works well across all iOS devices, and you can trade through it from anywhere. <br /> <br />
              To start trading, <samp className='font-extrabold'>Download MT5 For IOS Now.</samp>

            </p>
            <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=">
              <button className="bg-[#FE7501] text-white px-6 text-sm py-3  rounded-lg  hover:bg-green-600 transition duration-200 font-Poppins">Download For IOS</button>
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src={ios.src}
              alt="money"
              width={200}
              height={200}
              className="max-w-full w-[400px] p-10"
            />
          </div>
        </div>
      </section>
      <section id='and' className="  flex items-center justify-center bg-[#202938] lg:mt-24 mb-16 py-16">
        <div className='max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-'>
          <div className="flex justify-center">
            <Image
              src={and.src}
              alt="money"
              width={200}
              height={200}
              className="max-w-full w-[400px] p-10"
            />
          </div>
          <div className="px-4 lg:py-40 sm:px-6 ">
            <h2 className="text-4xl font-bold text-gray-100 mb-4 font-Inter18">TRADING WITH METATRADER 5</h2>
            <p className=" text-gray-200 mb-6 font-Inter18">Meta Trader 4 is an ideal tool for traders, as it provides in-depth market information directly on their mobile device. Now, you can trade from your Android mobile device with the MT5 Android app. <br />
              It will help you to access data, Charting And Useful Trading Functions.<br /> <br />
              To start trading, <samp className='font-extrabold'> Download MT5 for ANDRIOD now.</samp>

            </p>
            <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=KaizenMarkets-Live">
              <button className="bg-[#FE7501] text-white px-6 text-sm py-3  rounded-lg  hover:bg-green-600 transition duration-200 font-Poppins">Download For Android</button>
            </a>
          </div>
        </div>
      </section>
      <StartTradingPage />
      <Footor />
    </div>
  )
}

export default page