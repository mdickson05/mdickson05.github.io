import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Video from './components/Video';
import Activities from './components/Activities';
import Design from './components/Design';
import About from './components/About';
import Support from './components/Support';
import SocialMedia from './components/SocialMedia';
import Marketplace from './components/Marketplace';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Video />
      <Activities />
      <Design />
      <About />
      <Support />
      <SocialMedia />
      <Marketplace />
      <Footer />
    </div>
  );
}

export default App;