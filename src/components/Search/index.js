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
    defaultValue: 'SYDNEY (SYD)',
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
      <div className={styles.choiceField}>
        {fieldData.map((field) => {
          return (
            <SearchField
              fieldName={field.header}
              value={field.defaultValue}
              furtherDetail={field.furtherDetail}
            />
          );
        })}
      </div>
      <CTABtn label={'Search flights'} />
    </form>
  );
}
