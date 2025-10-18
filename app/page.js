"use client";

import { useState, useEffect } from "react";
import OnPage from "./component/Home";
import AboutMe from "./component/About";
import ProjectsSection from "./component/Projects";
import ContactSection from "./component/Contact";
import CurvedLoop from "./TextAnimations/CurvedLoop/CurvedLoop";

// ✅ Import modern Lucide icons
import {
  House,
  User,
  FolderGit2,
  Mail,
} from "lucide-react";

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 200;
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", icon: House, id: "home" },
    { name: "About", icon: User, id: "about" },
    { name: "Projects", icon: FolderGit2, id: "projects" },
    { name: "Contact", icon: Mail, id: "contact" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white font-geist bg-blue-950 scroll-smooth">
 
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,121,255,0.25)_0%,rgba(0,0,20,0.95)_70%)] animate-glow" />

 
      <div className="fixed inset-0 opacity-50">
        <CurvedLoop
          marqueeText="Welcome to My Portfolio • Welcome to My Portfolio • "
          speed={0.2}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </div>

      <div className="fixed left-0 top-0 flex h-screen w-16 flex-col justify-between border-e border-blue-800/40 bg-blue-900/30 backdrop-blur-md shadow-md z-20">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="text-white text-lg font-semibold tracking-wider">
              S
            </span>
          </div>

          <div className="border-t border-blue-800/40">
            <div className="px-2 py-4 space-y-1">
              {menuItems.map(({ name, icon: Icon, id }) => (
                <button
                  key={id}
                  onClick={() => handleScrollTo(id)}
                  className={`group relative flex justify-center w-full rounded-md px-2 py-3 md:py-2 transition-all duration-200 ${
                    active === id
                      ? "bg-blue-700/60 text-white backdrop-blur-sm"
                      : "text-blue-200 hover:bg-blue-800/50 hover:text-white"
                  }`}
                >

                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 opacity-80" />


                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-gray-900/80 px-2 py-1.5 text-xs font-medium text-white group-hover:visible shadow">
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-4">
          <a
            href="https://github.com/slyvai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-5 md:h-5"
            >
              <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.6.1-.6.1-.6 1.1.1 1.6 1.1 1.6 1.1 1 .1.7 1.5 2.7 2 .6-.5 1-.9 1.1-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.4 1.1-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.3 11.3 0 016.2 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.6.2 2.9.1 3.2.7.9 1.1 2 1.1 3.3 0 4.6-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 .5z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/sll.yviaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-5 md:h-5"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Sections */}
      <main className="relative z-10 ml-16 scroll-smooth">
        <section id="home" className="min-h-screen">
          <OnPage />
        </section>

        <section id="about" className="min-h-screen">
          <AboutMe />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        <section id="contact" className="min-h-screen flex justify-center items-center">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
