import React from 'react';

import styles from './SmallCard.module.scss';

export default function SmallCard({ iconSrc, heading, description }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={iconSrc} alt={heading} />
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
