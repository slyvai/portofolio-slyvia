"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative text-white py-24 px-6 md:px-16 overflow-hidden flex justify-center items-center ">

      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(77,163,255,0.05)_3px)] pointer-events-none"></div>

      <div className="border-2 border-[#4DA3FF]/40 rounded-2xl shadow-[0_0_25px_#4DA3FF50] p-12 backdrop-blur-sm ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
    
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4DA3FF] drop-shadow-[0_0_10px_#4DA3FF]">
            Get In Touch
          </h2>

         
          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg mb-12">
            I&apos;m always excited to connect with fellow developers, designers,
            or anyone interested in collaborating on innovative projects. Whether
            you have a question, a project idea, or just want to say hello, feel
            free to reach out!
          </p>

          <a
            href="mailto:slyviafams@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-[#4DA3FF] text-white font-semibold text-lg hover:bg-[#73C2FF] transition-all duration-300 shadow-[0_0_15px_#4DA3FF80] hover:shadow-[0_0_25px_#4DA3FF]"
          >
            Say Hello
          </a>


          <div className="flex justify-center gap-8 mt-12">
            <a
              href="https://github.com/slyvai"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#4DA3FF] transition-colors hover:drop-shadow-[0_0_10px_#4DA3FF]"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://instagram.com/sll.yviaa"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#4DA3FF] transition-colors hover:drop-shadow-[0_0_10px_#4DA3FF]"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="mailto:slyviafams@gmail.com"
              className="text-white/70 hover:text-[#4DA3FF] transition-colors hover:drop-shadow-[0_0_10px_#4DA3FF]"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </motion.div>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative text-center mt-16 text-white/50 text-sm"
        >
          © {new Date().getFullYear()} Slyvia — Crafted with 💙 & React
        </motion.p>
      </div>
    </section>
  );
}
