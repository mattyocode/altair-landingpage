import React from 'react';
import PaymentLogos from '../PaymentLogos';
import bnplMobile from '../../../assets/images/bnpl-mobile.png';

import styles from './PhoneWithLogos.module.scss';

export default function PhoneWithLogos({
  logoData,
  positionData,
  children,
  ...restProps
}) {
  return (
    <div className={styles.wrapper} {...restProps}>
      <PaymentLogos logoData={logoData} positionData={positionData}>
        <div className={styles.foreground}>
          <img className={styles.image} src={bnplMobile} alt='Smart phone' />
        </div>
      </PaymentLogos>
    </div>
  );
}
