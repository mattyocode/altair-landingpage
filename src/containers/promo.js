import { LargePromo, PaymentLogos } from '../components';

import klarna from '../assets/images/logos/klarna.png';
import afterpay from '../assets/images/logos/afterpay.png';
import affirm from '../assets/images/logos/affirm.png';
import laybuy from '../assets/images/logos/laybuy.png';

const largePromo1 = {
  heading: 'Buy now, pay later',
  description:
    'Book your flights today and spread the cost over time with one of our instalment options',
  ctaLabel: 'Browse payment methods',
};

const logos = [
  {
    id: 1,
    src: klarna,
    name: 'Klarna',
  },
  {
    id: 2,
    src: laybuy,
    name: 'Laybuy',
  },
  {
    id: 3,
    src: affirm,
    name: 'Affirm',
  },
  {
    id: 4,
    src: afterpay,
    name: 'Afterpay',
  },
];

const logoPositions = [
  {
    top: 20,
    left: -10,
    transform: 'scale(1.1)',
  },
  {
    top: 35,
    left: 100,
    transform: 'scale(1)',
  },
  {
    top: 0,
    left: 200,
    transform: 'scale(0.9)',
  },
  {
    top: 40,
    left: 280,
    transform: 'scale(1.1)',
  },
];

export default function PromoContainer() {
  return (
    <LargePromo
      heading={largePromo1.heading}
      description={largePromo1.description}
      ctaLabel={largePromo1.ctaLabel}
    >
      <PaymentLogos logoData={logos} positionData={logoPositions} />
    </LargePromo>
  );
}
