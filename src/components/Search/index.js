import React, { useState, useEffect } from 'react';
import RadioBtns from './RadioBtns';
import SearchField from './SearchField';
import CTABtn from '../CTABtn';
import Toggle from './Toggle';

import styles from './Search.module.scss';

export default function Search({ fieldData, flightOptions }) {
  const [flightType, setFlightType] = useState(null);
  const [directFlightsOnly, setDirectFlightsOnly] = useState(false);
  // Ordinarily, all form values would be handled here
  // (or in global state management like Redux)
  // but omitting to focus on layout

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Search form submitted!');
  };

  useEffect(() => {
    if (flightOptions) {
      setFlightType(flightOptions[0].value);
    }
  }, [flightOptions]);

  return (
    <form className={styles.wrapper} onSubmit={onSubmitHandler}>
      <div className={styles.topRow}>
        <RadioBtns
          optionsData={flightOptions}
          selected={flightType}
          setSelected={setFlightType}
        />
        <Toggle
          label='Direct flights only'
          selected={directFlightsOnly}
          setSelected={setDirectFlightsOnly}
        />
      </div>
      <div className={styles.choiceGroup}>
        <div className={styles.choiceFields}>
          <div className={`${styles.choiceRow} ${styles.joined}`}>
            <SearchField
              fieldName={fieldData[0].header}
              value={fieldData[0].defaultValue}
              furtherDetail={fieldData[0].furtherDetail}
            />
            <div className={styles.swapBtn}></div>
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
