"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import slider1 from "../../../public/img/bg/slider1.jpg";
import slider2 from "../../../public/img/bg/slider2.jpg";
import slider3 from "../../../public/img/bg/slider3.jpg";
import slider4 from "../../../public/img/bg/slider4.jpg";
import { FaLaptop } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slider1,
      heading: "Trade Smarter With Kaizen Markets",
      description: "Unlock smarter Forex trading strategies with Kaizen Markets for optimal results.",
    },
    {
      image: slider2,
      heading: "Fastest way to Investing & Trading In Forex",
      description: "Experience rapid Forex trading and investing with the fastest platform available.",
    },
    {
      image: slider3,
      heading: "Join the Forex Revolution",
      description: "Be part of the Forex revolution—innovative trading solutions await you.",
    },
    {
      image: slider4,
      heading: "Love at First Trade",
      description: "instant connection, sharp insights, and smart trades. Experience love at first trade!",
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

        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden flex justify-center items-center">
          {/* Background Slider */}
          <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full relative flex-shrink-0">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  style={{ opacity: 0.9 }} 
                />
              </div>
            ))}
          </div>


          {/* Content on Top of Slider */}
          <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-28 mt-20 lg:mt-0">
            <div className="text-white text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{slides[currentSlide].heading}</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 mt-2">{slides[currentSlide].description}</p>
              <a href="https://office.kaizenmarkets.com/trader/registration">
                <button className="bg-[#FE7501] border-2 border-[#FE7501] text-white px-4 py-2 hover:bg-green-600 transition duration-200">
                  Get Started
                </button>
              </a>
            </div>
          </div>

          {/* Left and Right Buttons */}
          <button
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
            onClick={handlePrevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
            onClick={handleNextSlide}
          >
            &gt;
          </button>
        </div>

        {/* "How Will it Work?" Section */}
        <div className="box-border font-urbanist mx-auto w-full outline-none max-w-[1480px] text-[14px]/[22.4px] mt-14">
          <div className="text-center">
            <h3 className="mb-8 font-bold mt-0 text-[calc(1.425rem+2.1vw)]">
              How Will it Work?
            </h3>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
              <div className="flex flex-col items-center">
                <FaLaptop className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-[#FE7501]" />
                <p className="font-bold text-lg mb-4 leading-[1.75rem]">
                  1:500
                </p>
                <p className="text-sm text-gray-600 text-center leading-[1.25rem] -mt-2 mb-6 ">
                  LEVERAGE UP TO
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
              <div className="flex flex-col items-center">
                <AiFillDollarCircle className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-[#FE7501]" />
                <p className="font-bold text-lg mb-4 leading-[1.75rem]">
                  $50
                </p>
                <p className="text-sm text-gray-600 text-center leading-[1.25rem] -mt-2 mb-6">
                  MINIMUM DEPOSIT
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
              <div className="flex flex-col items-center">
                <MdOutlineSupportAgent className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-[#FE7501]" />
                <p className="font-bold text-lg mb-4 leading-[1.75rem]">
                  24/7
                </p>
                <p className="text-sm text-gray-600 text-center leading-[1.25rem] -mt-2 mb-6">
                  DEDICATED SUPPORT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
