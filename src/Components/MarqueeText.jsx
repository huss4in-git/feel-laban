import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY * 0.5); // Adjust speed here
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-white py-50">
      <motion.div
        className="absolute whitespace-nowrap top-[50px]"
        animate={{ x: -scrollX }}
        transition={{ ease: "linear", duration: 0.2 }}
      >
        <div className="flex items-center gap-8 bg-[#015de4] py-3 px-6" style={{fontFamily:'krish'}}>
          <span className="text-xl font-bold text-white uppercase">
          \\\\\\
          </span>
          <span className="text-8xl font-bold text-white uppercase">\\\\\\</span>
          <span className="text-8xl font-bold text-white uppercase">
          \\\\\\
          </span>
          <span className="text-8xl font-bold text-white uppercase">\\\\\\</span>
          <span className="text-8xl font-bold text-white uppercase">
          \\\\\\
          </span>
          <span className="text-8xl font-bold text-white uppercase">\\\\\\</span>
          <span className="text-8xl font-bold text-white uppercase">
          \\\\\\
          </span>
          <span className="text-8xl font-bold text-white uppercase">\\\\\\</span>
          <span className="text-8xl font-bold text-white uppercase">
          \\\\\\
          </span>
          <span className="text-8xl font-bold text-white uppercase">\\\\\\</span>
          <span className="text-8xl font-bold text-white uppercase">
          \\\\\\
          </span>
          <span className="text-8xl font-bold text-white uppercase">\\\\\\</span>
          <span className="text-8xl font-bold text-white uppercase">
          \\\\\\
          </span>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
