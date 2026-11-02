// src/components/About.jsx
// Single merged section: Hero + About (Ivo-style card) + Skills.
// Renders three sibling <section>s so the Navbar anchors #home, #about, #skills all work.
// Photo: expects a transparent cutout at /public/assets/Cesar-Cutout.png (see PHOTO_SRC).
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaAward,
  FaCertificate,
  FaCloud,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PHOTO_SRC = "/assets/Cesar-Cutout.png";
const RESUME_HREF = "/assets/Cesar-Aguilar-Resume.pdf";
const LINKEDIN = "https://www.linkedin.com/in/cesaradrianaguilar/";
const GITHUB = "https://github.com/Blueavian9";
const EMAIL = "mailto:blueavian9@gmail.com";

const heroStack = ["React", "Node", "OpenAI", "AWS"];

const skillGroups = [
  {
    label: "Frontend",
    icon: FaCode,
    accent: "text-sky-400",
    glow: "hover:shadow-[0_0_40px_rgba(56,189,248,0.16)]",
    pills: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Native"],
    usedIn: "Production client apps and this portfolio",
  },
  {
    label: "Backend & Data",
    icon: FaServer,
    accent: "text-emerald-400",
    glow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.16)]",
    pills: ["Node.js", "Express", "PostgreSQL", "Neon", "REST APIs", "Stripe"],
    usedIn: "Live billing and data flows for paying users",
  },
  {
    label: "AI & Cloud",
    icon: FaRobot,
    accent: "text-violet-400",
    glow: "hover:shadow-[0_0_40px_rgba(167,139,250,0.18)]",
    pills: ["OpenAI APIs", "LangChain", "AWS", "AWS Polly V3"],
    usedIn: "AI features shipped inside real products",
  },
  {
    label: "Dev Tools",
    icon: FaTools,
    accent: "text-amber-400",
    glow: "hover:shadow-[0_0_40px_rgba(251,191,36,0.16)]",
    pills: ["GitHub Actions", "CI/CD", "Docker", "Vercel", "Jest"],
    usedIn: "Branch-protected, PR-based delivery",
  },
];

const credentials = [
  { icon: FaCloud, tone: "text-blue-400", label: "AWS Cloud Practitioner", note: "Certification" },
  { icon: FaShieldAlt, tone: "text-app-accent", label: "CompTIA Security+", note: "Certification" },
  {
    icon: FaGraduationCap,
    tone: "text-purple-400",
    label: "B.S. Cloud & Network Engineering",
    note: "WGU · In progress",
  },
  {
    icon: FaRobot,
    tone: "text-pink-400",
    label: "M.S. AI & Machine Learning",
    note: "WGU · In progress",
  },
];

const achievements = [
  {
    icon: FaCode,
    tone: "text-app-accent",
    title: "5+ Years Building",
    desc: "Full stack development, freelance client work since 2020.",
  },
  {
    icon: FaCloud,
    tone: "text-blue-400",
    title: "Cloud Delivery",
    desc: "AWS, CI/CD pipelines and protected-branch PR workflows.",
  },
  {
    icon: FaRobot,
    tone: "text-purple-400",
    title: "AI in Production",
    desc: "OpenAI, AWS Polly V3 and LangChain inside shipped products.",
  },
  {
    icon: FaAward,
    tone: "text-yellow-400",
    title: "Digital Services Lead",
    desc: "Leading digital delivery at Raneshca Digital Group.",
  },
];

/* ------------------------------------------------------------------ */
/* Signature: Cesar's own signature image, /public/assets/Signature.webp. */
/* It is black on white, so blend modes make the white disappear:         */
/* light = multiply, dark = invert + screen.                              */
/* ------------------------------------------------------------------ */

const Signature = ({ className = "h-14 sm:h-16" }) => (
  <img
    src="/assets/Signature.webp"
    alt="Cesar Aguilar signature"
    width="400"
    height="133"
    loading="lazy"
    className={`w-auto -rotate-2 mix-blend-multiply dark:mix-blend-screen dark:invert ${className}`}
  />
);

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

// Fade/slide-in once when scrolled into view. Skips animation for reduced motion.
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, seen];
};

