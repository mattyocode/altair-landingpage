import React, { useState } from 'react';
import SearchBtns from './SearchBtn';

import styles from './Search.module.scss';

const flightOptions = [
  {
    key: 1,
    label: 'Return',
    value: 'return',
  },
  {
    key: 2,
    label: 'One way',
    value: 'one',
  },
  {
    key: 3,
    label: 'Multi-city',
    value: 'multi',
  },
];

export default function Search() {
  const [flightType, setFlightType] = useState(flightOptions[0].value);
  return (
    <form className={styles.wrapper}>
      <div className={styles.choiceBtns}>
        <SearchBtns
          optionsData={flightOptions}
          selected={flightType}
          setSelected={setFlightType}
        />
      </div>
    </form>
  );
}
