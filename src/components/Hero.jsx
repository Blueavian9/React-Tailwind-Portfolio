import React, { useEffect, useRef } from "react";

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
    <section className="relative overflow-hidden bg-app-background text-app-text min-h-screen px-4 py-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,170,0.16),transparent_28%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row items-center justify-between px-4">

        {/* Left column */}
        <div className="w-full lg:w-6/12 space-y-6">

          {/* Available badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-app-surface/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to remote roles —{" "}
            <a href="mailto:blueavian9@gmail.com" className="underline">
              blueavian9@gmail.com
            </a>
          </div>

          {/* Name + title + tagline */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Cesar A. Aguilar</p>
            <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl leading-tight">
              Full Stack Cloud &amp; AI Engineer
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-app-muted md:text-lg">
              I build production SaaS apps powered by AI — currently open to remote roles.
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-app-border bg-app-pill px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-app-text"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/CesarAguilar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-app-accent px-6 py-3 text-sm font-semibold text-[#080D1A] transition hover:bg-app-accent-dim"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-app-surface/90 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100 dark:text-cyan-200 dark:hover:bg-cyan-500/10"
            >
              See My Work
            </a>
          </div>
        </div>

        {/* Right column — photo card */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <div
            ref={spotlightRef}
            className="relative w-72 h-72 rounded-[2rem] overflow-hidden border border-app-border shadow-[0_30px_80px_rgba(0,212,170,0.12)]"
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