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
      <nav className="absolute top-0 left-0 right-0 z-100 w-full">
        <Navbar />
      </nav>
      <CircleReveal />
      <MarqueeText/>
      <Menu/>
      <Marquee/>
      <Example/>
      <Mos/>
    </div>
  );
}

export default App;
