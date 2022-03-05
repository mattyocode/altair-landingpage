import Navbar from './components/Navbar';
import navData from './fixtures/navData.json';

import './styles/global.scss';

function App() {
  return (
    <div className='App'>
      <Navbar navData={navData} />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
