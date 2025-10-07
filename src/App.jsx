import React, { useEffect } from 'react';
import './App.css';
import CircleReveal from './Components/Circle';
import Navbar from './Components/Nav';
import Lenis from 'lenis';
import Menu from './Components/Menu';
import Mos from './Components/Mos';
import Example from './Components/Horizontal';
import MarqueeText from './Components/Marquee';
import Marquee from './Components/MarqueeText';
import Stores from './Components/Stores';
import Socials from './Components/Socials';
import Footer from './Components/Footer';

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
    <div className="app-container">
     
      <Navbar />
      <Example/>
      <MarqueeText/>
      <Stores/>
      <Socials/>
      <Footer/>
    </div>
  );
}

export default App;
