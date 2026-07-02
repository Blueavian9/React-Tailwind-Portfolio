import React, { useEffect, useRef } from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const techStack = ["React", "Node", "OpenAI", "AWS", "Supabase", "Stripe"];

export default function Hero() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;
      const rect = spotlightRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlightRef.current.style.setProperty("--x", x);
      spotlightRef.current.style.setProperty("--y", y);
    };
    const element = spotlightRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden
                 bg-app-background dark:bg-[#080D1A]
                 text-app-text dark:text-[#F0F4FF]
                 transition-colors duration-500
                 pt-24 pb-16 lg:pt-28 lg:pb-20 min-h-[90vh] flex items-center"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,170,0.14),transparent_30%)]" />

      <div className="relative w-full mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left column */}
        <div className="w-full lg:w-6/12 space-y-7">
          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-3 rounded-full
                          border border-cyan-500/20
                          bg-app-surface/80 dark:bg-[#0F1829]/80
                          px-4 py-2 text-xs uppercase tracking-[0.24em]
                          text-cyan-700 dark:text-cyan-200
                          backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to remote roles —{" "}
            <a
              href="mailto:blueavian9@gmail.com"
              className="underline underline-offset-2 hover:text-cyan-500 transition-colors"
            >
              blueavian9@gmail.com
            </a>
          </div>

          {/* Name + title + tagline */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Cesar A. Aguilar</p>
            <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl leading-tight">
              Full Stack AI Engineer
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-app-muted dark:text-slate-400 md:text-lg">
              I build production SaaS apps powered by AI — currently open to remote roles.
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full
                           border border-app-border dark:border-[#1E2D47]
                           bg-app-surface dark:bg-[#1E2D47]
                           px-4 py-1.5
                           text-xs font-semibold uppercase tracking-[0.2em]
                           text-app-text dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            {/* Primary — always teal fill */}
            <a
              href="/CesarAguilar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full
                         bg-app-accent
                         px-6 py-3 text-sm font-semibold text-[#080D1A]
                         shadow-[0_0_24px_rgba(0,212,170,0.22)]
                         hover:bg-app-accent-dim
                         hover:shadow-[0_0_32px_rgba(0,212,170,0.38)]
                         transition-all duration-200"
            >
              <FaDownload className="text-xs opacity-80" />
              Download Resume
            </a>

            {/* Secondary — outlined, works light + dark */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full
                         border border-app-accent/50
                         bg-transparent
                         px-6 py-3 text-sm font-semibold
                         text-app-accent
                         hover:bg-app-accent/10
                         transition-all duration-200"
            >
              See My Work
              <FaArrowRight className="text-xs opacity-80" />
            </a>
          </div>
        </div>

        {/* Right column — photo card */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <div
            ref={spotlightRef}
            className="relative
                       w-56 h-56
                       sm:w-64 sm:h-64
                       lg:w-72 lg:h-72
                       rounded-[2rem] overflow-hidden
                       border border-app-border dark:border-[#1E2D47]
                       shadow-[0_30px_80px_rgba(0,212,170,0.10)]
                       hover:shadow-[0_30px_100px_rgba(0,212,170,0.18)]
                       transition-shadow duration-500"
          >
            <img
              src="/assets/Cesar-Cover.webp"
              alt="Cesar Aguilar — Full Stack Cloud & AI Engineer"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
