import React from 'react';
import Navbar from '../components/Navbar';
import StartTradingPage from '../components/StartTradingPage';
import Footor from '../components/Footor';
import one from '../../../public/img/one.png';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="w-full text-justify">
      <div className="bg-gradient-custom2 pt-24">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-gray-900 text-4xl font-bold">ETF Trading</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span>
              <span>ETF Trading</span>
            </nav>
          </div>
          <div className="w-full md:w-auto">
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
            <h1 className="text-3xl font-bold pb-6 border-b border-gray-700">ETF Trading</h1>
            <p className="font-light text-sm pt-4">
              ETFs, or Exchange Traded Funds, are a type of investment fund that tracks underlying assets like indices, bonds, commodities and divides ownership of those assets into shares. ETFs are traded on an exchange, and their value shifts during the day, due to buying and selling actions done by the traders. As ETFs trade just the same way stocks do, they do not have their own net asset value (NAV), and they are calculated once at the close of every market day.
            </p>
          </div>
        </div>
        
      </div>

      <div className="bg-gray-900 text-white py-10">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Trade ETFs With Kaizen Markets</h2>
          <p className="text-gray-400 mb-8">
            Traders at Kaizen Markets can enjoy one of the largest ranges of Commodities, Stocks, and Indices compared to most brokers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              "Trade with confidence – Kaizen Markets is an internationally CFD and Forex broker.",
              "Large variety of instruments – Choose from a variety of instruments to trade with CFDs.",
              "Leveraged trading – Get leverage of up to 201 on your trades.",
              "Short trading Kaizen Markets marketable – Benefit also when the market goes down.",
              "Master your trading skills – High quality educational materials & daily market analysis.",
              "Best in class customer service – Multi-lingual live support.",
              "Fast and easy deposits and withdrawals.",
              "Competitive Spreads",
            ].map((text, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start">
                <div
                  className="bg-blue-500 rounded-full flex items-center justify-center text-white mr-4 text-sm"
                  style={{ minWidth: '32px', minHeight: '32px', alignSelf: 'flex-start' }}
                >
                  ✓
                </div>
                <p className="text-sm text-gray-300 leading-6">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <StartTradingPage />
      <Footor />
    </div>
  );
};

export default Page;
