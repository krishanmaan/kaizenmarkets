import React from 'react'
import Image from 'next/image'
import certificate from '../../../public/img/bg/Certificate.jpg'
const Certificate = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {/* <h1 className="text-center text-4xl text-yellow-500 font-Inter18 font-extrabold mt-10 mb-10">Certificate</h1> */}
      <Image
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
