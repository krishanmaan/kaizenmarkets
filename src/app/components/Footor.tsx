import React from 'react';
import Image from 'next/image';
import logo from '../../../public/img/logo2.png'
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footor = () => {
    return (
        // <footer className="bg-[#F7F6FB]   font-Inter18 ">
        //     <div className="max-w-screen-xl mx-auto flex flex-col gap-8 text-black">
        //         

        //         <div className="flex flex-col md:flex-row lg:gap-16 gap-5 text-center lg:text-left  px-4 sm:px-6 lg:px-8">
        //             <div className="flex flex-col gap-4">
        //                 <p className="text-gray-950">Investments may exceed losses, seek advice, and consider risks before trading. Trading isn&apos;t suitable for all. Restricted in some regions.</p>
        //                 <div className='flex gap-2 text-2xl text-gray-950 justify-center md:justify-start'>
        //                     <FaFacebook className='hover:text-white hover:bg-green-600 hover:border-green-600 border-2 border-gray-950 p-1 rounded-md' />
        //                     <FaInstagram className='hover:text-white hover:bg-green-600 hover:border-green-600 border-2 border-gray-950 p-1 rounded-md' />
        //                     <FaTwitter className='hover:text-white hover:bg-green-600 hover:border-green-600 border-2 border-gray-950 p-1 rounded-md' />
        //                     <FaWhatsapp className='hover:text-white hover:bg-green-600 hover:border-green-600 border-2 border-gray-950 p-1 rounded-md' />
        //                 </div>
        //             </div>
        //             <div className="flex flex-col gap-4">
        //                 <ul className="text-black text-xs font-semibold">
        //                     <li className='mb-4'>✉️support@kaizenmarkets.com</li>
        //                     <li> 📌Ground Floor, Sotheby Building,<br /> Rodney Bay, Gros Islet, Saint Lucia</li>
        //                 </ul>
        //             </div>
        //             <div className="flex flex-col gap-4">
        //                 <ul className="text-black text-xs">
        //                     <li className='mb-4'><a href="about" className="hover:underline">About</a></li>
        //                     <li className='mb-4'><a href="whatisforex" className="hover:underline whitespace-nowrap">What is Forex</a></li>
        //                     <li className='mb-4'><a href="whatarecfds" className="hover:underline whitespace-nowrap">What are CFDs</a></li>
        //                     <li className='mb-4'><a href="#" className="hover:underline">Contact Us</a></li>
        //                 </ul>
        //             </div>
        //             <div className="flex flex-col gap-4">
        //                 <ul className="text-black text-xs">
        //                     <li className='mb-4'><a href="advantages" className="hover:underline ">Advantages</a></li>
        //                     <li className='mb-4'><a href="partnertypes" className="hover:underline whitespace-nowrap">Partner Types</a></li>
        //                     <li className='mb-4'><a href="partnertypes" className="hover:underline whitespace-nowrap">Partners Promotions</a></li>
        //                     <li className='mb-4'><a href="partnertypes" className="hover:underline whitespace-nowrap">Commission Structure</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     <nav className="bg-gray-100 pt-4 pb-4 border-t-2 border-b-2">
        //         <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4 lg:px-6">
        //             <div className="flex items-center space-x-2">
        //                 
        //             </div>
        //             <div className="flex space-x-8 text-black text-xs">
        //                 <a href="#" className="hover:text-gray-800">Privacy Policy</a>
        //                 <a href="#" className="hover:text-gray-800">Conflicts of Interest</a>
        //                 <a href="#" className="hover:text-gray-800">Risk Disclosures</a>
        //             </div>
        //             <div className="text-black text-xs">
        //                 © 2024 Kaizen Markets | All Rights Reserved.
        //             </div>
        //         </div>
        //     </nav>
        // </footer>

        <footer>
            <div className='pb-10 pt-10 bg-[#111827]'>
                <h1 className='text-4xl font-extrabold mb-2 font-Poppins text-center text-gray-100'>Instant account opening & funding</h1>
                <p className='text-2xl mb-4 font-Inter18  text-gray-300 px-4 text-center'>Trade within minutes!</p>
                <div className="flex justify-center items-center space-x-4 pt-4 ">
                    <a href="https://office.kaizenmarkets.com/">
                        <button className="text-gray-300 border border-gray-300 px-8 py-2 w-full rounded hover:bg-green-600 transition duration-200 hover:text-white">
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
            <div className="bg-gray-800 py-4 text-gray-400">
                <div className="container px-4 mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-between">
                        <div className="px-4 my-4 w-full xl:w-1/5">
                            <a href="/" className="block w-56 ">
                                <Image
                                    src={logo.src}
                                    alt="Logo"
                                    width={250}
                                    height={74}
                                />
                            </a>

                        </div>

                        <div className="px-4 my-4 w-full sm:w-auto">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[#FE7501] font-extrabold text-white">Useful Links</h2>
                            </div>
                            <ul className="leading-8 text-white">
                                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-400"> What is Forex</a></li>
                                <li><a href="#" className="hover:text-blue-400"> What are CFDs</a></li>
                                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="px-4 my-4 w-full sm:w-auto">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[#FE7501] font-extrabold text-white">Contact Us</h2>
                            </div>
                            <ul className="leading-8 text-white">
                                <li><a href="#" className="hover:text-blue-400"> support@kaizenmarkets.com</a></li>
                                <li><a href="#" className="hover:text-blue-400">Ground Floor, The Sotheby budling ,</a></li>
                                <li><a href="#" className="hover:text-blue-400">Rodney Bay, Gros islet, Saint Lucia, P.O.</a></li>
                                <li><a href="#" className="hover:text-blue-400">Box -838 Castries, Saint Lucia, LC-LC01401.</a></li>
                            </ul>
                        </div>
                        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[#FE7501] font-extrabold text-white">Connect With Us</h2>
                            </div>
                            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 text-white">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                            </a>
                            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 text-white">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                            </a>
                            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 text-white">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                            </a>


                        </div>
                    </div>
                    <p className="text-justify text-gray-200">
                        <span className='font-extrabold'> Risk statement :</span>  An investment in derivatives may mean investors may lose an amount even greater than their original investment. Anyone wishing to invest in any of the products mentioned in https://kaizenmarkets.com/ should seek their own financial or professional advice. Trading of securities, forex, stock market, commodities, options and futures may not be suitable for everyone and involves the risk of losing part or all of your money. Trading in the financial markets has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the markets. Don't invest and trade with money which you can't afford to lose. Forex Trading are not allowed in some countries, before investing your money, make sure whether your country is allowing this or not. Restricted Regions : Kaizen Markets Limited does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan. The services of Kaizen Markets Limited are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
                    </p>
                </div>
            </div>
            <div className="bg-[#FE7501] py-4 text-gray-100">
                <div className="container mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap justify-between">
                        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                            © 2024 Kaizen Markets | All Rights Reserved.

                        </div>
                        <div className="flex space-x-8 text-white text-xs">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Conflicts of Interest</a>
                            <a href="#" className="hover:text-white">Risk Disclosures</a>
                        </div>
                        {/* <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                            Made with ❤️ by Maan.
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footor;
