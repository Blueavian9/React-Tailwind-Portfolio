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
    <section className="relative overflow-hidden bg-app-background text-app-text dark:bg-[#080D1A] dark:text-[#F0F4FF] min-h-screen px-4 py-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,170,0.16),transparent_28%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row items-center justify-between px-4">
        <div className="w-full lg:w-6/12 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-app-surface/80 dark:bg-[#0F1829]/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to remote roles —{" "}
            <a
              href="mailto:blueavian9@gmail.com"
              className="underline text-cyan-700 dark:text-cyan-200"
            >
              blueavian9@gmail.com
            </a>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Cesar A. Aguilar</p>
            <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl leading-tight text-white">
              Full Stack Cloud &amp; AI Engineer
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              I build production SaaS apps powered by AI — currently open to remote roles.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-app-border bg-app-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-app-text dark:border-[#1E2D47] dark:bg-[#112240] dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/CesarAguilar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#00D4AA] px-6 py-3 text-sm font-semibold text-[#080D1A] transition hover:bg-[#00A882]"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-white/90 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-500/40 dark:bg-white/5 dark:text-cyan-200 dark:hover:bg-cyan-500/10"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <div
            ref={spotlightRef}
            className="relative mx-auto w-full max-w-md rounded-[2rem] border border-cyan-500/10 bg-app-surface/95 p-4 shadow-[0_30px_80px_rgba(0,212,170,0.12)] dark:bg-[#0F1829]/95"
          >
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-sky-500/10 to-violet-500/5 blur-3xl" />
            <img
              src="/assets/Cesar-Cover.webp"
              alt="Cesar Aguilar"
              className="relative mx-auto h-72 w-72 rounded-[1.75rem] object-cover shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
