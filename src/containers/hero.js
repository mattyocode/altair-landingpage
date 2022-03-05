import { Hero, TrustPilot } from '../components';
import heroImage from '../assets/images/background-image.jpg';

export default function HeroBlock() {
  return (
    <Hero src={heroImage}>
      <h1>
        <span>Search and book flights </span>
        <span style={{ display: 'inline-block' }}>to Australia</span>
      </h1>
      <h3>Buy your flights now and pay later</h3>
      <TrustPilot />
    </Hero>
  );
}
