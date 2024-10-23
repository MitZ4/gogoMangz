import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
import Genshin from './components/Genshin'; 
import Starrail from './components/Starrail'; 
import WutheringWaves from './components/WutheringWaves'; 
import Zzz from './components/Zzz'; 

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<><Header /><MainBanner /><ServiceSection /><Footer /></>} />
          <Route path="/genshin" element={<Genshin />} />
          <Route path="/starrail" element={<Starrail />} />
          <Route path="/wutheringWaves" element={<WutheringWaves />} />
          <Route path="/zzz" element={<Zzz />} />
        </Routes>
    </Router>
  );
}

export default App;
