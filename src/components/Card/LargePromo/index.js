import React from 'react';
import CTABtn from '../../Search/CTABtn';

import styles from './LargePromo.module.scss';

export default function LargePromo({
  heading,
  description,
  ctaLabel,
  children,
  ...restProps
}) {
  return (
    <section className={styles.card} {...restProps}>
      <div className={styles.cardContent}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.childContent}>{children}</div>
      {ctaLabel && (
        <div className={styles.ctaBtn}>
          <CTABtn label={ctaLabel} />
        </div>
      )}
    </section>
  );
}
