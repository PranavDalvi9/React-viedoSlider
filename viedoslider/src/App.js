import "./App.css";
import ViedoSlider from "./ViedoSlider/ViedoSlider";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/onboarding" element={<ViedoSlider />} />
      </Routes>
    </div>
  );
}

export default App;
