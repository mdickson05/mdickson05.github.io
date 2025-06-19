import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import About from './components/About';
import Support from './components/Support';
import Marketplace from './components/Marketplace';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Activities />
      <About />
      <Support />
      <Marketplace />
      <Footer />
    </div>
  );
}

export default App;