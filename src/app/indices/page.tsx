import Navbar from '../components/Navbar';
import StartTradingPage from '../components/StartTradingPage';
import Footor from '../components/Footor';
import one from '../../../public/img/one.png';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="w-full text-justify">
      <div className="bg-gradient-custom2 pt-24 ">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-gray-900 text-3xl sm:text-4xl font-bold">Indices Market</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/" className="hover:underline">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>Indices Market</span>
            </nav>
          </div>
          <div className="mt-6 sm:mt-0">
            <Image
              src={one.src}
              alt="Forex Illustration"
              className="max-w-full h-auto"
              width={400}
              height={240}
              priority
            />
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-10 px-4 sm:px-6 flex flex-col gap-8 max-w-screen-lg mx-auto items-center justify-center">
        <div className="bg-gradient-to-r p-6 sm:p-10 from-gray-800 to-black w-full text-white text-left rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold pb-4  border-b border-gray-700">Indices Market</h1>
          <p className="font-light text-sm sm:text-base pt-4">
            Kaizen Markets offers one of the largest ranges of stock indices of any online broker. You can choose from a variety of different stock index CFDs, covering markets around the globe, and trade them right alongside your Forex trades. To trade indices, you do not need the services of traditional stock brokerage firms as was the case before the technological advances made in high-speed internet connections. Now you can buy an index or sell an index through online interactive brokers such as Kaizen Markets. Hence, market trading online has become increasingly popular, and retail investors buy indices or sell indices either as investment vehicles or hedging tools to mitigate their portfolio risks. <br /><br />
            The index tracks a basket of stocks that are used as indicators of a specialized segment of a stock exchange such as technology (NASDAQ) or are a general representation of the whole stock market, such as the S&P500.
            Open a trading account today and discover the advantage of stock indices CFDs trading with Kaizen Markets.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 gap-6 text-center">
          <div className="mb-12 pt-16">
            <h2 className="text-4xl sm:text-5xl font-Poppins mb-5  ">
              Advantages of Spot Trading with <br />
            </h2>
            <span className="text-yellow-500 text-4xl sm:text-5xl  font-Poppins font-extrabold  ">Kaizen Markets</span>
            <p className="mt-4 text-sm sm:text-base font-Inter18">
              Kaizen Markets allows all types of trading strategies including news trading. Kaizen Markets accounts are suitable for all types of traders, from novice traders to real Forex experts! If you are still new to Forex trading, we would suggest you open a Kaizen Markets Demo Account to master your trading skills. Our Demo account features benefits that the live account offers but bears no risk as the funds are virtual. Note that Kaizen Markets Account does not have an expiry date.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  text-white font-Poppins">
          <div className="p-6 sm:p-8 bg-[#FE7501] hover:bg-green-600 shadow-md rounded-lg flex flex-col justify-center items-center text-center   transition duration-200">
            <h3 className="text-lg font-semibold mb-2">S&P 500</h3>
            <p className="font-Inter18">The value of the Standard & Poor 500 is based on the share prices of 500 leading US-based companies.</p>
          </div>
          <div className="p-6 sm:p-8 bg-[#FE7501] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600  transition duration-200">
            <h3 className="text-lg font-semibold mb-2">NASDAQ 100</h3>
            <p className="font-Inter18">This index represents the value of 100 non-financial NASDAQ-traded companies.</p>
          </div>
          <div className="p-6 sm:p-8 bg-[#FE7501] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600  transition duration-200">
            <h3 className="text-lg font-semibold mb-2">FTSE 100</h3>
            <p className="font-Inter18">The FTSE 100 is a collection of 100 of the largest publicly traded UK companies.</p>
          </div>
          <div className="p-6 sm:p-8 bg-[#FE7501] shadow-md rounded-lg flex flex-col justify-center items-center text-center hover:bg-green-600  transition duration-200">
            <h3 className="text-lg font-semibold mb-2">DJ EURO STOXX 50</h3>
            <p className="font-Inter18">Euro Stoxx 50 collects together 50 of the largest European companies’ share value.</p>
          </div>
        </div>
      </div>
      <StartTradingPage />
      <Footor />
    </div>
  );
};

export default Page;
