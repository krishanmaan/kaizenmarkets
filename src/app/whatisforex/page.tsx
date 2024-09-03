import Costs from "../components/Costs";
import Footor from "../components/Footor";
import Navbar from "../components/Navbar";
import StartTradingPage from "../components/StartTradingPage";
import one from '../../../public/img/one.png'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="bg-gradient-custom2">
          <Navbar />
          <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto p-6 md:p-10">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-gray-900 text-4xl font-bold">What is Forex</h1>
              <nav className="text-gray-600 mt-4">
                <a href="/">
                  <span>Home</span>
                </a>
                <span className="mx-2">/</span> <span>What is Forex</span>
              </nav>
            </div>
            <div className="flex justify-center">
              <Image
                src={one.src}
                alt="Forex Illustration"
                className="max-w-full h-auto rounded-lg"
                width={500}
                height={300}
              />
            </div>
          </div>

          <div className="py-20 px-6 flex flex-col md:flex-row gap-10 max-w-screen-xl mx-auto items-center justify-center">
            <div className="bg-gradient-to-r from-gray-800 to-black w-full md:w-96 text-white text-left p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h1 className="text-3xl font-bold pb-6 border-b border-gray-700">WHAT IS FOREIGN EXCHANGE?</h1>
              <p className="font-light text-sm pt-4">
                Foreign exchange, more commonly known as Forex or FX, relates to buying and selling currencies with the purpose of making profit off the changes in their value. As the biggest market in the world by far, larger than the stock market or any other, there is high liquidity in the forex market. Therefore, the forex market attracts many traders, beginners and experienced alike.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-black w-full md:w-96 text-white text-left p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h1 className="text-3xl font-bold pb-6 border-b border-gray-700">WHAT IS FOREX MARKET?</h1>
              <p className="font-light text-sm pt-4">
                With approximately $4 trillion USD traded in the market every day, the forex market has the highest liquidity in the world. Basically, this means that one can buy almost any currency he wishes in high volumes while the market is open. The forex market is open 24 hours, 5 days a week – Monday to Friday. Trading begins with the opening of the market in Australia, Asia, Europe to follow and then the USA until the markets close.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col md:flex-row gap-20 max-w-screen-xl mx-auto items-center bg-gray-900 text-white">
          <div className="text-left w-full md:w-1/2 font-Poppins">
            <h1 className="text-4xl font-bold mb-4">Currency Pairs</h1>
            <p className="mt-4 text-xs font-Inter18">
              There are hundreds of currencies in the world, and each has a three letter symbol. American Dollars are USD, Euros are EUR, Swiss Francs are CHF, British Pounds are GBP and onwards to all the currencies.
            </p>
            <p className="mt-2 text-xs font-Inter18">
              Currencies are divided into two main sorts – Major currencies and minor ones. The major currencies are derived from the most powerful economies around the globe – the US, Japan, the UK, the Euro Zone, Canada, Australia, Switzerland and New Zealand. Together with the other currencies they create forex pairs.
            </p>
            <p className="mt-2 text-xs font-Inter18">
              When going to a store to buy groceries, we need to exchange one valuable asset for another – money for milk, for example. The same goes for trading forex – we buy or sell one currency for the other. The currencies in the pairs are referred to as one against another.
            </p>
            <p className="mt-2 text-xs font-Inter18">
              There are three types of forex pairs: Major pairs, Minor pairs, and Exotic pairs. The major pairs always involve the USD, and are the most traded ones. The seven major pairs are EURUSD, USDJPY, GBPUSD, USDCAD, USDCHF, AUDUSD, and NZDUSD. In the minor pairs, the major currencies are traded between each other, excluding the USD. These can be EURGBP, GBPJPY, and others. The exotic pairs have one major currency and one minor, such as EURTRY, USDNOK, and many more.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              src="https://s.tradingview.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3A%false%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22465%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%7D%2C%7B%22s%22%3A%22FX%3ANZDUSD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%5D%2C%22utm_source%22%3A%225.189.170.190%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%7D"
              className="box-border h-[465px] w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <Costs />

        <div className="bg-black text-white p-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Forex Trading Basic Terms</h2>
          <p className="mb-4">
            The most popular pair traded is the Euro vs. the American Dollar, or EURUSD. The currency on the left is called the base currency, and is the one we wish to buy or sell; the one on the right is the secondary currency, and is the one we use to make the transaction. Each pair has two prices — the price for selling the base currency (ask) and a price for buying it (bid). The difference between them is called a spread, and represents the amount brokers charge to open the position. The more a currency is traded, i.e. high liquidity, its spreads will be narrower. The rarer the pair is, the wider the spreads will be, since lower liquidity usually entails increased volatility. The increased risk — consequently — entails a wider spread.
          </p>
          <p className="mb-4">
            Usually a quote will be presented with four numbers after the dot, for instance 1.2358. In the case of EURUSD it means for every Euro the trader wishes to buy he will have to invest 1.2358 US dollars. Any change in the currency value will usually be seen on the fourth figure after the dot, mainly known as a PIP. The only pair to be quoted with two decimals is the Japanese Yen (JPY).
          </p>
          <p className="mb-4">
            Each pair has two prices — the price for selling the base currency (ask) and a price for buying it (bid). The difference between them is called a spread, and represents the amount brokers charge to open the position. The more a currency is traded, i.e. high liquidity, its spreads will be narrower. The rarer the pair is, the wider the spreads will be, since lower liquidity usually entails increased volatility. The increased risk — consequently — entails a wider spread.
          </p>
          <p className="mb-4">
            Usually a quote will be presented with four numbers after the dot, for instance 1.2358. In the case of EURUSD it means for every Euro the trader wishes to buy he will have to invest 1.2358 US dollars. Any change in the currency value will usually be seen on the fourth figure after the dot, mainly known as a PIP. The only pair to be quoted with two decimals is the Japanese Yen (JPY).
          </p>
        </div>

        <Footor />
      </div>
    </>
  );
}
