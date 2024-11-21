import React from 'react';
import HeroSection from './components/HeroSection';
// import Services from './components/Services';
import Packages from './components/Packages';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/packages" element={<Packages />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


