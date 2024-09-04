"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import slider1 from '../../../public/img/bg/slider1.jpg';
import slider2 from '../../../public/img/bg/slider2.jpg';
import slider3 from '../../../public/img/bg/slider3.jpg';
import ic1 from '../../../public/img/icon/Register.png';
import ic2 from '../../../public/img/icon/add fund.png';
import ic3 from '../../../public/img/icon/doller.png';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slider1,
      heading: 'Trade Smarter With Kaizen Markets',
      description: 'Unlock smarter Forex trading strategies with Kaizen Markets for optimal results.',
    },
    {
      image: slider2,
      heading: 'Fastest way to Investing & Trading In Forex',
      description: 'Experience rapid Forex trading and investing with the fastest platform available.',
    },
    {
      image: slider3,
      heading: 'Join the Forex Revolution',
      description: 'Be part of the Forex revolution—innovative trading solutions await you.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-custom">
        <Navbar />
        <div className="relative w-full h-[300px] overflow-hidden">
          {/* Background Slider */}
          <div className="absolute inset-0">
            <div
              className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="inline-block w-full h-[300px] relative"
                >
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content on Top of Slider */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-2xl font-bold text-white font-Poppins">
                  {slides[currentSlide].heading}
                </h1>
                <p className="text-xs text-gray-200 mb-6 font-Inter18">
                  {slides[currentSlide].description}
                </p>
                <a href="https://office.kaizenmarkets.com/trader/registration">
                  <button className="bg-[#FE7501] font-Poppins border-2 hover:border-black border-[#FE7501] text-white px-4 py-2 hover:bg-purple-600 transition duration-200">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Left and Right Buttons */}
          <button
            className="absolute left-4  top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={handlePrevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={handleNextSlide}
          >
            &gt;
          </button>
        </div>

        {/* "How Will it Work?" Section */}
        <div className="box-border font-urbanist mx-auto w-full outline-none max-w-[1480px] text-[14px]/[22.4px]">
          <div className="box-border font-urbanist text-center outline-none">
            <h3 className="mb-8 font-bold mt-0 font-urbanist leading-[1.2] text-[calc(1.425rem+2.1vw)]">
              How Will it Work?
            </h3>
          </div>
          <div className="box-border font-urbanist flex flex-wrap mt-[-0] outline-none">
            <div className="box-border font-urbanist max-w-full mt-0 shrink-0 w-[33.3333%] outline-none flex">
              <div className="box-border font-urbanist flex flex-col items-center w-full outline-none">
                <Image
                  src={ic1.src}
                  alt="Forex Illustration"
                  className="max-w-full h-auto"
                  width={100}
                  height={100}
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
            <div className="box-border font-urbanist max-w-full mt-0 shrink-0 w-[33.3333%] outline-none flex">
              <div className="box-border font-urbanist flex flex-col items-center w-full outline-none">
                <Image
                  src={ic3.src}
                  alt="Forex Illustration"
                  className="max-w-full h-auto"
                  width={100}
                  height={100}
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
            <div className="box-border font-urbanist max-w-full mt-0 shrink-0 w-[33.3333%] outline-none flex">
              <div className="box-border font-urbanist flex flex-col items-center w-full outline-none">
                <Image
                  src={ic2.src}
                  alt="Forex Illustration"
                  className="max-w-full h-auto"
                  width={100}
                  height={100}
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
};

export default Hero;
