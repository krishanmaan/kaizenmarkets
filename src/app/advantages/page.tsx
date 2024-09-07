import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import StartTradingPage from '../components/StartTradingPage';
import Footor from '../components/Footor';
import one from '../../../public/img/one.png';
import phone from '../../../public/img/crop-ios2.png';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div className="w-full text-justify">
      <div className="bg-gradient-custom2 pt-24">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-gray-900 text-4xl font-bold">Advantages</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>Advantages</span>
            </nav>
          </div>
          <div>
            <Image
              src={one.src}
              alt="Forex Illustration"
              className="max-w-full h-auto"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-4 p-8">
        <div className="flex-1">
          <h1 className='font-Poppins text-3xl font-bold'>Download for Android Platform</h1>
          <p className='font-Inter18 text-sm p-2'>Our strong brand name and recognition combined with our excellent reputation as leaders in the world of Forex trading create a much higher conversion rate, enabling our partners to earn more income swiftly.</p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div>
              <ul>
                <li>Weekly Payout</li>
                <li>No Payout limit</li>
                <li>Affiliate Tools</li>
                <li>Marketing Tools</li>
                <li>Hybrid and CPA Commissions plan</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Multi–tier upto 2 levels</li>
                <li>Dedicated Relationship Manage</li>
                <li>Free Education Video and Tutorials</li>
                <li>Monthly Contest</li>
                <li>24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src={phone.src} alt="Download for Android Platform" width={300} height={300} className="object-cover" />
        </div>
      </div>
      <StartTradingPage />
      <Footor />
    </div>
  );
};

export default Page;
