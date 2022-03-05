import React from 'react';
import rating from '../../assets/images/trustpilot.png';

import styles from './TrustPilot.module.scss';

export default function TrustPilot() {
  return (
    <div className={styles.wrapper}>
      <img src={rating} alt='TrustScore rating stars' className={styles.icon} />
      <div className={styles.label}>
        <p>
          TrustScore <span className={styles.bolder}>4.5</span>
        </p>
        <div className={styles.divider}></div>
        <p>
          <span className={styles.bolder}>6,500</span> reviews
        </p>
      </div>
    </div>
  );
}
