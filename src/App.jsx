import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import CircleReveal from './Components/Circle';
import Navbar from './Components/Nav';
import Lenis from 'lenis';
import Example from './Components/Horizontal';
import MarqueeText from './Components/Marquee';
import Stores from './Components/Stores';
import Socials from './Components/Socials';
import Footer from './Components/Footer';
import FMenu from './Pages/FMenu';
import Franchise from './Pages/Franchise'
import Location from './Components/Location';

function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <Example />
      <MarqueeText />
      <Location/>
      <Stores />
      <Socials />
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* 🏠 Home route */}
        <Route path="/" element={<Home />} />
        {/* 🍰 Menu page route */}
        <Route path="/menu" element={<FMenu />} />
        <Route path='/franchise' element={<Franchise/>}/>
      </Routes>
    </Router>
  );
}

export default App;
