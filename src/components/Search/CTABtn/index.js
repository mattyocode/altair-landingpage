import React from 'react';

import styles from './CTABtn.module.scss';

export default function CTABtn({ label }) {
  return <button className={styles.button}>{label}</button>;
}
