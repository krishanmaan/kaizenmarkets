import React from 'react'
import Navbar from '../components/Navbar'
import StartTradingPage from '../components/StartTradingPage'
import Footor from '../components/Footor'
import one from '../../../public/img/one.png'
import Image from 'next/image';
import phone from '../../../public/img/bg/mobile.png'

const page = () => {
  return (
    <div className="w-full text-justify">
      <div className="bg-gradient-custom2 pt-24">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-gray-900 text-4xl font-bold">What are CFD</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>What are CFD</span>
            </nav>
          </div>
          <div>
            <img
              src={one.src}
              alt="Forex Illustration"
              className="max-w-full h-auto"
              width={500}  // Replace with the actual width of your image
              height={300} // Replace with the actual height of your image
            />
          </div>
        </div>
      </div>







      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">CFD Trading Avenues</h2>
            <p className="text-gray-400 mb-8">
              Traders at Kaizen Markets can enjoy one of the largest ranges of Commodities, Stocks, and Indices compared to most brokers.
            </p>
            <h3 className="text-xs  mb-4">Increased Trading Choices</h3>
            <div className="space-y-6">
              {/* List Items */}
              {[
                'Trade on MetaTrader 5 via all devices.',
                'Trade online with our no-download platform.',
                'Leading US, European & Asian stocks trade as CFDs.',
                'Go long or short – trade your view on the market.',
                'Get leverage of up to 400:1 on CFD trading.',
                'Trade with MT5 app, risk-limited.',
                'Kaizen Markets offers manual and automated trading.'
              ].map((item, index) => (
                <div className="flex items-start" key={index}>
                  <div className="bg-blue-600 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="flex-1">{item}</p>
                </div>
              ))}
            </div>



          </div>
          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <img
              src={phone.src}
              alt="Trading Platforms"
              width={400}
              height={400}
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>




      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">What are the Advantages of CFDs?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Trade on MetaTrader 5 across desktop, tablet, and mobile platforms.</p>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Get leverage of up to 400:1 on CFD trading</p>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Web trading platform (no download and installation required)</p>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Trade on the move with our new Kaizen Markets MT5 app with unique risk-limiting tool</p>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Leading US, European & Asian stocks trade as CFDs</p>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Both manual and automated trading platforms Kaizen Markets</p>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Go long or short – trade your view on the market</p>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Kaizen Markets Protect</p>
            </div>
          </div>
        </div>
      </div>

      <StartTradingPage />
      <Footor />
    </div>
  )
}

export default page
