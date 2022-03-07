import { Navbar } from './components';
import HeroBlock from './containers/hero';
import KSPBlock from './containers/ksp-block';
import PromoBlock from './containers/promo';
import navData from './fixtures/navData.json';

import './styles/global.scss';

function App() {
  return (
    <div className='App'>
      <Navbar navData={navData} />
      <HeroBlock />
      <KSPBlock />
      <PromoBlock />
    </div>
  );
}

export default App;
