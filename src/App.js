import '../src/index.css';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import DreamHouse from './components/DreamHouse.jsx';
import WhyChosee from './components/WhyChosee.jsx';
import Popularresidences from './components/Popularresidences.jsx';


function App() {
  return (
    <div className="App">

  <Header />
  <Home />
  <DreamHouse />
  <br /><br />
  <WhyChosee />
  <Popularresidences />

    </div>
  );
}

export default App;
