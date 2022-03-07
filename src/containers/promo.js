import { LargePromo, PaymentLogos, PhoneWithLogos } from '../components';

import klarna from '../assets/images/logos/klarna.png';
import afterpay from '../assets/images/logos/afterpay.png';
import affirm from '../assets/images/logos/affirm.png';
import laybuy from '../assets/images/logos/laybuy.png';
import check from '../assets/icons/check.svg';

import promoData from '../fixtures/promo1Data.json';

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
    top: 200,
    left: 20,
    transform: 'scale(1.1)',
  },
  {
    top: -40,
    left: 80,
    transform: 'scale(1.1)',
  },
  {
    top: -80,
    left: 210,
    transform: 'scale(0.9)',
  },
  {
    top: 60,
    left: 250,
    transform: 'scale(1.1)',
  },
];

const mobileContent = <PaymentLogos logoData={logos} />;

const largerContent = (
  <PhoneWithLogos logoData={logos} positionData={logoPositions} />
);

export default function PromoBlock({
  heading = promoData.heading,
  description = promoData.description,
  ctaLabel = promoData.ctaLabel,
  bulletIcon = check,
  bulletList = promoData.bulletList,
  smallContent = mobileContent,
  largeContent = largerContent,
}) {
  return (
    <LargePromo
      heading={heading}
      description={description}
      ctaLabel={ctaLabel}
      bulletIcon={bulletIcon}
      bulletList={bulletList}
      smallContent={smallContent}
      largeContent={largeContent}
    />
  );
}
