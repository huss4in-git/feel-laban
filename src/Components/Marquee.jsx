import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Marquee.css';

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
    <div
      className="relative overflow-hidden w-full py-22 sm:py-50"
      style={{ backgroundColor: "#faf9f6" }}
    >
      <motion.div
        className="absolute whitespace-nowrap top-[30px]"
        animate={{ x: -scrollX }}
        transition={{ ease: "linear", duration: 0.2 }}
      >
        <div
          className="flex items-center gap-4 sm:gap-8 rotate-[-5deg] bg-[#015de4] py-2 sm:py-3 px-3 sm:px-5"
          style={{ fontFamily: 'krish' }}
        >
          {[
            "Feel Laban", "•", "Thick", "•", "Creamy", "•", "Dreamy", "•",
            "Feel Laban", "•", "Thick", "•", "Creamy", "•", "Dreamy", "•",
            "Feel Laban", "•", "Thick", "•", "Creamy", "•", "Dreamy"
          ].map((text, idx) => (
            <span
              key={idx}
              className={`${
                text === "" ? "font-bold" : ""
              } text-5xl sm:text-9xl text-white uppercase`}
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeText;
