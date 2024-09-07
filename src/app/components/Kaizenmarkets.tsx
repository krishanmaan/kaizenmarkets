import React from 'react';
import Image from 'next/image';
import antenna from '../../../public/img/icon/New folder/antenna.png';
import calendar from '../../../public/img/icon/New folder/calendar.png';
import chart from '../../../public/img/icon/New folder/chart.png';
import employee from '../../../public/img/icon/New folder/employee.png';
import pieChart from '../../../public/img/icon/New folder/pie-chart.png';
import responsive from '../../../public/img/icon/New folder/responsive.png';
import support from '../../../public/img/icon/New folder/support.png';
import videoPlayer from '../../../public/img/icon/New folder/video-player.png';
import videoTutorial from '../../../public/img/icon/New folder/video-tutorial.png';

const Kaizenmarkets: React.FC = () => {
    return (
        <section className="bg-[#F7F6FD] py-16 mb-10">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="gap-8 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-Inter18 text-center">
                            Why <span className="text-[#FE7501]">Choose</span> Our Funding Program?
                        </h2>

                        <div>
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-1 text-black text-sm w-full pt-12">
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={employee.src} alt="Personal Account Managers" width={50} height={50} />
                                    <span className="ml-2 text-center">Personal Account Managers</span>
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={chart.src} alt="Forex Market Research" width={50} height={50} />
                                    <span className="ml-2 text-center">Free Access to Forex Market Research</span>
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={videoTutorial.src} alt="Daily Forex Webinars" width={50} height={50} />
                                    <span className="ml-2 text-center">Free Access to Daily Forex Webinars</span>
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={videoPlayer.src} alt="Unlimited Video Tutorials" width={50} height={50} />
                                    <span className="ml-2 text-center">Unlimited Access to Video Tutorials</span>
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={antenna.src} alt="Forex Trading Signals" width={50} height={50} />
                                    <span className="ml-2 text-center">Daily Access to Forex Trading Signals</span>
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={pieChart.src} alt="Daily Technical Analysis" width={50} height={50} />
                                    <span className="ml-2 text-center">Daily Technical Analysis</span>
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={calendar.src} alt="Forex Market Outlook" width={50} height={50} />
                                    <span className="ml-2 text-center">Daily Forex Market Outlook</span>
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={responsive.src} alt="Platforms to Choose" width={50} height={50} />
                                    <span className="ml-2 text-center">16 Platforms to Choose From. Any Device, Anywhere</span>
                                </li>
                                <li className="inline-flex bg-[#FFFFFF] p-2 rounded-lg  items-center hover:bg-green-600 hover:text-white">
                                    <Image src={support.src} alt="24/5 Live Help" width={50} height={50} />
                                    <span className="ml-2 text-center">24/5 Hour Live Help</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Kaizenmarkets;