const MonoLabel = ({ children, className = "" }) => (
  <p className={`ab-mono text-[11px] uppercase tracking-[0.32em] text-app-accent ${className}`}>
    {children}
  </p>
);

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function About() {
  const [skillsRef, skillsSeen] = useInView(0.15);

  const goTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const tile =
    "rounded-2xl border border-app-border bg-app-surface dark:border-slate-700/50 dark:bg-slate-800/60";

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap");
        .ab-sans { font-family: "Inter", ui-sans-serif, system-ui, sans-serif; }
        .ab-mono { font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace; }

        /* Silhouette fade: mobile fades the bottom only, desktop fades left + bottom */
        .ab-photo-mask {
          -webkit-mask-image: linear-gradient(to top, transparent 0%, #000 22%);
          mask-image: linear-gradient(to top, transparent 0%, #000 22%);
        }
        @media (min-width: 1024px) {
          .ab-photo-mask {
            -webkit-mask-image:
              linear-gradient(to right, transparent 0%, #000 38%),
              linear-gradient(to top, transparent 0%, #000 24%);
            mask-image:
              linear-gradient(to right, transparent 0%, #000 38%),
              linear-gradient(to top, transparent 0%, #000 24%);
            -webkit-mask-composite: source-in;
            mask-composite: intersect;
          }
        }
      `}</style>

      {/* ============================ HERO ============================ */}
      <section
        id="home"
        className="ab-sans relative overflow-hidden bg-app-background pt-24 pb-10 text-app-text transition-colors duration-500 md:pt-28 dark:bg-[rgb(8,13,26)] dark:text-slate-100"
      >
        <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] dark:block" />
        <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_at_50%_30%,rgba(0,212,170,0.14),transparent_45%)] dark:block" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <a
            href={EMAIL}
            className="ab-mono inline-flex items-center gap-3 rounded-full border border-app-accent/30 bg-app-accent/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-app-text dark:text-[#D4E5E2]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-app-accent" />
            Open to remote roles · blueavian9@gmail.com
          </a>

          <p className="ab-mono mt-8 text-xs font-medium uppercase tracking-[0.3em] text-app-accent">
            Cesar A. Aguilar
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-app-text sm:text-5xl lg:text-6xl dark:text-[#F5F7FF]">
            Full Stack Cloud &amp; AI Engineer
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-app-muted sm:text-xl dark:text-[#94A3B8]">
            I build production SaaS apps powered by AI.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {heroStack.map((tech) => (
              <span
                key={tech}
                className="ab-mono rounded-full border border-app-border bg-app-surface px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-app-muted dark:border-[#26344F] dark:bg-[#131B33] dark:text-[#C5D0E0]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-app-accent px-6 py-3 text-sm font-semibold text-[#080D1A] shadow-[0_0_24px_rgba(0,212,170,0.22)] transition-all duration-200 hover:bg-app-accent-dim hover:shadow-[0_0_32px_rgba(0,212,170,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-app-accent"
            >
              <FaDownload className="text-xs opacity-80" />
              Download Resume
            </a>
            <button
              type="button"
              onClick={goTo("projects")}
              className="inline-flex items-center gap-2 rounded-full border border-app-accent bg-transparent px-6 py-3 text-sm font-semibold text-app-accent transition-all duration-200 hover:bg-app-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-app-accent"
            >
              See My Work
              <FaArrowRight className="text-xs opacity-80" />
            </button>
          </div>
        </div>
      </section>

      {/* ====================== ABOUT (Ivo-style card) ====================== */}
      <section
        id="about"
        className="ab-sans bg-app-background py-16 text-app-text transition-colors duration-500 md:py-20 dark:bg-[rgb(8,13,26)] dark:text-slate-100"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <header className="mb-10">
            <MonoLabel>About</MonoLabel>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-app-text md:text-5xl dark:text-white">
              Who you&apos;ll work with.
            </h2>
            <p className="mt-3 text-base text-app-muted dark:text-slate-400">
              Meet your full stack cloud &amp; AI engineer.
            </p>
          </header>

          <div className="relative overflow-hidden rounded-3xl border border-app-border bg-app-surface shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] lg:-rotate-[0.8deg] dark:border-slate-700/50 dark:bg-slate-800/60 dark:shadow-[0_24px_80px_-20px_rgba(0,212,170,0.12)]">
            <div className="p-8 md:p-12 lg:w-[58%] lg:pb-14">
              <h3 className="text-4xl font-semibold tracking-tight text-app-text dark:text-white">
                Hello <span aria-hidden="true">👋</span>
              </h3>
              <p className="mt-4 text-base font-semibold text-app-text dark:text-slate-100">
                I&apos;m Cesar{" "}
                <span className="font-normal text-app-muted dark:text-slate-400">
                  (the engineer behind this portfolio)
                </span>
              </p>

              <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-app-muted md:text-base dark:text-slate-300">
                <p>
                  I&apos;m a self-taught full stack engineer and the Digital Services Lead at
                  Raneshca Digital Group, building production apps with React, Node, Stripe and
                  OpenAI. I also take on freelance projects for founders and small businesses.
                </p>
                <p>
                  Outside of code, I&apos;m a devoted husband to my wife{" "}
                  <span className="font-semibold text-app-text dark:text-white">Neha</span> and
                  proud pet dad to guinea pigs{" "}
                  <span className="font-semibold text-app-text dark:text-white">Munchie</span> and{" "}
                  <span className="font-semibold text-app-text dark:text-white">Coco</span>. By day
                  I serve as a{" "}
                  <span className="font-semibold text-app-text dark:text-white">
                    Security Officer
                  </span>{" "}
                  for Los Angeles Council District 14 in El Sereno.
                </p>
                <p>
                  When the uniform comes off, I&apos;m becoming a world-class technologist,
                  currently pursuing a B.S. in Cloud &amp; Network Engineering and an M.S. in AI
                  &amp; Machine Learning at WGU.
                </p>
                <p>
                  Every project I build, whether for a neighborhood nonprofit or an AI-powered
                  startup, is fueled by the belief that technology should strengthen communities and
                  create opportunities for everyone.
                </p>
              </div>

              <div className="mt-8">
                <Signature />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                <button
                  type="button"
                  onClick={goTo("contact")}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-app-accent dark:bg-app-accent dark:text-[#080D1A] dark:hover:bg-app-accent-dim"
                >
                  Let&apos;s Talk <FaArrowRight className="h-3 w-3" />
                </button>

                <div>
                  <p className="ab-mono mb-1.5 text-[10px] uppercase tracking-[0.28em] text-app-muted dark:text-slate-500">
                    Let&apos;s connect
                  </p>
                  <div className="flex items-center gap-4 text-app-muted dark:text-slate-400">
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="LinkedIn"
                      className="transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="GitHub"
                      className="transition-colors hover:text-app-text dark:hover:text-white"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href={EMAIL}
                      aria-label="Email Cesar"
                      className="transition-colors hover:text-app-accent"
                    >
                      <FaEnvelope className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Silhouette — transparent cutout, melts into the card */}
            <div className="relative h-80 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[46%]">
              <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_at_70%_55%,rgba(0,212,170,0.12),transparent_60%)] dark:block" />
              <img
                src={PHOTO_SRC}
                alt="Cesar Aguilar, Full Stack Cloud & AI Engineer"
                className="ab-photo-mask absolute inset-0 h-full w-full object-contain object-bottom contrast-[1.05] lg:object-right-bottom"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Credentials + Achievements */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className={`${tile} p-7`}>
              <div className="mb-5 flex items-center gap-3">
                <FaCertificate className="text-lg text-yellow-400" />
                <h3 className="text-lg font-semibold text-app-text dark:text-white">
                  Certifications &amp; Education
                </h3>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {credentials.map(({ icon: Icon, tone, label, note }) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl border border-app-border bg-app-card px-4 py-3 transition-colors duration-200 hover:border-app-accent/40 dark:border-slate-700 dark:bg-slate-700/30"
                  >
                    <Icon className={`mt-0.5 shrink-0 text-base ${tone}`} aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-medium leading-snug text-app-text dark:text-slate-200">
                        {label}
                      </span>
                      <span className="ab-mono mt-1 block text-[10px] uppercase tracking-[0.18em] text-app-muted dark:text-slate-500">
                        {note}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${tile} p-7`}>
              <div className="mb-5 flex items-center gap-3">
                <FaAward className="text-lg text-yellow-400" />
                <h3 className="text-lg font-semibold text-app-text dark:text-white">
                  Key Achievements
                </h3>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {achievements.map(({ icon: Icon, tone, title, desc }) => (
                  <li
                    key={title}
                    className="rounded-xl border border-app-border bg-app-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-app-accent/40 dark:border-slate-700 dark:bg-slate-700/30"
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <Icon className={`text-base ${tone}`} aria-hidden="true" />
                      <h4 className="text-sm font-semibold text-app-text dark:text-white">
                        {title}
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed text-app-muted dark:text-slate-400">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ SKILLS ============================ */}
      <section
        id="skills"
        className="ab-sans bg-app-background pb-20 pt-4 text-app-text transition-colors duration-500 dark:bg-[rgb(8,13,26)] dark:text-slate-100"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <header className="mb-10">
            <MonoLabel>Skills</MonoLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-app-text md:text-4xl dark:text-white">
              What I build with.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-app-muted dark:text-slate-400">
              The tools I reach for to ship production apps, grouped by what they do.
            </p>
          </header>

          <div ref={skillsRef} className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {skillGroups.map(({ label, icon: Icon, accent, glow, pills, usedIn }, i) => (
              <article
                key={label}
                style={{ transitionDelay: skillsSeen ? `${i * 90}ms` : "0ms" }}
                className={`${tile} p-7 transition-all duration-700 hover:-translate-y-1 hover:border-app-accent/40 ${glow} ${
                  skillsSeen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-app-border bg-app-card dark:border-slate-700 dark:bg-slate-700/40">
                    <Icon className={`text-lg ${accent}`} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-app-text dark:text-white">{label}</h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {pills.map((pill) => (
                    <li
                      key={pill}
                      className="ab-mono rounded-full border border-app-border bg-app-card px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-app-text dark:border-[#1E2D47] dark:bg-[#112240] dark:text-slate-200"
                    >
                      {pill}
                    </li>
                  ))}
                </ul>

                <p className="ab-mono mt-5 border-t border-app-border pt-4 text-[10px] uppercase tracking-[0.22em] text-app-muted dark:border-slate-700/60 dark:text-slate-500">
                  Used in · <span className="normal-case tracking-normal">{usedIn}</span>
                </p>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-app-accent/20 bg-app-surface p-8 text-center dark:bg-slate-800/40">
            <h3 className="text-2xl font-semibold text-app-text dark:text-white">
              Open to Full-Time &amp; Contract Roles
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-app-muted dark:text-slate-400">
              Full Stack · Cloud · AI Integration · Los Angeles (open to remote).
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 rounded-full border border-app-border bg-app-card px-6 py-3 text-sm font-medium text-app-text transition-all duration-200 hover:border-app-accent/50 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-600 transition-all duration-200 hover:bg-blue-500/20 dark:text-blue-300"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
              <a
                href={RESUME_HREF}
                download="Cesar-Aguilar-Resume.pdf"
                className="flex items-center gap-2 rounded-full border border-app-accent/40 bg-app-accent/10 px-6 py-3 text-sm font-medium text-app-accent transition-all duration-200 hover:bg-app-accent/20"
              >
                <FaDownload className="text-lg" /> Resume PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//MOCK 2: import React, { useEffect, useRef, useState } from "react";
// import {
//   FaCode,
//   FaCloud,
//   FaRobot,
//   FaGraduationCap,
//   FaLightbulb,
//   FaChartLine,
//   FaAward,
//   FaGithub,
//   FaLinkedin,
//   FaDownload,
//   FaCertificate,
//   FaShieldAlt,
// } from "react-icons/fa";

// const SkillBar = ({ skill, animate }) => (
//   <div className="group">
//     <div className="flex justify-between items-center mb-1.5">
//       <span className="text-app-text dark:text-slate-200 font-medium text-sm">{skill.name}</span>
//       <span className="text-app-muted dark:text-slate-400 text-xs tabular-nums">{skill.level}%</span>
//     </div>
//     <div className="w-full bg-app-border dark:bg-slate-700 rounded-full h-2 overflow-hidden">
//       <div
//         className={`h-full rounded-full ${skill.color}`}
//         style={{
//           width: animate ? `${skill.level}%` : "0%",
//           transition: animate ? "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
//           boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
//         }}
//       />
//     </div>
//   </div>
// );

// const About = () => {
//   const skillsRef = useRef(null);
//   const [barsVisible, setBarsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setBarsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.25 }
//     );

//     if (skillsRef.current) observer.observe(skillsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const skills = [
//     { name: "JavaScript / React", level: 95, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
//     { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
//     { name: "Node.js / Express", level: 90, color: "bg-gradient-to-r from-lime-400 to-green-600" },
//     { name: "AWS / Cloud", level: 85, color: "bg-gradient-to-r from-sky-400 to-cyan-500" },
//     { name: "AI / ML Integration", level: 88, color: "bg-gradient-to-r from-purple-400 to-pink-500" },
//     { name: "LangChain / RAG", level: 80, color: "bg-gradient-to-r from-violet-400 to-purple-600" },
//     { name: "PostgreSQL / Supabase", level: 85, color: "bg-gradient-to-r from-teal-400 to-cyan-600" },
//     { name: "Docker / DevOps", level: 78, color: "bg-gradient-to-r from-indigo-400 to-blue-600" },
//   ];

//   const achievements = [
//     {
//       icon: <FaCode className="text-app-accent" />,
//       title: "5+ Years Experience",
//       desc: "Full Stack development with modern technologies",
//     },
//     {
//       icon: <FaCloud className="text-blue-400" />,
//       title: "Cloud Architecture",
//       desc: "AWS, DevOps pipelines, and scalable solutions",
//     },
//     {
//       icon: <FaRobot className="text-purple-400" />,
//       title: "AI Integration",
//       desc: "OpenAI, AWS Polly V3, LangChain implementations",
//     },
//     {
//       icon: <FaGraduationCap className="text-green-400" />,
//       title: "Advanced Education",
//       desc: "B.S. Cloud Network Engineering · M.S. AI/ML (WGU)",
//     },
//   ];

//   const certifications = [
//     { icon: <FaCloud className="text-blue-400" />, label: "AWS Cloud Practitioner" },
//     { icon: <FaShieldAlt className="text-app-accent" />, label: "CompTIA Security+" },
//     { icon: <FaCertificate className="text-purple-400" />, label: "WGU — B.S. Cloud & Network Eng." },
//     { icon: <FaRobot className="text-pink-400" />, label: "M.S. AI/ML (In Progress)" },
//   ];

//   const card =
//     "rounded-2xl border border-app-border bg-app-surface p-8 dark:border-slate-700/50 dark:bg-slate-800/60";

//   return (
//     <section
//       id="about"
//       className="bg-app-background text-app-text py-20 dark:bg-[#0a1628] dark:text-slate-100 transition-colors duration-500"
//     >
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm uppercase tracking-[0.4em] text-app-accent mb-3">About</p>
//           <p className="text-lg text-app-muted dark:text-slate-400 max-w-2xl mx-auto">
//             Full Stack Cloud & AI Engineer — building production systems that matter.
//           </p>
//         </div>

//         {/* Two-column */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           {/* Left — Story + Certs */}
//           <div className="space-y-6">
//             <div className={card}>
//               <div className="flex items-center mb-5 gap-3">
//                 <FaLightbulb className="text-2xl text-yellow-400" />
//                 <h3 className="text-xl font-bold text-app-text dark:text-white">My Story</h3>
//               </div>
//               <div className="space-y-4 text-app-muted dark:text-slate-300 text-sm leading-relaxed">
//                 <p>
//                   Hi, I&apos;m <span className="text-app-accent font-semibold">Cesar A. Aguilar</span> — a devoted husband
//                   to my wife <span className="text-app-text dark:text-white font-semibold">Neha</span> and proud pet dad to
//                   guinea pigs <span className="text-app-text dark:text-white font-semibold">Munchie</span> and
//                   <span className="text-app-text dark:text-white font-semibold"> Coco</span>.
//                 </p>
//                 <p>
//                   By day, I serve as a <span className="text-app-accent font-semibold">Security Officer</span> for Los Angeles
//                   Council District 14 in El Sereno, and I support community safety through weekend work
//                   with local organizations.
//                 </p>
//                 <p>
//                   When the uniform comes off, I turn to my other calling: becoming a world-class
//                   technologist. I&apos;m currently pursuing a <span className="text-app-accent font-semibold">B.S. in
//                   Cloud & Network Engineering</span> and a <span className="text-app-accent font-semibold">M.S. in AI &
//                   Machine Learning</span> at WGU.
//                 </p>
//                 <p>
//                   Every project I build — whether for a neighborhood nonprofit or an AI-powered startup — is
//                   fueled by the belief that technology should strengthen communities and create opportunities
//                   for everyone.
//                 </p>
//               </div>
//             </div>

//             {/* Certs */}
//             <div className={card}>
//               <div className="flex items-center mb-4 gap-3">
//                 <FaCertificate className="text-xl text-yellow-400" />
//                 <h3 className="text-lg font-bold text-app-text dark:text-white">Certifications &amp; Education</h3>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {certifications.map((cert, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-3 px-4 py-3 rounded-xl border border-app-border bg-app-card hover:border-app-accent/40 transition-all duration-200 dark:border-slate-700 dark:bg-slate-700/30 dark:hover:border-app-accent/50"
//                   >
//                     <span className="text-base flex-shrink-0">{cert.icon}</span>
//                     <span className="text-app-text dark:text-slate-300 text-xs font-medium leading-tight">
//                       {cert.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right — Skills + Achievements */}
//           <div className="space-y-6" ref={skillsRef}>
//             <div className={card}>
//               <div className="flex items-center mb-6 gap-3">
//                 <FaChartLine className="text-2xl text-app-accent" />
//                 <h3 className="text-xl font-bold text-app-text dark:text-white">Technical Skills</h3>
//               </div>
//               <div className="space-y-4">
//                 {skills.map((skill, i) => (
//                   <SkillBar key={i} skill={skill} animate={barsVisible} />
//                 ))}
//               </div>
//             </div>

//             <div className={card}>
//               <div className="flex items-center mb-5 gap-3">
//                 <FaAward className="text-2xl text-yellow-400" />
//                 <h3 className="text-xl font-bold text-app-text dark:text-white">Key Achievements</h3>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {achievements.map((a, i) => (
//                   <div
//                     key={i}
//                     className="group p-4 rounded-xl border border-app-border bg-app-card hover:border-app-accent/40 hover:-translate-y-0.5 transition-all duration-200 dark:border-slate-700 dark:bg-slate-700/30"
//                   >
//                     <div className="flex items-center mb-2 gap-2">
//                       <span className="text-xl">{a.icon}</span>
//                       <h4 className="font-semibold text-app-text dark:text-white text-sm">{a.title}</h4>
//                     </div>
//                     <p className="text-app-muted dark:text-slate-400 text-xs leading-relaxed">{a.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-16">
//           <div className="rounded-2xl border border-app-accent/20 bg-app-surface p-8 dark:bg-slate-800/40">
//             <h3 className="text-2xl font-bold text-app-text dark:text-white mb-2">
//               Open to Full-Time &amp; Contract Roles
//             </h3>
//             <p className="text-app-muted dark:text-slate-400 mb-8 max-w-xl mx-auto text-sm">
//               Full Stack · Cloud · AI Integration · Los Angeles (open to remote).
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <a
//                 href="https://github.com/Blueavian9"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="flex items-center gap-2 px-6 py-3 rounded-full border border-app-border bg-app-card hover:border-app-accent/50 text-app-text dark:text-slate-200 dark:border-slate-600 dark:bg-slate-700/50 transition-all duration-200 text-sm font-medium"
//               >
//                 <FaGithub className="text-lg" /> GitHub
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/cesaradrianaguilar/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-300 transition-all duration-200 text-sm font-medium"
//               >
//                 <FaLinkedin className="text-lg" /> LinkedIn
//               </a>
//               <a
//                 href="/assets/Cesar-Aguilar-Resume.pdf"
//                 download="Cesar-Aguilar-Resume.pdf"
//                 className="flex items-center gap-2 px-6 py-3 rounded-full border border-app-accent/40 bg-app-accent/10 hover:bg-app-accent/20 text-app-accent transition-all duration-200 text-sm font-medium"
//               >
//                 <FaDownload className="text-lg" /> Resume PDF
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
