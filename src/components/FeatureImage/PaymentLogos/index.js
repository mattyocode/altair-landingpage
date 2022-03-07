import React, { useState, useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { isHoveredContext } from '../../Card/LargePromo';
import useWindowSize from '../../../hooks/use-window-size';
import * as BREAKPOINTS from '../../../constants/breakpoints';

import styles from './PaymentLogos.module.scss';

const defaultLogoPositions = [
  {
    top: 20,
    left: -10,
    transform: 'scale(1.1)',
  },
  {
    top: 35,
    left: 100,
    transform: 'scale(1)',
  },
  {
    top: 0,
    left: 200,
    transform: 'scale(0.9)',
  },
  {
    top: 40,
    left: 280,
    transform: 'scale(1.1)',
  },
];

const logoLeftVariants = {
  initial: { y: 0, x: 0, scale: 1 },
  hover: {
    y: -10,
    x: -10,
    scale: 1.1,
    transition: {
      delay: 0.05,
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const logoRightVariants = {
  initial: { y: 0, x: 0, scale: 1 },
  hover: {
    y: -10,
    x: 10,
    scale: 1.1,
    transition: {
      delay: 0.05,
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export default function PaymentLogos({
  logoData = [],
  positionData = defaultLogoPositions,
  children,
  ...restProps
}) {
  const [isDesktop, setIsDesktop] = useState(false);
  const { isHovered } = useContext(isHoveredContext);
  const { width } = useWindowSize();
  const controls = useAnimation();

  useEffect(() => {
    if (width < BREAKPOINTS.DESKTOP) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }, [width]);

  useEffect(() => {
    if (isHovered && isDesktop) {
      controls.start('hover');
    } else {
      controls.start('initial');
    }
  }, [isHovered, isDesktop, controls]);

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
        if (idx < Math.round(logoData.length / 2)) {
          return (
            <motion.div
              key={logo.id}
              style={position}
              initial='initial'
              animate={controls}
              variants={logoLeftVariants}
            >
              <img
                data-testid='logo-icon'
                className={styles.logo}
                src={logo.src}
                alt={logo.name}
              />
            </motion.div>
          );
        } else {
          return (
            <motion.div
              key={logo.id}
              style={position}
              initial='initial'
              animate={controls}
              variants={logoRightVariants}
            >
              <img className={styles.logo} src={logo.src} alt={logo.name} />
            </motion.div>
          );
        }
      })}
      {children}
    </div>
  );
}
