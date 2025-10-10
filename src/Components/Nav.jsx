'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AnimatedFeelLabanLogoHero() {
  const triggerRef = useRef(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [navbarShadow, setNavbarShadow] = useState('none');
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.8;
        setFooterInView(visible);
      },
      { threshold: [0, 0.8] }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  const logoThreshold = isMobile ? 320 : 240;

  useEffect(() => {
    const updateNavbarBg = () => {
      if (scrollY.get() >= logoThreshold) {
        setNavbarBg('#faf9f6');
        setNavbarShadow('0px 2px 8px rgba(0,0,0,0.08)');
      } else {
        setNavbarBg('transparent');
        setNavbarShadow('none');
      }
    };
    const unsubscribe = scrollY.onChange(updateNavbarBg);
    return () => unsubscribe();
  }, [scrollY, logoThreshold]);

  // Logo animation scale & Y movement
  const targetScale = isMobile ? 0.22 : 0.095;
  const scale = useTransform(scrollY, [0, logoThreshold], [1, targetScale]);
  const y = useTransform(
    scrollY,
    [0, logoThreshold],
    [isMobile ? 440 : 280, isMobile ? -110 : -295]
  );

  return (
    <div className="relative h-[100vh] w-full" style={{ fontFamily: 'san' }}>
      {/* Navbar */}
      <motion.div
        className="site-header fixed top-0 left-0 right-0 z-30 w-full flex items-center justify-between px-5 py-4 sm:py-2 pointer-events-auto transition-all duration-300"
        style={{ backgroundColor: navbarBg,  }}
        initial={false}
        animate={{
          y: footerInView ? '-100%' : '0%',
          opacity: footerInView ? 0 : 1,
          pointerEvents: footerInView ? 'none' : 'auto',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 32 }}
      >
        {/* Menu Button */}
        <Link to="/menu" className="text-[#015de4] text-base sm:text-lg font-medium">
  Menu</Link>

        
  <button
  onClick={() => {
    const footer = document.getElementById('site-footer');
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top + window.scrollY;
      const startY = window.scrollY;
      const distance = footerTop - startY;
      const duration = 1; // 👈 Adjust this value to make it slower (1500 = 1.5s)
      let startTime = null;

      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const scroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * eased);

        if (elapsed < duration) requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    }
  }}
  className="bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-transparent hover:bg-[#faf9f6] hover:text-blue-600 hover:border-blue-600 transition-colors duration-300"
style={{fontFamily:'san'}}>
  Contact
</button>


      </motion.div>

      {/* Hero Section */}
      <div
        ref={triggerRef}
        className="relative min-h-[100vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/feel-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Centered Logo */}
        <motion.div
          className="fixed inset-x-0 top-10 z-40 flex justify-center items-center px-5"
          style={{
            scale,
            y,
            pointerEvents: 'none',
          }}
        >
          <img
            src="f-laban.svg"
            alt="Feel Laban Logo"
            className={`w-full ${isMobile ? 'max-w-[310px]' : 'max-w-[820px]'}`}
            style={{ userSelect: 'none' }}
            draggable="false"
          />
        </motion.div>
      </div>
    </div>
  );
}
