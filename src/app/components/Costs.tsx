import React from 'react'
import Image from 'next/image'
import money from '../../../public/img/moneybag.png'


const Costs = () => {
    return (
        <section className="  flex items-center justify-center bg-[#202938] lg:mt-24 lg:mb-10 ">
            <div className='max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-'>
                <div className="flex justify-center">
                    <Image
                        src={money.src}
                        alt="money"
                        width={500}
                        height={500}
                        className="max-w-full w-[500px]"
                    />
                </div>
                <div className="px-4 lg:py-40 sm:px-6 pb-10 ">
                    <h2 className="text-4xl font-bold text-gray-100 mb-4 font-Inter18">Trade With Even  <samp className='text-[#FE7501]'>Lower</samp> Costs</h2>
                    <p className=" text-gray-200 mb-6 font-Inter18">With our RAW ECN account, traders can experience some of the lowest trading costs in the industry. We fully understand the importance of keeping trading costs to a minimum, so you can realize greater profit.</p>
                    <a href="https://office.kaizenmarkets.com/">
                        <button className="bg-[#FE7501] text-white px-6 text-sm py-3  rounded-lg  hover:bg-green-600 transition duration-200 font-Poppins ">Open Live Account</button>

                    </a>
                </div>
            </div>
        </section>
    )
}

export default Costs
