import { Hero, TrustPilot, Search } from '../components';
import heroImage from '../assets/images/background-image.jpg';
import flightOptionsData from '../fixtures/flightOptionsData.json';
import searchFieldData from '../fixtures/searchFieldData.json';

const headlineCopy = (
  <>
    <span>Search and book flights </span>
    <span style={{ display: 'inline-block' }}>to Australia</span>
  </>
);

const subheadCopy = 'Buy your flights now and pay later';

export default function HeroBlock({
  headline = headlineCopy,
  subhead = subheadCopy,
  searchFields = searchFieldData,
  flightOptions = flightOptionsData,
}) {
  return (
    <Hero src={heroImage}>
      <h1>{headline}</h1>
      <h3>{subhead}</h3>
      <TrustPilot />
      <Search fieldData={searchFields} flightOptions={flightOptions} />
    </Hero>
  );
}
