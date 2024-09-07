import Navbar from '../components/Navbar';
import StartTradingPage from '../components/StartTradingPage';
import Footor from '../components/Footor';
import one from '../../../public/img/one.png';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="w-full text-justify">
      <div className="bg-gradient-custom2 pt-24">
        <Navbar />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-gray-900 text-4xl font-bold">CFD Market</h1>
            <nav className="text-gray-600 mt-4">
              <a href="/" className="hover:underline">
                <span>Home</span>
              </a>
              <span className="mx-2">/</span> <span>CFD Market</span>
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

        <div className="py-10 px-4 sm:px-6 flex flex-col gap-8 max-w-screen-lg mx-auto items-center justify-center">
          <div className="bg-gradient-to-r p-6 sm:p-10 from-gray-800 to-black w-full text-white text-left rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h1 className="text-2xl sm:text-3xl font-bold pb-4 border-b border-gray-700">CFD Market</h1>
            <p className="font-light text-sm sm:text-base pt-4">
              CFDs or Contracts for Difference, is a mutual agreement between the buyer and the seller which implies that in future both parties will exchange the difference between the opening value and the closing value of shares contracted through cash payments, rather than the delivery of the physical securities. CFD concept was first commenced in 1990 and primarily used by hedge-funds and institutional investors to hedge their exposure to stocks and purpose of tax exemption. Today, investors have realized that the real advantage of CFD is its ability to trade on leverage on any underlying instrument. Kaizen Markets offers its clients a convenient way to speculate on CFDs, with high leverage through our advanced platforms. <br /><br />
              At Kaizen Markets we offer you a variety of CFD instruments available through our state-of-the-art MT5 trading platform.
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
