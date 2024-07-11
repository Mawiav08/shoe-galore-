import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MensShoes from './MensShoes';
import WomensShoes from './WomensShoes';
import KidsShoes from './KidsShoes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens-shoes" element={<MensShoes />} />
          <Route path="/womens-shoes" element={<WomensShoes />} />
          <Route path="/kids-shoes" element={<KidsShoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
