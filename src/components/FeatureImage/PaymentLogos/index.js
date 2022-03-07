import React from 'react';

import styles from './PaymentLogos.module.scss';

const defaultLogoPositions = [
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

export default function PaymentLogos({
  logoData = [],
  positionData = defaultLogoPositions,
  children,
  ...restProps
}) {
  return (
    <div className={styles.wrapper} {...restProps}>
      {logoData.map((logo, idx) => {
        let position = {
          top: 'inherit',
          left: 'inherit',
          transform: 'scale(1)',
        };
        if (positionData[idx]) {
          position.top = positionData[idx].top;
          position.left = positionData[idx].left;
          position.transform = positionData[idx].transform;
          position.position = 'absolute';
        }
        return (
          <div style={position}>
            <img className={styles.logo} src={logo.src} alt={logo.name} />
          </div>
        );
      })}
      {children}
    </div>
  );
}
