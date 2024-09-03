"use client";


import React, { useState, useEffect } from 'react';
import bg from '../../../public/img/bg/hero_bg.png';
import { FaDollarSign } from 'react-icons/fa';
import logo from '../../../public/img/bg/hero_bg.svg';
import Image from 'next/image';
import Navbar from './Navbar';
import ic1 from '../../../public/img/icon/Register.png';
import ic2 from '../../../public/img/icon/add fund.png';
import ic3 from '../../../public/img/icon/doller.png';

import slider1 from '../../../public/img/bg/slider1.png'
import slider2 from '../../../public/img/bg/slider2.png'
import slider3 from '../../../public/img/bg/slider3.png'
const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [slider1, slider2, slider3]; // Use the imported images directly

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-custom">
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-Poppins">
              Fastest way to Investing & Trading in
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 font-Inter18">
              Development of Trade Ecosystem. Without selling your brand identity.
            </p>
            <a href="https://office.kaizenmarkets.com/trader/registration">
              <button className="bg-[#FE7501] font-Poppins border-2 hover:border-black border-[#FE7501] text-white px-4 py-2 hover:bg-purple-600 transition duration-200">
                Get Started
              </button>
            </a>
          </div>


          <div>
          <div className="flex flex-col lg:flex-row justify-center items-center bg-transparent">
              <div className="w-full h-96 relative overflow-hidden">
                <div
                  className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="inline-block w-full h-96 relative"
                    >
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        layout="fill"
                        objectFit="cover" // Ensure image covers the container
                        className="rounded-md" // Optional: add some border-radius
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          




        </div>
        <div className="box-border font-urbanist  mx-auto w-full outline-none max-w-[1480px] text-[14px]/[22.4px]">
          <div className="box-border font-urbanist text-center outline-none">
            <h3 className="mb-8 font-bold mt-0 font-urbanist leading-[1.2] text-[calc(1.425rem+2.1vw)]">
              How Will it Work?
            </h3>
          </div>
          <div className="box-border font-urbanist flex flex-wrap mt-[-0]  outline-none">
            <div className="box-border font-urbanist max-w-full  mt-0  shrink-0 w-[33.3333%] outline-none flex">
              <div className="box-border font-urbanist flex flex-col items-center w-full outline-none">
                <Image
                  src={ic1.src}
                  alt="Forex Illustration"
                  className="max-w-full h-auto"
                  width={100}  // Replace with the actual width of your image
                  height={100} // Replace with the actual height of your image
                />

                <p className="font-bold text-lg mb-4 leading-[1.75rem]">
                  1:500
                </p>
                <div className="text-sm text-gray-600 text-center leading-[1.25rem]">
                  <p className="mt-0 mb-0">
                    LEVERAGE UP TO
                  </p>
                </div>
              </div>
            </div>
            <div className="box-border font-urbanist max-w-full  mt-0  shrink-0 w-[33.3333%] outline-none flex">
              <div className="box-border font-urbanist flex flex-col items-center w-full outline-none">
                <Image
                  src={ic3.src}
                  alt="Forex Illustration"
                  className="max-w-full h-auto"
                  width={100}  // Replace with the actual width of your image
                  height={100} // Replace with the actual height of your image
                />
                <p className="font-bold text-lg mb-4 leading-[1.75rem]">
                  $50
                </p>
                <div className="text-sm text-gray-600 text-center leading-[1.25rem]">
                  <p className="mt-0 mb-0">
                    MINIMUM DEPOSIT
                  </p>
                </div>
              </div>
            </div>
            <div className="box-border font-urbanist max-w-full  mt-0  shrink-0 w-[33.3333%] outline-none flex">
              <div className="box-border font-urbanist flex flex-col items-center w-full outline-none">
                <Image
                  src={ic2.src}
                  alt="Forex Illustration"
                  className="max-w-full h-auto"
                  width={100}  // Replace with the actual width of your image
                  height={100} // Replace with the actual height of your image
                />
                <p className="font-bold text-lg mb-4 leading-[1.75rem]">
                  24/7
                </p>
                <div className="text-sm text-gray-600 text-center leading-[1.25rem]">
                  <p className="mt-0 mb-0">
                    DEDICATED SUPPORT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
