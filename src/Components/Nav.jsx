// AnimatedFeelLabanLogoHero.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform /* optionally useMotionValueEvent */ } from 'framer-motion';

export default function AnimatedFeelLabanLogoHero() {
  const triggerRef = useRef(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [navbarShadow, setNavbarShadow] = useState('none');

  // NEW: footer visibility state
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Observe the footer entering/leaving the viewport
  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.8; // 80% visible
        setFooterInView(visible);
      },
      { threshold: [0, 0.8] }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  const logoThreshold = isMobile ? 340 : 240;

  // Optional: prefer useMotionValueEvent over onChange
  // useMotionValueEvent(scrollY, "change", () => { ... });

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
      {/* Navbar -> motion.div with slide-up when footerInView */}
      <motion.div
        className="site-header fixed top-0 left-0 right-0 z-30 w-full flex items-center justify-between px-4 py-3 sm:py-2 pointer-events-auto transition-colors duration-300"
        style={{ backgroundColor: navbarBg, boxShadow: navbarShadow }}
        initial={false}
        animate={{
          y: footerInView ? '-100%' : '0%',
          opacity: footerInView ? 0 : 1,
          pointerEvents: footerInView ? 'none' : 'auto'
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 32 }}
      >
        <button className="text-[#015de4] text-lg pointer-events-auto">Menu</button>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-full border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
          Contact
        </button>
      </motion.div>

      {/* Hero */}
      <div
        ref={triggerRef}
        className="relative min-h-[100vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/feel-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       <motion.div
  className="fixed inset-x-0 top-8 z-40 flex justify-center items-center px-4"
  style={{
    scale,
    y,
    pointerEvents: 'none',
  }}
>
  <img
    src="f-laban.svg"
    alt="Feel Laban Logo"
    className={`w-full ${isMobile ? 'max-w-[320px]' : 'max-w-[800px]'}`}
    style={{ userSelect: 'none' }}
    draggable="false"
  />
</motion.div>

      </div>
    </div>
  );
}
