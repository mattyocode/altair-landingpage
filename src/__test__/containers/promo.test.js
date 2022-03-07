import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import check from '../../assets/icons/check.svg';

import PromoBlock from '../../containers/promo';

describe('<PromoBlock />', () => {
  it('renders the <PromoBlock />', () => {
    const testContent = {
      heading: 'Buy now, pay later',
      description:
        'Book your flights today and spread the cost over time with one of our instalment options.',
      ctaLabel: 'Browse payment methods',
      bulletList: [
        'Make payments weekly or monthly',
        'Interest free options',
        'Fast approval',
      ],
    };

    render(
      <PromoBlock
        heading={testContent.heading}
        description={testContent.description}
        ctaLabel={testContent.ctaLabel}
        bulletIcon={check}
        bulletList={testContent.bulletList}
        smallContent={null}
        largeContent={null}
      />
    );

    expect(screen.getByText(testContent.heading)).toBeInTheDocument();
    expect(screen.getByText(testContent.description)).toBeInTheDocument();
    expect(screen.getByText(testContent.ctaLabel)).toBeInTheDocument();
    testContent.bulletList.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
