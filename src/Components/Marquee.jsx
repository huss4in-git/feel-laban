import { motion } from "framer-motion";
import "./Marquee.css";

const MarqueeText = () => {
  const textItems = [
    "feel laban","•", "creamy","•", "dreamy","•",
    "feel laban","•", "creamy","•", "dreamy","•",
    "feel laban","•", "creamy","•", "dreamy","•",
    "feel laban","•", "creamy","•", "dreamy","•",
    "feel laban","•", "creamy","•", "dreamy","•",
    "feel laban","•", "creamy","•", "dreamy","•",
  ];

  return (
    <div
      className="relative overflow-hidden w-full py-22 sm:py-40"
      style={{ backgroundColor: "#faf9f6" }}
    >
      {/* Single smooth marquee line */}
      <motion.div
        className="flex whitespace-nowrap top-[50px] absolute"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 175, // adjust speed (higher = slower)
        }}
      >
        {/* Original text line */}
        <div className="flex items-center gap-8 sm:gap-8 py-1 sm:py-3 px-3 sm:px-5">
          {textItems.map((text, idx) => (
            <span
              key={idx}
              className={`text-8xl sm:text-9xl font-semibold text-[#015de4]`}
              style={{ fontFamily: "san" }}
            >
              {text}
            </span>
          ))}
        </div>

        {/* Duplicate once for perfect looping */}
        <div className="flex items-center gap-4 sm:gap-8 py-2 sm:py-3 px-3 sm:px-5">
          {textItems.map((text, idx) => (
            <span
              key={`dup-${idx}`}
              className={`text-5xl sm:text-9xl font-semibold text-[#015de4]
                `}
              style={{ fontFamily: "san" }}
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
