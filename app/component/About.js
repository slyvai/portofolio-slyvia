"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiCss3, SiTailwindcss } from "react-icons/si";
import "../styles/About.css";

export default function AboutMe() {
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 md:py-24 font-mono text-[#4DA3FF] relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(77,163,255,0.05)_3px)] pointer-events-none"></div>


      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp(0.2)}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4DA3FF] drop-shadow-[0_0_10px_#4DA3FF60]">
          About Me
        </h1>
      </motion.div>


      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp(0.3)}
        className="relative border-2 border-[#4DA3FF]/40 rounded-xl shadow-[0_0_25px_#4DA3FF80] w-full max-w-4xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-sm bg-[#001a2f]/40"
      >
 
        <motion.div variants={fadeInUp(0.4)} className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ff5f56] rounded-full shadow-[0_0_8px_#ff5f56]" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ffbd2e] rounded-full shadow-[0_0_8px_#ffbd2e]" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#27c93f] rounded-full shadow-[0_0_8px_#27c93f]" />
          <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-[#8ecaff]">
            terminal: slyvia@bluecore
          </span>
        </motion.div>

  
        <div className="space-y-5 sm:space-y-6 md:space-y-7 text-sm sm:text-base md:text-lg text-[#b5dcff] leading-relaxed">
          <motion.div variants={fadeInUp(0.5)}>
            <span className="text-[#4DA3FF]">&gt;_</span> Initializing profile...
          </motion.div>

          <motion.div variants={fadeInUp(0.6)}>
            <span className="text-[#4DA3FF]">&gt;_</span> Hello! I&apos;m{" "}
            <span className="text-[#73C2FF] font-semibold">Slyvia</span>, a{" "}
            <span className="text-[#9bd6ff] font-semibold">Frontend Developer</span> and{" "}
            <span className="text-[#73C2FF] font-semibold">UI/UX Designer</span> who loves
            turning ideas into clean, interactive, and aesthetic web experiences.
          </motion.div>

          <motion.div variants={fadeInUp(0.7)}>
            <span className="text-[#4DA3FF]">&gt;_</span> I focus on crafting{" "}
            <span className="text-[#8ecaff] font-semibold">beautiful user interfaces</span> and
            smooth interactions using modern web technologies.
          </motion.div>

          <motion.div variants={fadeInUp(0.8)}>
            <span className="text-[#4DA3FF]">&gt;_</span> Currently studying at{" "}
            <span className="text-[#9bd6ff] font-semibold">Sekolah Tri Ratna</span> (2024 - present),
            while improving my design thinking, motion design, and front-end skills.
          </motion.div>

          <motion.div variants={fadeInUp(0.9)}>
            <span className="text-[#4DA3FF]">&gt;_</span> Find me online:
            <div className="ml-6 mt-2 space-y-1 sm:space-y-2">
              <p>
                [1]{" "}
                <a
                  href="https://www.instagram.com/sll.yviaa"
                  className="text-[#73C2FF] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram ↗
                </a>
              </p>
              <p>
                [2]{" "}
                <a
                  href="https://github.com/slyvai"
                  className="text-[#4DA3FF] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp(1.0)}>
            <span className="text-[#4DA3FF]">&gt;_</span> My Skills
            <span className="text-[#73C2FF] font-semibold">
              {" "}: React, Next.js, Tailwind CSS, JS/HTML/CSS, Git, Github, Illustrator, Photoshop
            </span>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
