import { motion } from "framer-motion";

const MarqueeText = () => {
  const textItems = [
    "feel laban", "•", "creamy", "•", "dreamy", "•",
    "feel laban", "•", "creamy", "•", "dreamy", "•",
    "feel laban", "•", "creamy", "•", "dreamy", "•",
    "feel laban", "•", "creamy", "•", "dreamy", "•",
  ];

  return (
    // Fixed: Ultra-short height for that luxury brand line look. Bordered.
    <div className="relative overflow-hidden w-full h-[60px] sm:h-[80px] bg-[#faf9f6] flex items-center border-y border-blue-100 z-10">
      <motion.div
        className="flex whitespace-nowrap absolute"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 175, 
        }}
      >
        <div className="flex items-center gap-10 px-6">
          {textItems.map((text, idx) => (
            <span
              key={idx}
              className="text-4xl sm:text-5xl font-semibold text-[#015de4] tracking-tight"
              style={{ fontFamily: "sanb" }} // Using NimbusSansL-Bol for a sharp look
            >
              {text}
            </span>
          ))}
        </div>
        {/* Duplicate */}
        <div className="flex items-center gap-10 px-6">
          {textItems.map((text, idx) => (
            <span
              key={`dup-${idx}`}
              className="text-4xl sm:text-5xl font-semibold text-[#015de4] tracking-tight"
              style={{ fontFamily: "sanb" }}
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