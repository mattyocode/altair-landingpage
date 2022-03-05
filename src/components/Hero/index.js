import React from 'react';
import heroImage from '../../assets/images/background-image.jpg';

import styles from './Hero.module.scss';

export default function Hero({ src, children, ...restProps }) {
  const backgroundImageStyle = {
    backgroundImage: `url('${heroImage}')`,
  };
  return (
    <div style={backgroundImageStyle} className={styles.hero} {...restProps}>
      {children}
    </div>
  );
}
