import React, { useState, useEffect } from 'react';
import NavAction from './NavAction';
import logo from '../../assets/images/logos/alternative-airlines.jpg';
import burger from '../../assets/icons/menu.svg';
import useWindowSize from '../../hooks/use-window-size';
import * as BREAKPOINTS from '../../constants/breakpoints';

import styles from './Navbar.module.scss';

export default function Navbar({ navData = [], ...restProps }) {
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
          <>
            <ul className={styles.centerLinks}>
              {navData.map((item, idx) => {
                if (idx < navData.length - 1) {
                  return (
                    <li className={styles.navItem} key={`nav-${idx}`}>
                      <NavAction itemData={item} />
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
            <ul className={styles.linkWrapper}>
              <li className={styles.navItem} key={`nav-${navData.length - 1}`}>
                <NavAction itemData={navData.at(-1)} />
              </li>
            </ul>
          </>
        ) : (
          <img className={styles.menu} src={burger} alt='Toggle menu' />
        )}
      </nav>
    </div>
  );
}
