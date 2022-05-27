import logo from './logo.svg';
import './App.css';
import ViedoSlider from './ViedoSlider/ViedoSlider';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* <ViedoSlider/> */}

      <Routes>

      <Route path="/onboarding"  element={<ViedoSlider/>} />

      </Routes>
      
    </div>
  );
}

export default App;
