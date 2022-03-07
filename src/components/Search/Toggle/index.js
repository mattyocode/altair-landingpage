import React from 'react';
import { motion } from 'framer-motion';

import styles from './Toggle.module.scss';

export default function Toggle({ label, selected, setSelected, ...restProps }) {
  const toggleSwitch = () => setSelected(!selected);

  return (
    <div className={styles.wrapper} {...restProps}>
      <p className={styles.label}>{label}</p>
      <div
        className={styles.switch}
        data-ison={selected}
        onClick={toggleSwitch}
      >
        <motion.div className={styles.handle} layout />
      </div>
    </div>
  );
}
