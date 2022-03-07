import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import search from '../../assets/icons/search.svg';

import KSPBlock from '../../containers/ksp-block';

describe('<KSPBlock />', () => {
  it('renders the <KSPBlock />', () => {
    const testContent = [
      {
        id: 1,
        iconSrc: search,
        heading: 'Simple search',
        description:
          'Easily search and book flights from anywhere in the world',
      },
    ];

    render(<KSPBlock blockContent={testContent} />);

    expect(screen.getByText(testContent[0].heading)).toBeInTheDocument();
    expect(screen.getByText(testContent[0].description)).toBeInTheDocument();
    expect(screen.getByTestId(/small-card-icon/i)).toBeInTheDocument();
  });
});
