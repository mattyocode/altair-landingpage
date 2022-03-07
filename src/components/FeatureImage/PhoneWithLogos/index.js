import React, { useState, useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PaymentLogos from '../PaymentLogos';
import { isHoveredContext } from '../../Card/LargePromo';
import bnplMobile from '../../../assets/images/bnpl-mobile.png';
import useWindowSize from '../../../hooks/use-window-size';
import * as BREAKPOINTS from '../../../constants/breakpoints';

import styles from './PhoneWithLogos.module.scss';

const phoneVariants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: 10,
    scale: 1.05,
    transition: {
      delay: 0.05,
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const tabletLogoPositions = [
  {
    top: 200,
    left: 20,
    transform: 'scale(1.1)',
  },
  {
    top: -40,
    left: 80,
    transform: 'scale(1.1)',
  },
  {
    top: -80,
    left: 210,
    transform: 'scale(0.9)',
  },
  {
    top: 60,
    left: 250,
    transform: 'scale(1.1)',
  },
];

const desktopLogoPositions = [
  {
    top: 190,
    left: 20,
    transform: 'scale(1.1)',
  },
  {
    top: 130,
    left: -50,
    transform: 'scale(1)',
  },
  {
    top: 65,
    left: 390,
    transform: 'scale(0.9)',
  },
  {
    top: -10,
    left: 330,
    transform: 'scale(1.1)',
  },
];

export default function PhoneWithLogos({
  logoData,
  positionData,
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
      <PaymentLogos
        logoData={logoData}
        positionData={isDesktop ? desktopLogoPositions : tabletLogoPositions}
      >
        <motion.div
          className={styles.foreground}
          initial='initial'
          animate={controls}
          variants={phoneVariants}
        >
          <img className={styles.image} src={bnplMobile} alt='Smart phone' />
        </motion.div>
      </PaymentLogos>
    </div>
  );
}
