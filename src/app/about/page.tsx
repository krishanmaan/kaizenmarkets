import React from 'react';
import Navbar from '../components/Navbar';
import Footor from '../components/Footor';
import StartTradingPage from '../components/StartTradingPage';

const AboutPage: React.FC = () => {
  return (
    <>

      <Navbar />
      <div className="bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-white bg-gray-800 font-Inter18 p-8 rounded-lg shadow-lg mb-12 max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-Poppins">ABOUT</h1>
          <p className="text-lg mb-4">
            Kaizen Markets has a reputation as being one of the premier partnership platforms in the industry. For over 10 years, partners have worked with Kaizen Markets and formed long standing relationships. These relationships have been a central part to the success of our partners and of Kaizen Markets.
          </p>
          <p className="text-lg mb-4">
            With a Passion to provide high-quality financial brokerage service, Kaizen Markets was established to cater the trading software and best trading environment. The long-run vision and deep client understanding are valued to be the highest strength at Kaizen Markets. Our team of industry experts starves to provide their valuable service for individuals and corporate to trade better in Forex, CFD, Commodity and the International stock market.
          </p>
          <p className="text-lg">
            At Kaizen Markets, we follow industry best-practice and maintain high standards of governance, compliance, and consistency, and we take extreme measures to ensure the protection of our clients and the safety of their funds, through multiple regulations and segregation of clients’ funds with highly rated and secured financial institutions.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-100 mb-8 max-w-screen-lg mx-auto">Why Partner With Kaizen Markets?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-screen-lg mx-auto">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
            <p>Award winning partner centre</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">High Payouts</h3>
            <p>Maximise your revenue</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Multi Lingual Support</h3>
            <p>We speak your language</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Marketing Materials</h3>
            <p>Maximise your traffic conversion</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Relationship Manager</h3>
            <p>On hand, all the time, for anything</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Fast Payouts</h3>
            <p>Time is money</p>
          </div>
        </div>
      </div>

      <StartTradingPage />
      <Footor />
    </>
  );
};

export default AboutPage;
