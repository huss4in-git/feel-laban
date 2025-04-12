import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MarqueeText = () => {
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
        className="absolute whitespace-nowrap top-[20px]"
        animate={{ x: -scrollX }}
        transition={{ ease: "linear", duration: 0.2 }}
      >
        <div className="flex items-center gap-8 rotate-[-5deg] bg-[#015de4] py-3 px-6" style={{fontFamily:'krish'}}>
          <span className="text-xl text-white uppercase">
          Feel Laban
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Thick
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Creamy
          </span>
          <span className="text-9xl  text-white uppercase">•</span>
          <span className="text-9xl  text-white uppercase">
          Dreamy
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Feel Laban
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Thick
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Creamy
          </span>
          <span className="text-9xl font-bold text-white uppercase">•</span>
          <span className="text-9xl font-bold text-white uppercase">
          Dreamy
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Feel Laban
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Thick
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Creamy
          </span>
          <span className="text-9xl text-white uppercase">•</span>
          <span className="text-9xl text-white uppercase">
          Dreamy
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeText;
