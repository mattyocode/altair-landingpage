import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from './Underline.module.scss';

const underlineVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export default function Underline({ children, ...restProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      console.log('hovered!');
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isHovered, controls]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.linkWrapper}
      {...restProps}
    >
      {children}
      <motion.div
        className={styles.underline}
        initial='initial'
        animate={controls}
        variants={underlineVariants}
      ></motion.div>
    </div>
  );
}
