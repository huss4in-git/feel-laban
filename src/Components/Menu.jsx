import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StaggeringBlurText = ({ text = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.3,
    once: true
  });
  
  // Split text into lines and words
  const lines = [
    "TRADITION IN EVERY BITE",
    "SWEETNESS IN EVERY FEEL!",
  ];
  
  const subline = "Indulge in the richest laban desserts, crafted for pure joy! Who’s ready to take a scoop?";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };
  
  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };
  
  const wordVariants = {
    hidden: { 
      opacity: 0,
      filter: "blur(20px)",
      y: 20
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center text-center px-6" 
      style={{ backgroundImage: "url('/logo.jpg')", fontFamily:'krish' }}
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center max-w-4xl"
      >
        {lines.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            variants={lineVariants}
            className="overflow-hidden flex flex-wrap justify-center"
          >
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={`${lineIndex}-${wordIndex}`}
                variants={wordVariants}
                className="text-5xl md:text-8xl mx-2"
                style={{color:'#015de4'}}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        ))}
        <motion.p 
          variants={wordVariants}
          className="text-lg md:text-2xl mt-6 max-w-2xl text-black"
          style={{fontFamily:'pro'}}
        >
          {subline}
        </motion.p>
      </motion.div> 
    </div>
  );
};

export default StaggeringBlurText;
