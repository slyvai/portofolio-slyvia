"use client";
import "../styles/Home.css";
import BlurText from "../TextAnimations/BlurText/BlurText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function OnPage() {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  const handleAnimationComplete = () => {
    console.log("BlurText animation completed!");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowScrollIcon(false);
      else setShowScrollIcon(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
 
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight tracking-tight">
        Hi, I&apos;m Slyvia, a <br />
        <span className="text-[#407BFF]">
          <BlurText
            text="Designer & <Developer/>"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-bold text-[#407BFF] mt-4 sm:mt-6 md:mt-8 inline-block block text-center break-keep"
          />
        </span>
      </h1>

      <div className="content relative z-10 mt-4 sm:mt-6 md:mt-8">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          I focus on develop websites with beautiful user interfaces and smooth interactions.
        </p>
      </div>


      {showScrollIcon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-8 sm:bottom-10 md:bottom-12 flex flex-col items-center space-y-2 sm:space-y-3"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-6 h-10 sm:w-7 sm:h-12 md:w-8 md:h-14 border-2 border-[#407BFF] rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-[#407BFF] rounded-full animate-scrollWheel"></div>
          </motion.div>
          <p className="text-xs sm:text-sm md:text-base text-[#407BFF]/80 tracking-wide">
            Scroll Down
          </p>
        </motion.div>
      )}
    </div>
  );
}
