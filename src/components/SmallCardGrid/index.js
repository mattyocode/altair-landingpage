import React from 'react';
import SmallCard from '../Card/SmallCard';

import styles from './SmallCardGrid.module.scss';

export default function SmallCardGrid({ blockContent }) {
  return (
    <div className={styles.wrapper}>
      {blockContent.map((card) => {
        return (
          <SmallCard
            key={card.id}
            iconSrc={card.iconSrc}
            heading={card.heading}
            description={card.description}
          />
        );
      })}
    </div>
  );
}
