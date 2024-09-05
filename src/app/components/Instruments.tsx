import React from 'react';
import { FaBitcoin, FaDollarSign, FaChartLine, FaBox, FaIndustry } from 'react-icons/fa';

const Instruments = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="text-left mb-12 pt-16">
          <h2 className="text-5xl font-Poppins ">
            AREAS WHAT WE SERVE Trading <span className="text-yellow-500">Instruments</span>
          </h2>
          <p className="mt-4 text-sm  font-Inter18">
            Choose from a diverse selection of six distinct asset classes, each offering unique opportunities for growth and investment. Gain comprehensive access to over 200 trading instruments, including stocks, bonds, commodities, currencies, and more, empowering you to build a well-rounded and robust investment portfolio tailored to your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 bg-[#F7F6F9] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600 hover:text-white transition duration-200">
            <FaBitcoin className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold  mb-2">Cryptocurrencies</h3>
            <p className="">Cryptocurrencies are technology derived exchange that has vastly increased its value over the last eight years.</p>
          </div>

          <div className="p-8 bg-[#F7F6F9] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600 hover:text-white transition duration-200">
            <FaChartLine className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold  mb-2">Spot Metals</h3>
            <p className="">Precious metals and industrial metals are still widely used around the world. Due to their rarity and the high demands.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-8 bg-[#F7F6F9] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600 hover:text-white transition duration-200">
          <FaDollarSign className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold  mb-2">Forex</h3>
          <p className="">Foreign exchange is a network of interlinked currency exchange market where investors can trade electronically on MT5 platform.</p>
        </div>

        <div className="p-8 bg-[#F7F6F9] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600 hover:text-white transition duration-200">
          <FaChartLine className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold  mb-2">Spot Indices</h3>
          <p className="">Indices are large-scale portfolio of stocks that represent the performance of the stock market and the economy.</p>
        </div>

        <div className="p-8 bg-[#F7F6F9] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600 hover:text-white transition duration-200">
          <FaBox className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold  mb-2">Commodities</h3>
          <p className="">Purchasing a stock from a publicly traded firm allows the investor to gain partial ownership for the corporations.</p>
        </div>

        <div className="p-8 bg-[#F7F6F9] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600 hover:text-white transition duration-200">
          <FaIndustry className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold  mb-2">Futures</h3>
          <p className="">Futures are highly standardized financial contract or a derivative instrument, which obligates the two parties to transact a set of financial instruments.</p>
        </div>
      </div>
    </div>
  );
}

export default Instruments;
