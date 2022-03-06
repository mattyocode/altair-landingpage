import React, { useState, useEffect } from 'react';
import CTABtn from '../../Search/CTABtn';
import useWindowSize from '../../../hooks/use-window-size';
import * as BREAKPOINTS from '../../../constants/breakpoints';

import styles from './LargePromo.module.scss';

export default function LargePromo({
  heading,
  description,
  bulletIcon,
  bulletList,
  ctaLabel,
  smallContent,
  largeContent,
  ...restProps
}) {
  const [smallScreen, setSmallScreen] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < BREAKPOINTS.TABLET) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [width]);
  return (
    <section className={styles.card} {...restProps}>
      <div className={styles.cardContent}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        {bulletList && !smallScreen && (
          <ul className={styles.bulletList}>
            {bulletList.map((item) => {
              return (
                <li className={styles.bulletItem}>
                  {bulletIcon ? (
                    <img
                      className={styles.bulletIcon}
                      src={bulletIcon}
                      alt='Bullet point'
                    />
                  ) : (
                    <p>&#8226;</p>
                  )}
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        )}
        {smallScreen && (
          <div className={styles.smallContent}>{smallContent}</div>
        )}
        {ctaLabel && (
          <div className={styles.ctaBtn}>
            <CTABtn label={ctaLabel} />
          </div>
        )}
      </div>
      {!smallScreen && (
        <div className={styles.largeContent}>{largeContent}</div>
      )}
    </section>
  );
}
