import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BoldFullScreenText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center bg-white px-4"
      style={{ fontFamily: "krish" }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        {/* Centered First Line (No Changes) */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-[28vw] md:text-[33vw] uppercase font-thin md:font-black leading-[0.85] tracking-tight md:tracking-[-8px] text-[#015de4] text-center"
>
  TRADITION IN
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-[28vw] md:text-[33vw] uppercase font-thin md:font-black leading-[0.85] tracking-tight md:tracking-[-8px] text-[#015de4] text-center md:text-left md:ml-[54px]"
>
  EVERY BITE
</motion.div>


      </motion.div>
    </div>
  );
};

export default BoldFullScreenText;
