import Navbar from '../components/Navbar';
import StartTradingPage from '../components/StartTradingPage';
import Footor from '../components/Footor';
import one from '../../../public/img/one.png';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-custom2">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-gray-900 text-3xl sm:text-4xl font-bold">Metals Market</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/" className="hover:underline">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>Metals Market</span>
            </nav>
          </div>
          <div className="mt-6 sm:mt-0">
            <Image
              src={one.src}
              alt="Forex Illustration"
              className="max-w-full h-auto"
              width={500}  // Image width
              height={300} // Image height
              priority
            />
          </div>
        </div>
        <div className="py-8 sm:py-10 px-4 sm:px-6 flex flex-col gap-8 max-w-screen-lg mx-auto items-center justify-center">
          <div className="bg-gradient-to-r p-6 sm:p-10 from-gray-800 to-black w-full text-white text-left rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h1 className="text-2xl sm:text-3xl font-bold pb-4 border-b border-gray-700">Metals Market</h1>
            <p className="font-light text-sm sm:text-base pt-4">
              The price of gold and silver is controlled by the powers of demand and supply; investors choose to buy these precious metals for a number of reasons and most of all in order to diversify their assets and to rush to quality in the time of economic recession and other financial crisis. Precious metals have endured the ability to sustain their worth over time when a national currency might be losing its value. Gold is generally viewed to be a commodity that objectively reflects overall market changes and the stability of the financial world. <br /> <br />

              IMF, Central banks, and other governmental organizations have a significant role in influencing the price of gold as they hold about 19% of the world’s gold reserves. Fund managers, wholesale dealers, private investors, and speculators constitute the rest of the market players. <br /> <br />

              Trading in spot metals has become in high demand recently due to various factors such as market volatility which is caused by real-time news and events, both financial and economic factors which are still the strongest influences affecting commodity trading. <br /> <br />

              Spot gold (XAU) and spot silver (XAG) are tradable commodities offered by Kaizen Markets on all our platforms. As with Forex trading, investors take short or long positions of the metals’ prices. Kindly note that spot trading is accessible 23 hours. <br /> <br />

              Kaizen Markets offers CFDs on spot metals in USD only.
            </p>
          </div>
        </div>
      </div>
      <StartTradingPage />
      <Footor />
    </div>
  );
};

export default Page;
