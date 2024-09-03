import React from 'react'
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import funding from '../../../public/img/bg/slider3.png'

const Kaizenmarkets = () => {
    return (
        <section className="bg-[#F7F6FD] py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl font-Poppins text-gray-900 mb-8">
                            Why <span className="text-[#FE7501]">Choose</span> Our Funding Program?
                        </h2>

                        <div className='flex flex-col md:flex-row gap-8'>
                            <ul className="space-y-4 text-black text-sm w-full md:w-1/2">
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Personal Account Managers
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Free Access to Forex Market Research
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Free Access to Daily Forex Webinars
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Unlimited Access to Video Tutorials
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Daily Access to Forex Trading Signals
                                </li>
                               
                            </ul>
                            <ul className="space-y-4 text-black text-sm w-full md:w-1/2">
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Daily Technical Analysis
                                </li> <br/>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Daily Forex Market Outlook
                                </li> <br/>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Flexible Trading Conditions
                                </li> <br/>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    Competitive Spreads
                                </li> <br/>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    24/5 Hour Live Help
                                </li> <br/>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded">
                                    <CheckCircleIcon className="h-[19px] w-[19px] text-[#FE7501] mr-2" />
                                    16 Platforms to Choose
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={funding.src} alt="funding Program" width={400} height={300} className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Kaizenmarkets
