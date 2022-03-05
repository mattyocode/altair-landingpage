import { Navbar } from './components';
import HeroBlock from './containers/hero';
import navData from './fixtures/navData.json';

import './styles/global.scss';

function App() {
  return (
    <div className='App'>
      <Navbar navData={navData} />
      <HeroBlock />
    </div>
  );
}

export default App;
