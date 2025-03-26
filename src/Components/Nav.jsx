import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MagneticButton = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { current } = ref;
    if (current) {
      const { left, top, width, height } = current.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) * 0.35;
      const y = (e.clientY - (top + height / 2)) * 0.35;

      current.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px) scale(1)";
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  const iconColor = "#ffffff";

  return (
    <>
      <nav className="top-0 left-0 w-full z-40 fixed transition-all duration-500">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-32">
            <div className="text-5xl">
              <img src="/f-logo.png" alt="Logo" style={{ height: "100px" }} />
            </div>

            <div className="hidden md:flex space-x-4 mix-blend-difference" style={{ fontFamily: 'ant' }}>
              {["Menu", "Contact"].map((item) => (
                <MagneticButton key={item}>
                  <a
                    href={item === "Menu" ? "/f-menu.pdf" : "tel:+1234567890"}
                    target={item === "Menu" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 px-5 py-3 rounded-md text-lg font-medium transition-all duration-500"
                    style={{ color: iconColor }}
                  >
                    {item}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        <button
          className="fixed right-5 top-5 w-24 h-24 rounded-full flex items-center justify-center z-50 md:hidden transition-all duration-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-12 h-8 relative flex flex-col justify-center items-center">
            <span
              className={`w-10 h-[5px] absolute transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-[-8px]'}`}
              style={{ backgroundColor: iconColor }}
            ></span>
            <span
              className={`w-10 h-[5px] absolute transition-all duration-500 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[8px]'}`}
              style={{ backgroundColor: iconColor }}
            ></span>
          </div>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 w-full h-full bg-blue-600 flex flex-col items-center justify-center space-y-6 text-white text-2xl"
              style={{ fontFamily: 'ant' }}
            >
              <a href="/f-menu.pdf" className="hover:text-gray-300">Menu</a>
              <a href="tel:+1234567890" className="hover:text-gray-300">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div ref={homeRef} className="absolute top-[90vh]" />
    </>
  );
};

export default Navbar;
