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

      current.style.transform = `translate(${x}px, ${y}px) scale(1.35)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px) scale(1.15)";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconColor = "#015de4";
  const textClasses = "hover:text-gray-300 px-6 py-4 rounded-md text-2xl font-medium transition-all duration-500 uppercase";
  const fontStyle = { fontFamily: 'ant' };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 transition-all duration-500 bg-transparent">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-36">
          {/* Left - CONTACT */}
          <div style={fontStyle}>
            <MagneticButton>
              <a
                href="tel:+1234567890"
                className={textClasses}
                style={{ color: iconColor }}
              >
                CONTACT
              </a>
            </MagneticButton>
          </div>

          {/* Center - Logo */}
          <div className="text-6xl">
            <img src="/f-logo1.png" alt="Logo" style={{ height: "130px" }} />
          </div>

          {/* Right - MENU */}
          <div className="hidden md:flex space-x-6 mix-blend-difference" style={fontStyle}>
            <MagneticButton>
              <a
                href="/f-menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={textClasses}
                style={{ color: iconColor }}
              >
                MENU
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Mobile MENU Button */}
      <button
        className="fixed right-5 top-5 w-32 h-32 rounded-full flex items-center justify-center z-50 md:hidden transition-all duration-500"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-18 h-14 relative flex flex-col justify-center items-center">
          <span
            className={`w-16 h-[8px] absolute transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-[-14px]'}`}
            style={{ backgroundColor: iconColor }}
          ></span>
          <span
            className={`w-16 h-[8px] absolute transition-all duration-500 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[14px]'}`}
            style={{ backgroundColor: iconColor }}
          ></span>
        </div>
      </button>

      {/* Mobile MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-blue-600 flex flex-col items-center justify-center space-y-8 text-white text-3xl"
            style={fontStyle}
          >
            <a href="/f-menu.pdf" className="hover:text-gray-300">MENU</a>
            <a href="tel:+1234567890" className="hover:text-gray-300">CONTACT</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
