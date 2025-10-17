/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

export default function AboutMe() {
  return (
    <>
      {/* 🌟 Meet Me Section */}
      <div className="about-text text-center mb-16 z-20">
        <h1 className="text-5xl md:text-6xl font-bold">
          Meet <span className="text-[#407BFF]">Me!</span>
        </h1>
        <p className="text-[#888] mt-2 text-sm tracking-widest uppercase">
          — get to know me —
        </p>
      </div>

      <section className="min-h-screen text-gray-300 flex flex-col items-center justify-center px-6 py-20 font-mono relative overflow-hidden">
        <div className="relative w-full flex justify-center items-center">

          {/* 🧍‍♀️ about-me */}
          <motion.div
            drag
            dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
            dragElastic={0.3}
            whileDrag={{ scale: 1.03, cursor: "grabbing" }}
            className="cursor-grab absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[500px] bg-[#0d1117] rounded-xl shadow-xl border border-[#1e1e1e] p-8 space-y-6"
          >
            <p className="text-[#888] text-sm mb-4 tracking-wider">about-me</p>

            <div className="space-y-3 leading-relaxed border-l-2 border-[#58a6ff] pl-4">
              <p>
                <span className="text-[#58a6ff]">01.</span>{" "}
                <span className="text-white">Nice to meet you!</span> I&apos;m{" "}
                <span className="text-[#58a6ff] font-semibold">Slyvia</span> — a{" "}
                <span className="text-[#3fb950] font-semibold">
                  Creative Web Developer
                </span>{" "}
                who loves turning imagination into interactive design.
              </p>
            </div>

            <div className="space-y-3 leading-relaxed border-l-2 border-[#ff7b72] pl-4">
              <p>
                <span className="text-[#58a6ff]">02.</span> I&apos;m passionate
                about{" "}
                <span className="text-[#58a6ff] font-semibold">web design</span>{" "}
                &amp;
                <span className="text-[#ff7b72] font-semibold">
                  {" "}
                  front-end development
                </span>
                , blending{" "}
                <span className="text-[#9e6ffe] font-semibold">creativity</span>{" "}
                and{" "}
                <span className="text-[#3fb950] font-semibold">logic</span> to
                build user experiences that feel both elegant and alive.
              </p>
            </div>

            <div className="space-y-3 leading-relaxed border-l-2 border-[#9e6ffe] pl-4">
              <p>
                <span className="text-[#58a6ff]">03.</span> For me,{" "}
                <span className="text-[#3fb950] font-semibold">coding</span>{" "}
                isn&apos;t just work — it&apos;s a playground. I love{" "}
                <span className="text-[#ff7b72]">experimenting</span> with new{" "}
                <span className="text-[#d29922]">technologies</span>,
                maintaining{" "}
                <span className="text-[#58a6ff]">personal projects</span>.
              </p>
            </div>
          </motion.div>

          {/* 🎓 education */}
          <motion.div
            drag
            dragConstraints={{ left: -200, right: 200, top: -150, bottom: 150 }}
            dragElastic={0.3}
            whileDrag={{ scale: 1.03, cursor: "grabbing" }}
            className="cursor-grab absolute bottom-[15%] left-[20%] w-[280px] bg-[#0d1117] rounded-xl shadow-xl border border-[#1e1e1e] p-6"
          >
            <p className="text-[#888] text-sm mb-3 tracking-wider">education</p>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                🎓{" "}
                <span className="text-[#3fb950] font-semibold">
                  SD Widuri Indah - Graduated 2014-2019 
                </span>
              </p>
              <p>
                🎓{" "}
                <span className="text-[#3fb950] font-semibold">
                  SMP Permata Bunda - Graduated 2020-2023
                </span>
              </p>
              <p>
                🎓{" "}
                <span className="text-[#3fb950] font-semibold">
                  Sekolah Tri Ratna - On Going 2024-Present
                </span>
              </p>
              <p>
                💻 Specialized in{" "}
                <span className="text-[#58a6ff]">Front-End Development</span>{" "}
                &amp;
                <span className="text-[#ff7b72]"> UI Design</span>.
              </p>
              <p>🌱 Always learning and improving design systems.</p>
            </div>
          </motion.div>

          {/* 🌐 me-online */}
          <motion.div
            drag
            dragConstraints={{ left: -200, right: 200, top: -150, bottom: 150 }}
            dragElastic={0.3}
            whileDrag={{ scale: 1.03, cursor: "grabbing" }}
            className="cursor-grab absolute bottom-[15%] right-[20%] w-[250px] bg-[#0d1117] rounded-xl shadow-xl border border-[#1e1e1e] p-6"
          >
            <p className="text-[#888] text-sm mb-3 tracking-wider">me-online</p>
            <ul className="space-y-2 text-sm">
              <li>
                1{" "}
                <a href="https://www.instagram.com/sll.yviaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[#3fb950] hover:underline">
                  Instagram ↗
                </a>
              </li>
              <li>
                2{" "}
                <a href="https://github.com/slyvai" className="text-[#d29922] hover:underline">
                  GitHub ↗
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
