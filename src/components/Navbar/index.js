import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logos/alternative-airlines.jpg';
import burger from '../../assets/icons/menu.svg';
import useWindowSize from '../../hooks/use-window-size';
import * as BREAKPOINTS from '../../constants/breakpoints';

import styles from './Navbar.module.scss';

export default function Navbar({ linksData = [], ...restProps }) {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < BREAKPOINTS.DESKTOP) {
      setShowFullMenu(false);
    } else {
      setShowFullMenu(true);
    }
  }, [width]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav} {...restProps}>
        <img
          className={styles.logo}
          src={logo}
          alt='Alternative Airlines logo'
        />
        {showFullMenu ? (
          <div className={styles.underline}>
            <a className={styles.link} href={linksData.href}>
              <p className={styles.textLink}>Manage Booking</p>
            </a>
          </div>
        ) : (
          <img className={styles.menu} src={burger} alt='Toggle menu' />
        )}
      </nav>
    </div>
  );
}
