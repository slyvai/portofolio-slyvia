"use client";

import { useState, useEffect } from "react";
import OnPage from "./component/Home";
import AboutMe from "./component/About";
import CurvedLoop from "./TextAnimations/CurvedLoop/CurvedLoop";

export default function App() {
  const [active, setActive] = useState("home");

  // 🔹 Update active section when scrolling
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
    { name: "Home", icon: HomeIcon, id: "home" },
    { name: "About", icon: AboutIcon, id: "about" },
    { name: "Projects", icon: ProjectIcon, id: "projects" },
    { name: "Contact", icon: ContactIcon, id: "contact" },
  ];

  // 🔹 Smooth scroll to section when clicking sidebar
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
      {/* 🔵 Blue Glow Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,121,255,0.25)_0%,rgba(0,0,20,0.95)_70%)] animate-glow" />

      {/* 🔁 CurvedLoop Background */}
      <div className="fixed inset-0 opacity-50">
        <CurvedLoop
          marqueeText="Welcome to My Portfolio • Welcome to My Portfolio • Welcome to My Portfolio • "
          speed={0.1}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </div>

      {/* 🧭 Sidebar */}
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
                  className={`group relative flex justify-center w-full rounded-md px-2 py-2 transition-all duration-200 ${
                    active === id
                      ? "bg-blue-700/60 text-white backdrop-blur-sm"
                      : "text-blue-200 hover:bg-blue-800/50 hover:text-white"
                  }`}
                >
                  <Icon className="size-5 opacity-80" />
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-gray-900/80 px-2 py-1.5 text-xs font-medium text-white group-hover:visible shadow">
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✨ Main Content */}
      <main className="relative z-10 ml-16 scroll-smooth">
        <section id="home" className="min-h-screen">
          <OnPage />
        </section>

        <section id="about" className="min-h-screen">
          <AboutMe />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center text-blue-200 text-xl"
        >
          Projects Section
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center text-blue-200 text-xl"
        >
          Contact Section
        </section>
      </main>
    </div>
  );
}

/* ==== ICON COMPONENTS ==== */
function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.75L12 3l9 6.75M4.5 10.5v9.75h15V10.5"
      />
    </svg>
  );
}

function AboutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m0 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z"
      />
    </svg>
  );
}

function ProjectIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 12a4 4 0 11-8 0m8 0v5m-8-5v5m-2 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
    </svg>
  );
}
