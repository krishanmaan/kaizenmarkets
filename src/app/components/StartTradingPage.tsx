import React from 'react';
import footerban from '../../../public/img/bg/footer-ban.png'
import { FaUserPlus, FaPiggyBank, FaChartLine } from 'react-icons/fa';
import ic1 from '../../../public/img/icon/Register.png';
import ic2 from '../../../public/img/icon/add fund.png';
import ic3 from '../../../public/img/icon/doller.png';
import Image from 'next/image'

const StartTradingPage: React.FC = () => {
    return (
        <div className="bg-cover bg-center bg-[#202938] pt-20 pb-20  flex flex-col items-center justify-center"
        // style={{
        //     backgroundImage: `url(${footerban.src})`, 

        // }}
        >
            <div className="text-center text-white max-w-screen-xl ">
                <h1 className="text-4xl font-extrabold mb-2 font-Poppins ">Start Trading in Simple Steps</h1>
                <p className="text-lg mb-4 font-Inter18  text-gray-300 px-4">Register now a free account and you can start trading today!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-6 gap-2 mb-4 max-w-screen-xl mx-auto">
                <div className="bg-[#111827] text-white p-6 shadow-lg text-center hover:bg-green-600 transition duration-200 rounded-lg flex flex-col items-center border">
                    <img
                        src={ic1.src}
                        alt="Forex Illustration"
                        className="max-w-full h-auto  mb-4"
                        width={100}  // Replace with the actual width of your image
                        height={100} // Replace with the actual height of your image
                    />
                    <h3 className="text-xl font-Poppins mb-2">REGISTER ACCOUNT</h3>
                    <p className='font-Inter18 text-sm text-gray-300'>Fill in your information on the account registration form.</p>
                </div>

                <div className="bg-[#111827] text-white p-6 shadow-lg text-center hover:bg-green-600 transition duration-200 rounded-lg flex flex-col items-center border">
                    <img
                        src={ic2.src}
                        alt="Forex Illustration"
                        className="max-w-full h-auto  mb-4"
                        width={100}  // Replace with the actual width of your image
                        height={100} // Replace with the actual height of your image
                    />
                    <h3 className="text-xl font-Poppins mb-2">FUND YOUR ACCOUNT</h3>
                    <p className='font-Inter18 text-sm text-gray-300'>Fund your trading account with any of the deposit method.</p>
                </div>

                <div className="bg-[#111827] text-white p-6 shadow-lg text-center hover:bg-green-600 transition duration-200 rounded-lg flex flex-col items-center border">
                    <img
                        src={ic3.src}
                        alt="Forex Illustration"
                        className="max-w-full h-auto  mb-4"
                        width={100}  // Replace with the actual width of your image
                        height={100} // Replace with the actual height of your image
                    />
                    <h3 className="text-xl font-Poppins mb-2 ">START TRADING</h3>
                    <p className='font-Inter18 text-sm text-gray-300'>You&apos;re ready to trade the world&apos;s biggest capital market.</p>
                </div>
            </div>


            <div className="flex p-4 gap-4 max-w-screen-xl -mb-6">
                <a href="https://office.kaizenmarkets.com/">
                    <button className="bg-[#FE7501] text-white py-2 px-6  font-semibold hover:bg-green-600 transition duration-300">Open Live Account</button>
                </a>
                <a href="https://office.kaizenmarkets.com/trader/registration">
                    <button className=" text-white py-2 px-6  font-semibold hover:bg-green-600  hover:text-white transition duration-300 border ">Open Demo Account</button>
                </a>
            </div>
        </div>

    );
};

export default StartTradingPage;
