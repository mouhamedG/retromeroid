import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GameboyColor from './components/GameboyColor';
import GameboyAdvance from './components/GameboyAdvance';
import GameboyAdvanceSP from './components/GameboyAdvanceSP';
import GameboyDMG from './components/GameboyDMG';
import PSVitaOLED from './components/PSVitaOLED';
import Accessories from './components/Accessories';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/gameboy-color" element={<GameboyColor />} />
        <Route path="/gameboy-advance" element={<GameboyAdvance />} />
        <Route path="/gameboy-advance-sp" element={<GameboyAdvanceSP />} />
        <Route path="/gameboy-dmg" element={<GameboyDMG />} />
        <Route path="/psvita-oled" element={<PSVitaOLED />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
