import React from 'react';
import Navbar from '../components/Navbar';
import StartTradingPage from '../components/StartTradingPage';
import Footor from '../components/Footor';
import Costs from '../components/Costs';
import Image from 'next/image';

import one from '../../../public/img/one.png';
import ic1 from '../../../public/img/icon/one1.png';
import ic2 from '../../../public/img/icon/one2.png';
import ic3 from '../../../public/img/icon/one3.png';
import ic4 from '../../../public/img/icon/one4.png';
import ic5 from '../../../public/img/icon/one5.png';
import ic6 from '../../../public/img/icon/one6.png';
import ic7 from '../../../public/img/icon/one8.png';
import ic8 from '../../../public/img/icon/one9.png';
import footerban from '../../../public/img/bg/footer-ban.png';

const Page = () => {
  return React.createElement(
    'div',
    { className: 'w-full' },
    React.createElement(
      'div',
      { className: 'bg-gradient-custom2 pt-24 text-justify' },
      React.createElement(Navbar, null),
      React.createElement(
        'div',
        { className: 'p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between max-w-screen-lg mx-auto' },
        React.createElement(
          'div',
          null,
          React.createElement('h1', { className: 'text-gray-900 text-4xl sm:text-4xl font-bold' }, 'Forex'),
          React.createElement(
            'nav',
            { className: 'text-gray-600 mt-4' },
            React.createElement(
              'a',
              { href: '/' },
              React.createElement('span', null, 'Home')
            ),
            React.createElement('span', { className: 'mx-2' }, '/'),
            React.createElement('span', null, 'Forex')
          )
        ),
        React.createElement(
          'div',
          { className: 'w-full sm:w-auto' },
          React.createElement('img', {
            src: one.src,
            alt: 'Forex Illustration',
            className: 'max-w-full h-auto',
            width: 500,
            height: 300
          })
        )
      ),
      React.createElement(
        'div',
        { className: 'py-10 px-6 flex flex-col gap-10 max-w-screen-lg mx-auto items-center justify-center' },
        React.createElement(
          'div',
          { className: 'bg-gradient-to-r p-10 sm:p-20 from-gray-800 to-black w-full text-white text-left rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl' },
          React.createElement('h1', { className: 'text-2xl sm:text-3xl font-bold pb-6 border-b border-gray-700' }, 'Forex Overview'),
          React.createElement(
            'p',
            { className: 'font-light text-sm sm:text-base pt-4' },
            'The spot foreign exchange market (also called “Forex” or “FX”) is not traded on exchange but rather accomplished over-the-counter by two counter parties. Initially, Forex was traded “Interbank” since trading was conducted only by banks trading with each other. However, with the development of information systems and technology, financial institutions introduced margin trading on foreign exchange at more competitive terms. At present, the majority of foreign exchange transactions are performed by speculators. Institutional investors, funds, and government institutions contribute to the rest of the market participants.',
            React.createElement('br', null),
            React.createElement('br', null),
            'It is estimated that daily Forex Market turnover exceeds 4 trillion U.S. Dollars in volume traded. Forex market today is essentially the largest and most liquid of the financial markets. Forex gives traders an access to the market 24 hours a day, 5 days a week, with prices being quoted to one thousandth of a cent!'
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'bg-cover bg-center bg-gray-900 pt-20 pb-20 flex flex-col items-center justify-center -mb-24' },
      React.createElement(
        'div',
        { className: 'text-center text-white max-w-screen-xl' },
        React.createElement(
          'p',
          { className: 'text-xl sm:text-2xl mb-8 font-Poppins text-gray-100' },
          'Kaizen Markets Trading Advantages'
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6  gap-6  max-w-screen-xl mx-auto' },
        [
          { src: ic1, title: 'Fast & Secure Execution' },
          { src: ic8, title: 'Flexible leverage up to 1:400' },
          { src: ic4, title: 'Deposits from as low as $10' },
          { src: ic6, title: 'True STP, ECN and NDD execution' },
          { src: ic5, title: 'Fast account opening & approval' },
          { src: ic3, title: 'Personalized “My Kaizen Markets”' },
          { src: ic2, title: 'Swap-Free (Islamic) Accounts' },
          { src: ic7, title: 'Instant funding & withdrawal' }
        ].map((item, index) =>
          React.createElement(
            'div',
            {
              key: index,
              className: 'bg-gray-800 text-white p-4 shadow-lg text-center hover:bg-purple-600 transition duration-200 rounded-lg flex flex-col items-center'
            },
            React.createElement('img', {
              src: item.src,
              alt: item.title,
              className: 'max-w-full h-auto mb-4',
              width: 100,
              height: 100
            }),
            React.createElement(
              'h3',
              { className: 'text-sm font-Poppins mt-2 text-gray-300' },
              item.title
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'flex flex-col sm:flex-row gap-4 max-w-screen-xl py-12' },
        React.createElement(
          'a',
          { href: 'https://office.kaizenmarkets.com/' },
          React.createElement(
            'button',
            { className: 'bg-yellow-500 text-white py-2 px-8 font-semibold hover:bg-purple-600 transition duration-300' },
            'Open Live Account'
          )
        ),
        React.createElement(
          'a',
          { href: 'https://office.kaizenmarkets.com/trader/registration' },
          React.createElement(
            'button',
            { className: 'text-white py-2 px-6 font-semibold hover:bg-gray-200 hover:text-gray-800 transition duration-300 border' },
            'Open Demo Account'
          )
        )
      )
    ),
    React.createElement('div', { className: '-mb-20' }, React.createElement(Costs, null)),
    React.createElement(StartTradingPage, null),
    React.createElement(Footor, null)
  );
};

export default Page;
