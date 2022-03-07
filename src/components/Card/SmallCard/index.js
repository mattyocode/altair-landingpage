import React from 'react';

import styles from './SmallCard.module.scss';

export default function SmallCard({ iconSrc, heading, description }) {
  return (
    <div className={styles.card}>
      {iconSrc && (
        <img
          className={styles.image}
          src={iconSrc}
          alt={heading}
          data-testid='small-card-icon'
        />
      )}
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
