'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedFeelLabanLogoHero() {
  const triggerRef = useRef(null);
  const { scrollY } = useScroll(); // use scrollY for exact value
  const [isMobile, setIsMobile] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [navbarShadow, setNavbarShadow] = useState('none');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Threshold where logo reaches navbar
  const logoThreshold = isMobile ? 340 : 240; // tweak this value if needed

useEffect(() => {
  const updateNavbarBg = () => {
    if (scrollY.get() >= logoThreshold) {
      setNavbarBg('#faf9f6'); 
      setNavbarShadow('0px 2px 10px rgba(0,0,0,0.1)');
    } else {
      setNavbarBg('transparent');
      setNavbarShadow('none');
    }
  };
  const unsubscribe = scrollY.onChange(updateNavbarBg);
  return () => unsubscribe();
}, [scrollY, logoThreshold]);


  const targetScale = isMobile ? 0.2 : 0.095;
  const scale = useTransform(scrollY, [0, logoThreshold], [1, targetScale]);
  const y = useTransform(
    scrollY,
    [0, logoThreshold],
    [isMobile ? 400 : 250, isMobile ? -90 : -280]
  );

  return (
    <div className="relative h-[100vh] w-full" style={{ fontFamily: 're1' }}>
      {/* Navbar */}
<div
  className="fixed top-0 left-0 z-30 w-full flex items-center justify-between px-4 py-3 sm:py-2 pointer-events-auto transition-colors duration-300"
  style={{
    backgroundColor: navbarBg,
    
  }}
>
  <button className="text-[#015de4] text-lg pointer-events-auto">Menu</button>
  <button
    className="bg-blue-600 text-white px-5 py-3 rounded-full border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
  >
    Contact
  </button>
</div>


      {/* Hero section with product background */}
      <div
        ref={triggerRef}
        className="relative min-h-[100vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/feel-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated "Feel Laban" logo */}
        <motion.div
          className="fixed left-1/2 top-8 z-40 flex justify-center items-center"
          style={{
            scale,
            y,
            translateX: '-50%',
            width: isMobile ? '82vw' : '55vw',
            maxWidth: isMobile ? '380px' : '1000px',
            pointerEvents: 'none',
          }}
        >
          <img
            src="f-laban.svg"
            alt="Feel Laban Logo"
            className="w-full"
            style={{ userSelect: "none" }}
            draggable="false"
          />
        </motion.div>
      </div>
    </div>
  );
}
