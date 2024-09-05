"use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../public/img/logo2.png'
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownMouseEnter = useCallback((menu: string) => {
    setActiveDropdown(menu);
    setIsDropdownHovered(true);
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    if (!isDropdownHovered) {
      setActiveDropdown(null);
    }
  }, [isDropdownHovered]);

  return (
    <>
    
      
      <header className="font-Inter18 fixed top-0 left-0 w-full bg-white  z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/">
            <div className="text-2xl font-bold text-yellow-600">
              <Image
                src={logo.src}
                alt="Forex Illustration"
                className="max-w-full h-auto"
                width={198}
                height={40}
              />
            </div>
          </a>

          <nav className="hidden md:flex space-x-8">
            <div className="relative" onMouseLeave={handleMouseLeave}>
              <button
                className="text-gray-700 hover:text-yellow-600"
                onMouseEnter={() => handleMouseEnter('trading')}
              >
                Trading
              </button>
              {activeDropdown === 'trading' && (
                <div
                  className="absolute py-2 w-48 bg-white border rounded shadow-xl"
                  onMouseEnter={() => setActiveDropdown('trading')}
                >
                  <Link href="/whatisforex" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    What is Forex?
                  </Link>
                  <Link href="/whatarecfds" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    What are CFDs?
                  </Link>
                  <Link href="/etftrading" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    ETF Trading
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseLeave={handleMouseLeave}>
              <button
                className="text-gray-700 hover:text-yellow-600"
                onMouseEnter={() => handleMouseEnter('tradingInfo')}
              >
                Trading Info
              </button>
              {activeDropdown === 'tradingInfo' && (
                <div className="absolute py-2 w-48 bg-white border rounded shadow-xl">
                  <Link href="/forex" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Forex
                  </Link>
                  <Link href="/indices" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Indices
                  </Link>
                  <Link href="/cfds" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    CFDs
                  </Link>
                  <Link href="/metals" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Metals
                  </Link>
                  <Link href="/energies" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Energies
                  </Link>
                  <Link href="/cryptocurrencies" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Cryptocurrencies
                  </Link>
                  <Link href="/futures" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Futures
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseLeave={handleMouseLeave}>
              <button
                className="text-gray-700 hover:text-yellow-600"
                onMouseEnter={() => handleMouseEnter('partnership')}
              >
                Partnership
              </button>
              {activeDropdown === 'partnership' && (
                <div className="absolute py-2 w-48 bg-white border rounded shadow-xl">
                  <Link href="/advantages" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Advantages
                  </Link>
                  <Link href="/partnertypes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Partner Types
                  </Link>
                  <Link href="/partnerspromotions" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Partners Promotions
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseLeave={handleMouseLeave}>
              <button
                className="text-gray-700 hover:text-yellow-600"
                onMouseEnter={() => handleMouseEnter('platform')}
              >
                Platform
              </button>
              {activeDropdown === 'platform' && (
                <div className="absolute py-2 w-48 bg-white border rounded shadow-xl">
                  <Link href="/platform" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Windows Platform
                  </Link>
                  <Link href="/platform" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    iOS Platform
                  </Link>
                  <Link href="/platform" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Android Platform
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-yellow-600">
              About
            </Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <a href="https://office.kaizenmarkets.com/">
              <button className="w-full text-gray-700 border border-black px-4 py-2 rounded hover:bg-green-600 transition duration-200 hover:text-white">
                Sign In
              </button>
            </a>
            <a href="https://office.kaizenmarkets.com/trader/registration">
              <button className="bg-[#FE7501] text-white px-4 py-2 hover:bg-green-600 transition duration-200 border border-black rounded">
                Sign Up
              </button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden px-4 pt-4 pb-2 space-y-2">
            <div
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('trading')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="block text-gray-700 hover:text-yellow-600 w-full text-left">
                Trading
              </button>
              {activeDropdown === 'trading' && (
                <div className="pl-4">
                  <Link href="/whatisforex" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    What is Forex?
                  </Link>
                  <Link href="/whatarecfds" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    What are CFDs?
                  </Link>
                  <Link href="/etftrading" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    ETF Trading
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('tradingInfo')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="block text-gray-700 hover:text-yellow-600 w-full text-left">
                Trading Info
              </button>
              {activeDropdown === 'tradingInfo' && (
                <div className="pl-4">
                  <Link href="/forex" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Forex
                  </Link>
                  <Link href="/indices" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Indices
                  </Link>
                  <Link href="/cfds" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    CFDs
                  </Link>
                  <Link href="/metals" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Metals
                  </Link>
                  <Link href="/energies" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Energies
                  </Link>
                  <Link href="/cryptocurrencies" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Cryptocurrencies
                  </Link>
                  <Link href="/futures" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Futures
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('partnership')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="block text-gray-700 hover:text-yellow-600 w-full text-left">
                Partnership
              </button>
              {activeDropdown === 'partnership' && (
                <div className="pl-4">
                  <Link href="/advantages" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Advantages
                  </Link>
                  <Link href="/partnertypes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Partner Types
                  </Link>
                  <Link href="/partnerspromotions" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Partners Promotions
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('platform')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="block text-gray-700 hover:text-yellow-600 w-full text-left">
                Platform
              </button>
              {activeDropdown === 'platform' && (
                <div className="pl-4">
                  <Link href="/platform" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Windows Platform
                  </Link>
                  <Link href="/platform" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    iOS Platform
                  </Link>
                  <Link href="/platform" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Android Platform
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="block text-gray-700 hover:text-yellow-600">
              About
            </Link>

            <div className="space-y-2 pt-4">
              <a href="https://office.kaizenmarkets.com/">
                <button className="w-full text-gray-700 border border-black px-4 py-2 rounded hover:bg-green-600 transition duration-200 hover:text-white">
                  Sign In
                </button>
              </a>
              <a href="https://office.kaizenmarkets.com/trader/registration">
                <button className="bg-[#FE7501] text-white w-full px-4 py-2 hover:bg-green-600 transition duration-200 border border-black rounded">
                  Sign Up
                </button>
              </a>
            </div>
          </nav>
        )}
      </header>

    </>
  );
};

export default Navbar;
