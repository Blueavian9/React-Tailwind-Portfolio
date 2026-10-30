import { FaDownload, FaArrowRight } from "react-icons/fa";

const techStack = ["React", "Node", "OpenAI", "AWS"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-[rgb(8,13,26)]
                 pt-20 pb-12 md:pt-28 md:pb-16 lg:min-h-[90vh] lg:pt-32 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_48%,rgba(0,212,170,0.15),transparent_38%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left column */}
        <div className="w-full min-w-0 space-y-7 lg:w-6/12">
          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-3 rounded-full border border-[#00D4AA]/30
                       bg-[#00D4AA]/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em]
                       text-[#D4E5E2]"
          >
            <span className="h-2 w-2 rounded-full bg-[#00D4AA]" />
            OPEN TO REMOTE ROLES
          </div>

          {/* Name + title + tagline */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00D4AA]">
              CESAR A. AGUILAR
            </p>
            <h1 className="max-w-[15ch] text-4xl font-extrabold leading-[1.05] text-[#F5F7FF] sm:text-5xl xl:text-7xl">
              Full Stack Cloud &amp; AI Engineer
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-[#94A3B8] sm:text-2xl">
              I build production SaaS apps powered by AI.
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#26344F] bg-[#131B33]
                           px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5D0E0]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            {/* Primary — always teal fill */}
            <a
              href="/assets/Cesar-Aguilar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full
                         bg-app-accent
                         px-6 py-3 text-sm font-semibold text-[#080D1A]
                         shadow-[0_0_24px_rgba(0,212,170,0.22)]
                         hover:bg-app-accent-dim
                         hover:shadow-[0_0_32px_rgba(0,212,170,0.38)]
                         transition-all duration-200 focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-offset-4 focus-visible:outline-[#00D4AA]"
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
                         border border-[#00D4AA]
                         bg-transparent
                         px-6 py-3 text-sm font-semibold
                         text-[#00D4AA]
                         hover:bg-[#00D4AA]/10
                         transition-all duration-200 focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-offset-4 focus-visible:outline-[#00D4AA]"
            >
              See My Work
              <FaArrowRight className="text-xs opacity-80" />
            </a>
          </div>
        </div>

        {/* Right column — photo card */}
        <div className="flex w-full justify-center lg:w-5/12 lg:justify-end">
          <div
            className="relative aspect-square w-60 rounded-full bg-[linear-gradient(135deg,#00D4AA_0%,#1E293B_100%)] p-[7px]
                       shadow-[0_0_60px_rgba(0,212,170,0.14)] sm:w-64 lg:w-[22rem]"
          >
            <img
              src="/assets/Cesar-Cover.png"
              alt="Cesar Aguilar — Full Stack Cloud & AI Engineer"
              className="h-full w-full rounded-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
