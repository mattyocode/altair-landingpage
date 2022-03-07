import React from 'react';

import { SmallCardGrid } from '../components';

import search from '../assets/icons/search.svg';
import choice from '../assets/icons/choice.svg';
import service from '../assets/icons/service.svg';

const kspBlockCcontent = [
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

export default function KSPBlock({ blockContent = kspBlockCcontent }) {
  return <SmallCardGrid blockContent={blockContent} />;
}
