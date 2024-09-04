"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import slider1 from "../../../public/img/bg/slider1.jpg";
import slider2 from "../../../public/img/bg/slider2.jpg";
import slider3 from "../../../public/img/bg/slider3.jpg";
import ic1 from "../../../public/img/icon/Register.png";
import ic2 from "../../../public/img/icon/add fund.png";
import ic3 from "../../../public/img/icon/doller.png";

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
      <section className="relative bg-gradient-custom  ">
        
        <Navbar  />
        <div className="relative w-full h-[600px] overflow-hidden flex justify-center items-center ">
          {/* Background Slider */}
          <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-[600px] relative flex-shrink-0">
                <Image src={slide.image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>

          {/* Content on Top of Slider */}
          <div className="absolute inset-0 flex items-center pl-28">
            <div className=" text-white">
              <h1 className="text-4xl font-bold">{slides[currentSlide].heading}</h1>
              <p className="text-lg text-gray-200 mb-4 mt-2">{slides[currentSlide].description}</p>
              <a href="https://office.kaizenmarkets.com/trader/registration">
                <button className="bg-[#FE7501] border-2 border-[#FE7501] text-white px-4 py-2 hover:bg-purple-600 transition duration-200">
                  Get Started
                </button>
              </a>
            </div>
          </div>

          {/* Left and Right Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
            onClick={handlePrevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
            onClick={handleNextSlide}
          >
            &gt;
          </button>
        </div>

        {/* "How Will it Work?" Section */}
        <div className="box-border font-urbanist mx-auto w-full outline-none max-w-[1480px] text-[14px]/[22.4px] mt-10">
          <div className="box-border font-urbanist text-center outline-none">
            <h3 className="mb-8 font-bold mt-0 font-urbanist leading-[1.2] text-[calc(1.425rem+2.1vw)]">
              How Will it Work?
            </h3>
          </div>
          <div className="box-border font-urbanist flex flex-wrap mt-[-0] outline-none">
            <div className="box-border font-urbanist max-w-full mt-0 shrink-0 w-[33.3333%] outline-none flex">
              <div className="box-border font-urbanist flex flex-col items-center w-full outline-none">
              <FaLaptop  className="h-24 w-24 text-[#FE7501]"/>
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
              <AiFillDollarCircle  className="h-24 w-24 text-[#FE7501]"/>
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
              <MdOutlineSupportAgent className="h-24 w-24 text-[#FE7501]"/>
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
