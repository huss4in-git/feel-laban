'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AnimatedFeelLabanLogoHero() {
  const triggerRef = useRef(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');
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
      } else {
        setNavbarBg('transparent');
      }
    };
    const unsubscribe = scrollY.onChange(updateNavbarBg);
    return () => unsubscribe();
  }, [scrollY, logoThreshold]);

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
        style={{ backgroundColor: navbarBg }}
        initial={false}
        animate={{
          y: footerInView ? '-100%' : '0%',
          opacity: footerInView ? 0 : 1,
          pointerEvents: footerInView ? 'none' : 'auto',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 32 }}
      >
        {/* Menu Button */}
        <Link
          to="/menu"
          className="text-[#015de4] text-base sm:text-lg font-medium hover:text-[#013ec4] transition-colors duration-300"
        >
          Menu
        </Link>

        {/* Location + Contact */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Responsive Locations Button */}
          <a
            href="#locations-section"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('locations-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                section.focus();
              }
            }}
            className="text-[#015de4] text-sm sm:text-base font-medium hover:text-[#013ec4] transition-colors duration-300 flex items-center gap-2"
          >
            {/* Mobile Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:hidden"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-3.727 0-6.75 3.023-6.75 6.75 0 4.341 5.477 10.279 6.088 10.897a.75.75 0 001.124 0c.611-.618 6.088-6.556 6.088-10.897 0-3.727-3.023-6.75-6.75-6.75zm0 9.75a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            {/* Desktop Text */}
            <span className="hidden sm:inline">Locations</span>
          </a>

          {/* Contact Button */}
          <button
            onClick={() => {
              const footer = document.getElementById('site-footer');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-transparent hover:bg-[#faf9f6] hover:text-blue-600 hover:border-blue-600 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div
        ref={triggerRef}
        className="relative min-h-[100vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/f-landing.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Centered Logo */}
        <Link>
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
        </Link>
      </div>
    </div>
  );
}
