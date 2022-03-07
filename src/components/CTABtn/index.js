import React from 'react';

import styles from './CTABtn.module.scss';

export default function CTABtn({ label, ...restProps }) {
  return (
    <button className={styles.button} {...restProps}>
      {label}
    </button>
  );
}
