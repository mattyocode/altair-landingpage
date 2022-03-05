import React from 'react';
import { CgChevronDown } from 'react-icons/cg';
import Underline from '../Underline';

import styles from './NavAction.module.scss';

export default function NavAction({ itemData, ...restProps }) {
  if (!itemData.href && !itemData.options) {
    return;
  }

  return (
    <Underline>
      {itemData.href ? (
        <a className={styles.link} href={itemData.href} {...restProps}>
          <p className={styles.textLink}>{itemData.label}</p>
        </a>
      ) : (
        <>
          <p className={styles.textLink}>{itemData.label}</p>
          <CgChevronDown
            style={{
              marginLeft: '5px',
              marginBottom: '4px',
              width: '14px',
            }}
          />
        </>
      )}
    </Underline>
  );
}
