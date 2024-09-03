import React from 'react';

const TradingInfo: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Trading Information</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Market Overview</h2>
        <p className="text-lg">
          Stay informed about the latest market trends and developments. Our trading platform offers comprehensive market insights and analysis to help you make informed decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Trading Strategies</h2>
        <p className="text-lg">
          Explore various trading strategies that can help you maximize your investment returns. From day trading to long-term investments, we provide detailed guides and tips for every trading style.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Risk Management</h2>
        <p className="text-lg">
          Effective risk management is crucial for successful trading. Learn how to manage your risk effectively and protect your investments with our expert advice and tools.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Trading Tools</h2>
        <p className="text-lg">
          Discover the trading tools available on our platform, including advanced charting features, real-time data, and custom indicators to enhance your trading experience.
        </p>
      </section>
    </div>
  );
};

export default TradingInfo;
