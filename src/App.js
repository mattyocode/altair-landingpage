import { Navbar, SmallCardGrid } from './components';
import HeroBlock from './containers/hero';
import PromoContainer from './containers/promo';
import navData from './fixtures/navData.json';

import search from './assets/icons/search.svg';
import choice from './assets/icons/choice.svg';
import service from './assets/icons/service.svg';

import './styles/global.scss';

const content = [
  {
    id: 1,
    iconSrc: search,
    heading: 'Simple search',
    description: 'Easily search and book flights from anywhere in the world',
  },
  {
    id: 2,
    iconSrc: choice,
    heading: 'Unlimited choice',
    description: 'Find the flight you were looking for and pay on your terms',
  },
  {
    id: 3,
    iconSrc: service,
    heading: 'Expert customer service',
    description: 'Dedicated customer support team once you have booked',
  },
];

// const largePromo1 = {
//   heading: 'Buy now, pay later',
//   description:
//     'Book your flights today and spread the cost over time with one of our instalment options',
// };

function App() {
  return (
    <div className='App'>
      <Navbar navData={navData} />
      <HeroBlock />
      <SmallCardGrid blockContent={content} />
      <PromoContainer />
    </div>
  );
}

export default App;
