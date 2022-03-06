import React from 'react';

import styles from './PaymentLogos.module.scss';

export default function PaymentLogos({
  logoData = [],
  positionData = [],
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
    </div>
  );
}
