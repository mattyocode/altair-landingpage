import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import flightOptionsData from '../../fixtures/flightOptionsData.json';
import searchFieldData from '../../fixtures/searchFieldData.json';

import HeroBlock from '../../containers/hero';

describe('<HeroBlock />', () => {
  it('renders the <HeroBlock />', () => {
    const headlineCopy = (
      <>
        <span>Search and book flights </span>
        <span style={{ display: 'inline-block' }}>to Australia</span>
      </>
    );
    const subheadCopy = 'Buy your flights now and pay later';

    render(
      <HeroBlock
        headline={headlineCopy}
        subhead={subheadCopy}
        searchFields={searchFieldData}
        flightOptions={flightOptionsData}
      />
    );

    expect(screen.getByText(/search and book flights/i)).toBeInTheDocument();
    expect(screen.getByText(subheadCopy)).toBeInTheDocument();
    expect(screen.getByText(/trustscore/i)).toBeInTheDocument();
    expect(screen.getByText(/search flights/i)).toBeInTheDocument();
    flightOptionsData.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
    searchFieldData.forEach((field) => {
      expect(screen.getByText(field.header)).toBeInTheDocument();
    });
    searchFieldData.forEach((field) => {
      expect(screen.getByText(field.defaultValue)).toBeInTheDocument();
    });
  });
});
