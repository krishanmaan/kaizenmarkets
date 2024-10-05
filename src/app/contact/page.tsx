import React from 'react';
import Navbar from '../components/Navbar';
import StartTradingPage from '../components/StartTradingPage';
import Footor from '../components/Footor';
import Image from 'next/image';
import one from '../../../public/img/one.png';

const Page = () => {
    return (
        <div className="w-full text-justify">
            <div className="bg-gradient-custom2 py-24">
                <Navbar />

                {/* Header Section */}
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
                    <div>
                        <h1 className="text-gray-900 text-3xl sm:text-4xl font-bold">Contact</h1>
                        <nav className="text-gray-600 mt-4">
                            <a href="/" className="hover:underline">
                                <span>Home</span>
                            </a>
                            <span className="mx-2">/</span> <span>Contact Us</span>
                        </nav>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <img
                            src={one.src}
                            alt="Forex Illustration"
                            className="max-w-full h-auto"
                            width={400}
                            height={240}
                        
                            
                        />
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="py-10 px-4 sm:px-6 gap-8 max-w-screen-lg mx-auto items-center justify-center lg:flex ">
                    <div className="bg-gradient-to-r p-6 sm:p-10 from-gray-800 to-black w-full text-white text-left rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex-1 min-h-[200px] mb-4">
                        <h1 className="text-2xl sm:text-3xl font-bold pb-4 border-b border-gray-700">Our Address</h1>
                        <p className="font-light text-sm sm:text-base pt-4">
                            Ground Floor, The Sotheby Building, Rodney Bay, Gros Islet, SAINT LUCIA, P.O. BOX -838 CASTRIES, SAINT LUCIA, LC-LC01401.
                        </p>
                    </div>
                    <div className="bg-gradient-to-r p-6 sm:p-10 from-gray-800 to-black w-full text-white text-left rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex-1 min-h-[200px]">
                        <h1 className="text-2xl sm:text-3xl font-bold pb-4 border-b border-gray-700">Email Us</h1>
                        <p className="font-light text-sm sm:text-base pt-4">
                            support@kaizenmarkets.com
                        </p>
                    </div>
                </div>


                {/* Responsive Google Map */}
                <div className="w-full px-4 sm:px-6 max-w-screen-lg mx-auto mt-8">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26242330.059002984!2d-91.400025!3d36.592447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1725687258875!5m2!1sen!2sin"
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            style={{ border: 0 }}

                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Other Components */}
            <StartTradingPage />
            <Footor />
        </div>
    );
};

export default Page;
