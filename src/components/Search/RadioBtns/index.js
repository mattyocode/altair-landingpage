import React from 'react';

import styles from './RadioBtns.module.scss';

export default function RadioBtns({
  optionsData,
  selected,
  setSelected,
  ...restProps
}) {
  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  return (
    <ul className={styles.options} {...restProps}>
      {optionsData.map((option) => {
        return (
          <li key={option.key} className={styles.option}>
            <input
              type='radio'
              id={`flightoptions-${option.value}`}
              value={option.value}
              checked={selected === option.value}
              onChange={changeHandler}
            />
            <label htmlFor={`flightoptions-${option.value}`}>
              {option.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
