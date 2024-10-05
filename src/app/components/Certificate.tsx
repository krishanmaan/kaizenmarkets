import React from 'react'
import Image from 'next/image'
import certificate from '../../../public/img/bg/Certificate.jpg'
const Certificate = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-extrabold  mt-10 font-Poppins">Certificate</h1>
      <img
        src={certificate.src}
        alt="Forex Illustration"
        className="max-w-full h-auto mb-4"
        width={1000} 
        height={100}  
      />
    </div>

  )
}

export default Certificate
