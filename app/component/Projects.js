"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const featuredProjects = [
  {
    id: 1,
    title: "Dessert Shop Theme",
    description:
      "A modern, responsive e-commerce theme for dessert shops and bakeries, featuring a clean design, smooth animations, and easy navigation to showcase delicious products.",
    tech: ["ReactJS", "CSS", "JavaScript, JSON file"],
    github: "https://github.com/slyvai/dessert-shop",
    demo: "https://dessert-shop-mocha.vercel.app/",
    image: "/images/dessert-shop.png",
    direction: "left",
  },
  {
    id: 2,
    title: "Charity Website Clone",
    description:
      "A full-stack charity website clone that allows users to explore various charitable causes, make donations, and stay informed about ongoing projects through an intuitive and user-friendly interface.",
    tech: ["ReactJS", "CSS", "GSAP", "JavaScript"],
    github: "https://github.com/slyvai/charity_website",
    demo: "https://charity-website-seven.vercel.app/",
    image: "/images/charity-website.png",
    direction: "right",
  },
  {
    id: 3,
    title: "Movie Collection",
    description:
      "A sleek and interactive movie collection app that lets users browse, search, and manage their favorite films with detailed information, ratings, and personalized recommendations.",
    tech: ["ReactJS", "CSS", "JavaScript", "API Integration", "GSAP"],
    github: "https://github.com/slyvai/slyvia_movie-collection",
    demo: "https://slyvia-movie-collection.vercel.app/",
    image: "/images/movie-collection.png",
    direction: "left",
  },
];

const otherProjects = [
  {
    title: "BrandingFolio Clone",
    description: "A clone of the BrandingFolio website showcasing a portfolio of design projects with a modern and responsive layout.",
    tech: ["React", "CSS", "GSAP"],
    github: "https://github.com/slyvai/brandingfolio-clone",
    demo: "https://brandingfolio-clone.vercel.app/",
  },
  {
    title: "Advice Generator",
    description: "A simple advice generator app that fetches random advice from an API and displays it with a clean UI.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/slyvai/advice-generator",
    demo: "https://advice-generator-alpha-ecru.vercel.app/",
  },
   {
    title: "Recipe Website",
    description: "A recipe website that allows users to browse, search, and view detailed recipes with ingredients and cooking instructions.",
    tech: ["Next.js", "CSS", "API Integration"],
    github: "https://github.com/slyvai/nexjs-recipes",
    demo: "https://nexjs-recipes.vercel.app/",
  },
  {
    title: "My First Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills as a developer and designer.",
    tech: ["React", "CSS", "GSAP"],
    github: "https://github.com/slyvai/portofolio_website",
    demo: "https://portofolio-website-eight-psi.vercel.app/",
  },
  
];

export default function ProjectsSection() {
  return (
    <section className="text-white py-20 px-6 sm:px-10 md:px-16 lg:px-32">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#4DA3FF] mb-16 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-32 sm:space-y-40">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 ${
              project.direction === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
      
            <div className="relative lg:w-1/2 group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-[#4DA3FF]/30 group-hover:bg-transparent transition-all duration-700 z-10 rounded-xl mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[#4DA3FF]/20 rounded-xl blur-lg group-hover:bg-[#4DA3FF]/10 transition-all duration-700"></div>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 shadow-lg shadow-blue-900/40"
              />
            </div>


            <div className="lg:w-1/2 z-10 text-center lg:text-left">
              <p className="text-[#4DA3FF] font-medium mb-2 text-[clamp(1rem,2.2vw,1.2rem)]">
                Featured Project
              </p>
              <h3 className="font-semibold mb-4 hover:text-[#73C2FF] transition-colors text-[clamp(1.5rem,3.5vw,2.3rem)]">
                {project.title}
              </h3>
              <div className="bg-[#0F1A33] p-5 rounded-lg shadow-inner border border-blue-900/40 mb-5">
                <p className="text-white/80 leading-relaxed text-[clamp(0.95rem,2vw,1.1rem)]">
                  {project.description}
                </p>
              </div>

              <ul className="flex flex-wrap justify-center lg:justify-start gap-3 text-[clamp(0.8rem,1.8vw,0.9rem)] text-blue-300/70 mb-5">
                {project.tech.map((tech) => (
                  <li key={tech} className="border border-blue-600/40 px-2 py-1 rounded-md">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex justify-center lg:justify-start items-center gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-[#4DA3FF] transition-colors"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-[#4DA3FF] transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-[#4DA3FF] mt-32 mb-10 text-center"
      >
        Other Projects
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#0F1A33] border border-blue-900/40 rounded-xl p-6 hover:border-[#4DA3FF]/60 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-500"
          >
            <h4 className="font-semibold text-white mb-2 hover:text-[#4DA3FF] transition-colors text-[clamp(1.3rem,3vw,1.6rem)]">
              {proj.title}
            </h4>
            <p className="text-white/70 mb-4 text-[clamp(0.95rem,2vw,1.05rem)]">
              {proj.description}
            </p>
            <ul className="flex flex-wrap gap-2 text-[clamp(0.8rem,1.8vw,0.9rem)] text-blue-300/70 mb-4">
              {proj.tech.map((t) => (
                <li key={t} className="border border-blue-600/40 px-2 py-1 rounded-md">
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-[#4DA3FF] transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-[#4DA3FF] transition-colors"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
