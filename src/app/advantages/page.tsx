import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import StartTradingPage from '../components/StartTradingPage';
import Footor from '../components/Footor';
import one from '../../../public/img/one.png';
import phone from '../../../public/img/crop-ios2.png';

interface PageProps { }

const Page: React.FC<PageProps> = () => {
  return (
    <div className="w-full ">
      <div className="bg-gradient-custom2 pt-24">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-xl mx-auto">
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
            <img
              src='https://firebasestorage.googleapis.com/v0/b/my-portfolio-1450c.appspot.com/o/img%2Fone.png?alt=media&token=ecf13fb1-bc10-4c3a-9143-ac8f24ca0a1a'
              alt="Forex Illustration"
              className="max-w-full h-auto"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-4 p-8">
        <div className="flex-1">
          <h1 className='font-Poppins text-3xl font-bold'>Download for Android Platform</h1>
          <p className='font-Inter18 text-sm p-2'>
            Our strong brand name and recognition combined with our excellent reputation as leaders in the world of Forex trading create a much higher conversion rate, enabling our partners to earn more income swiftly.
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div>
              <ul className="list-disc ml-5">
                <li>Weekly Payout</li>
                <li>No Payout limit</li>
                <li>Affiliate Tools</li>
                <li>Marketing Tools</li>
                <li>Hybrid and CPA Commissions plan</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-5">
                <li>Multi–tier up to 2 levels</li>
                <li>Dedicated Relationship Manager</li>
                <li>Free Education Video and Tutorials</li>
                <li>Monthly Contest</li>
                <li>24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image 
            src={phone.src} 
            alt="Download for Android Platform" 
            width={300} 
            height={300} 
            className="object-cover" 
          />
        </div>
      </div> */}
      <div className="max-w-screen-xl mx-auto flex bg-[#FEFEFE] p-10 flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Download for Android Platform</h2>
          <p className="text-gray-400 mb-8 text-justify">
            Our strong brand name and recognition combined with our excellent reputation as leaders in the world of Forex trading create a much higher conversion rate, enabling our partners to earn more income swiftly.
          </p>
          <h3 className="text-xs mb-4">Increased Trading Choices</h3>

          {/* List Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="space-y-2">
              {[
                'Weekly Payout',
                'No Payout Limit',
                'Affiliate Tools',
                'Marketing Tools',
                'Hybrid and CPA Commissions Plan',
                
              ].map((item, index) => (
                <div className="flex items-start text-xs" key={index}>
                  <div className="bg-[#FE7501] rounded-full w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
                    {index + 1  }
                  </div>
                  <p className="flex-1">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {[
                'Multi–tier upto 2 Levels',
                'Dedicated Relationship Manage',
                'Free Education Video and Tutorials',
                'Monthly Contest',
                '24/7 Support',
                
              ].map((item, index) => (
                <div className="flex items-start text-xs" key={index + 8}>
                  <div className="bg-[#FE7501] rounded-full w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
                    {index + 6}
                  </div>
                  <p className="flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <Image
            src={phone.src}
            alt="Trading Platforms"
            width={400}
            height={400}
            className="w-full max-w-sm"
          />
        </div>
      </div>

      <StartTradingPage />
      <Footor />
    </div>
  );
};

export default Page;
