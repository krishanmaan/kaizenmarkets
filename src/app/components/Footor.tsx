import React from 'react';
import Image from 'next/image';
import logo from '../../../public/img/logo2.png'
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footor = () => {
    return (
        <footer className="bg-[#F7F6FB] py-8 pt-16 font-Inter18 ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 text-black">
                <div className='pb-10'>
                    <h1 className='text-4xl font-extrabold mb-2 font-Poppins text-center'>Instant account opening & funding</h1>
                    <p className='text-2xl mb-4 font-Inter18  text-gray-900 px-4 text-center'>Trade within minutes!</p>
                    <div className="flex justify-center items-center space-x-4 pt-4">
                        <a href="https://office.kaizenmarkets.com/">
                            <button className="text-gray-700 border border-black px-8 py-2 w-full rounded hover:bg-green-600 transition duration-200 hover:text-white">
                                Get Started
                            </button>
                        </a>
                        <a href="https://office.kaizenmarkets.com/trader/registration">
                            <button className="bg-[#FE7501] text-white px-8 py-2 w-full hover:bg-green-600 transition duration-200 border border-black rounded">
                                Try a Free Demo
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row lg:gap-16 gap-5 text-center lg:text-left">
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-950">Investments may exceed losses, seek advice, and consider risks before trading. Trading isn&apos;t suitable for all. Restricted in some regions.</p>
                        <div className='flex gap-2 text-2xl text-gray-950 justify-center md:justify-start'>
                            <FaFacebook className='hover:text-white hover:bg-green-600 hover:border-green-600 border-2 border-gray-950 p-1 rounded-md' />
                            <FaInstagram className='hover:text-white hover:bg-green-600 hover:border-green-600 border-2 border-gray-950 p-1 rounded-md' />
                            <FaTwitter className='hover:text-white hover:bg-green-600 hover:border-green-600 border-2 border-gray-950 p-1 rounded-md' />
                            <FaWhatsapp className='hover:text-white hover:bg-green-600 hover:border-green-600 border-2 border-gray-950 p-1 rounded-md' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <ul className="text-black text-xs font-semibold">
                            <li className='mb-4'>support@kaizenmarkets.com</li>
                            <li>Ground Floor, Sotheby Building,<br /> Rodney Bay, Gros Islet, Saint Lucia</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <ul className="text-black text-xs">
                            <li className='mb-4'><a href="about" className="hover:underline">About</a></li>
                            <li className='mb-4'><a href="whatisforex" className="hover:underline whitespace-nowrap">What is Forex</a></li>
                            <li className='mb-4'><a href="whatarecfds" className="hover:underline whitespace-nowrap">What are CFDs</a></li>
                            <li className='mb-4'><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <ul className="text-black text-xs">
                            <li className='mb-4'><a href="advantages" className="hover:underline ">Advantages</a></li>
                            <li className='mb-4'><a href="partnertypes" className="hover:underline whitespace-nowrap">Partner Types</a></li>
                            <li className='mb-4'><a href="partnertypes" className="hover:underline whitespace-nowrap">Partners Promotions</a></li>
                            <li className='mb-4'><a href="partnertypes" className="hover:underline whitespace-nowrap">Commission Structure</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="bg-gray-100 pt-4 pb-4 border-t-2 border-b-2">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4 lg:px-6">
                    <div className="flex items-center space-x-2">
                        <Image
                            src={logo.src}
                            alt="Logo"
                            width={192}
                            height={64}
                        />
                    </div>
                    <div className="flex space-x-8 text-black text-xs">
                        <a href="#" className="hover:text-gray-800">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-800">Conflicts of Interest</a>
                        <a href="#" className="hover:text-gray-800">Risk Disclosures</a>
                    </div>
                    <div className="text-black text-xs">
                        © 2024 Kaizen Markets | All Rights Reserved.
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footor;
