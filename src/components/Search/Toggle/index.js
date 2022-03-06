import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Toggle.module.scss';

export default function Toggle({ label, selected, setSelected, ...restProps }) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      <div className={styles.switch} data-ison={isOn} onClick={toggleSwitch}>
        <motion.div className={styles.handle} layout />
      </div>
    </div>
  );
}
