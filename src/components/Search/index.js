import React, { useState } from 'react';
import RadioBtns from './RadioBtns';
import SearchField from './SearchField';
import CTABtn from './CTABtn';
import Toggle from './Toggle';

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

const testFieldData = [
  {
    key: 1,
    header: 'Where from?',
    defaultValue: 'London (LON)',
    options: [],
  },
  {
    key: 2,
    header: 'Where to?',
    defaultValue: 'Sydney (SYD)',
    options: [],
  },
  {
    key: 3,
    header: 'Dates',
    furtherDetail: '14 Nights',
    defaultValue: 'Sat 11 Jan - Sat 25 Jun',
    options: [],
  },
  {
    key: 4,
    header: 'Passengers',
    defaultValue: '2 Adults, Any class',
    options: [],
  },
];

export default function Search({ fieldData = testFieldData }) {
  const [flightType, setFlightType] = useState(flightOptions[0].value);
  return (
    <form className={styles.wrapper}>
      <div className={styles.topRow}>
        <RadioBtns
          optionsData={flightOptions}
          selected={flightType}
          setSelected={setFlightType}
        />
        <Toggle label='Direct flights only' />
      </div>
      <div className={styles.choiceGroup}>
        <div className={styles.choiceFields}>
          <div className={`${styles.choiceRow} ${styles.joined}`}>
            <SearchField
              fieldName={fieldData[0].header}
              value={fieldData[0].defaultValue}
              furtherDetail={fieldData[0].furtherDetail}
            />
            <div className={styles.swap}></div>
            <SearchField
              fieldName={fieldData[1].header}
              value={fieldData[1].defaultValue}
              furtherDetail={fieldData[1].furtherDetail}
            />
          </div>
          <div className={`${styles.choiceRow} ${styles.inlineSpacing}`}>
            <SearchField
              fieldName={fieldData[2].header}
              value={fieldData[2].defaultValue}
              furtherDetail={fieldData[2].furtherDetail}
            />
            <SearchField
              fieldName={fieldData[3].header}
              value={fieldData[3].defaultValue}
              furtherDetail={fieldData[3].furtherDetail}
            />
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <CTABtn label={'Search flights'} />
        </div>
      </div>
    </form>
  );
}
