import React from 'react';

import styles from './SearchField.module.scss';

export default function SearchField({
  fieldName,
  value,
  furtherDetail = null,
}) {
  return (
    <div className={styles.option}>
      <div className={styles.headerRow}>
        <p className={styles.fieldName}>{fieldName}</p>
        {furtherDetail && <p className={styles.fieldName}>{furtherDetail}</p>}
      </div>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
