import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import {
  FaCode,
  FaCloud,
  FaRobot,
  FaGraduationCap,
  FaChartLine,
  FaAward,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCertificate,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const skillGroups = [
  {
    label: "Frontend",
    pills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
    bar: "#38bdf8",
    score: 92,
  },
  {
    label: "Backend",
    pills: ["Node.js", "Express", "Supabase", "PostgreSQL", "REST APIs"],
    bar: "#34d399",
    score: 88,
  },
  {
    label: "AI / Cloud",
    pills: ["OpenAI", "AWS", "LangChain", "Stripe", "AWS Polly"],
    bar: "#a78bfa",
    score: 84,
  },
  {
    label: "Dev Tools",
    pills: ["GitHub Actions", "Docker", "CI/CD", "Vercel", "Jest"],
    bar: "#fbbf24",
    score: 79,
  },
];

const chartData = {
  labels: skillGroups.map((g) => g.label),
  datasets: [
    {
      label: "Proficiency",
      data: skillGroups.map((g) => g.score),
      backgroundColor: skillGroups.map((g) => g.bar),
      borderRadius: 10,
      borderSkipped: false,
      barThickness: 32,
    },
  ],
};

// Chart.js draws on a canvas, so Tailwind dark: classes can't reach it.
// Watch the <html> "dark" class and rebuild the options when it flips.
const useIsDark = () => {
  const read = () => document.documentElement.classList.contains("dark");
  const [isDark, setIsDark] = useState(read);

  useEffect(() => {
    const observer = new MutationObserver(() => setIsDark(read()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
};

const buildChartOptions = (isDark) => ({
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "rgba(8, 13, 26, 0.95)",
      titleColor: "#F0F4FF",
      bodyColor: "#8B9BB4",
      padding: 10,
      callbacks: { label: (ctx) => ` ${ctx.parsed.y}% proficiency` },
    },
  },
  scales: {
    x: {
      ticks: { color: isDark ? "#8B9BB4" : "#475569", font: { size: 12, weight: "500" } },
      grid: { display: false },
      border: { display: false },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: { color: isDark ? "#8B9BB4" : "#475569", stepSize: 25, font: { size: 11 } },
      grid: { color: isDark ? "rgba(148, 163, 184, 0.08)" : "#e2e8f0" },
      border: { display: false },
    },
  },
});

const SkillBar = ({ skill, animate }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-app-text dark:text-slate-200 font-medium text-sm">{skill.name}</span>
      <span className="text-app-muted dark:text-slate-400 text-xs tabular-nums">
        {skill.level}%
      </span>
    </div>
    <div className="w-full bg-app-border dark:bg-slate-700 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full rounded-full ${skill.color}`}
        style={{
          width: animate ? `${skill.level}%` : "0%",
          transition: animate ? "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
        }}
      />
    </div>
  </div>
);

/* Handwritten-style signature. Uses a script font stack that exists on most
   systems; add the optional Google Font <link> from the notes for the real look. */
const Signature = () => (
  <img
    src="/assets/Signature.webp"
    alt="Cesar Aguilar signature"
    width="400"
    height="133"
    loading="lazy"
    className="h-14 w-auto -rotate-2 mix-blend-multiply sm:h-16 dark:mix-blend-screen dark:invert"
  />
);

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const About = () => {
  const skillsRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);
  const isDark = useIsDark();
  const chartOptions = useMemo(() => buildChartOptions(isDark), [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "JavaScript / React",
      level: 95,
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "Node.js / Express", level: 90, color: "bg-gradient-to-r from-lime-400 to-green-600" },
    { name: "AWS / Cloud", level: 85, color: "bg-gradient-to-r from-sky-400 to-cyan-500" },
    {
      name: "AI / ML Integration",
      level: 88,
      color: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
    { name: "LangChain / RAG", level: 80, color: "bg-gradient-to-r from-violet-400 to-purple-600" },
    {
      name: "PostgreSQL / Supabase",
      level: 85,
      color: "bg-gradient-to-r from-teal-400 to-cyan-600",
    },
    { name: "Docker / DevOps", level: 78, color: "bg-gradient-to-r from-indigo-400 to-blue-600" },
  ];

  const achievements = [
    {
      icon: <FaCode className="text-app-accent" />,
      title: "5+ Years Experience",
      desc: "Full Stack development with modern technologies",
    },
    {
      icon: <FaCloud className="text-blue-400" />,
      title: "Cloud Architecture",
      desc: "AWS, DevOps pipelines, and scalable solutions",
    },
    {
      icon: <FaRobot className="text-purple-400" />,
      title: "AI Integration",
      desc: "OpenAI, AWS Polly V3, LangChain implementations",
    },
    {
      icon: <FaGraduationCap className="text-green-400" />,
      title: "Advanced Education",
      desc: "B.S. Cloud Network Engineering · M.S. AI/ML (WGU)",
    },
  ];

  const certifications = [
    { icon: <FaCloud className="text-blue-400" />, label: "AWS Cloud Practitioner" },
    { icon: <FaShieldAlt className="text-app-accent" />, label: "CompTIA Security+" },
    {
      icon: <FaCertificate className="text-purple-400" />,
      label: "WGU — B.S. Cloud & Network Eng.",
    },
    { icon: <FaRobot className="text-pink-400" />, label: "M.S. AI/ML (In Progress)" },
  ];

  const card =
    "rounded-2xl border border-app-border bg-app-surface p-8 dark:border-slate-700/50 dark:bg-slate-800/60";

  const goToContact = () => {
    const target = document.getElementById("contact");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-app-background text-app-text py-20 dark:bg-[#0a1628] dark:text-slate-100 transition-colors duration-500">
      {/* Photo fade: right/bottom edges melt into the card (mobile: top/bottom only) */}
      <style>{`
        .about-photo-mask {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 24%);
          mask-image: linear-gradient(to bottom, transparent 0%, #000 24%);
        }
        @media (min-width: 1024px) {
          .about-photo-mask {
            -webkit-mask-image:
              linear-gradient(to right, transparent 0%, #000 42%),
              linear-gradient(to top, transparent 0%, #000 26%);
            mask-image:
              linear-gradient(to right, transparent 0%, #000 42%),
              linear-gradient(to top, transparent 0%, #000 26%);
            -webkit-mask-composite: source-in;
            mask-composite: intersect;
          }
        }
      `}</style>

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.4em] text-app-accent mb-3">About</p>
          {/* TODO: pseudo text — edit later */}
          <h2 className="text-4xl font-bold text-app-text dark:text-white mb-4">
            Who you&apos;ll work with.
          </h2>
          <p className="text-lg text-app-muted dark:text-slate-400 max-w-2xl mx-auto">
            Full Stack Cloud & AI Engineer — building production systems that matter.
          </p>
        </div>

        {/* ===== Editorial About card (text left, photo blended right) ===== */}
        <div className="relative overflow-hidden rounded-2xl border border-app-border bg-app-surface shadow-xl dark:border-slate-700/50 dark:bg-slate-800/60 lg:-rotate-[0.6deg]">
          <div className="p-8 md:p-12 lg:w-[60%]">
            <h3 className="text-4xl font-bold text-app-text dark:text-white mb-4">
              Hello <span aria-hidden="true">👋</span>
            </h3>
            {/* TODO: pseudo text — edit later */}
            <p className="text-app-text dark:text-slate-200 mb-4">
              <span className="font-semibold">I&apos;m Cesar</span>{" "}
              <span className="text-app-muted dark:text-slate-400">
                (the Full Stack Cloud &amp; AI engineer behind this portfolio)
              </span>
            </p>

            <div className="space-y-4 text-app-muted dark:text-slate-300 text-sm leading-relaxed">
              <p>
                Hi, I&apos;m <span className="text-app-accent font-semibold">Cesar A. Aguilar</span>{" "}
                — a devoted husband to my wife{" "}
                <span className="text-app-text dark:text-white font-semibold">Neha</span> and proud
                pet dad to guinea pigs{" "}
                <span className="text-app-text dark:text-white font-semibold">Munchie</span> and
                <span className="text-app-text dark:text-white font-semibold"> Coco</span>.
              </p>
              <p>
                By day, I serve as a{" "}
                <span className="text-app-accent font-semibold">Security Officer</span> for Los
                Angeles Council District 14 in El Sereno, and I support community safety through
                weekend work with local organizations.
              </p>
              <p>
                When the uniform comes off, I turn to my other calling: becoming a world-class
                technologist. I&apos;m currently pursuing a{" "}
                <span className="text-app-accent font-semibold">
                  B.S. in Cloud &amp; Network Engineering
                </span>{" "}
                and a{" "}
                <span className="text-app-accent font-semibold">
                  M.S. in AI &amp; Machine Learning
                </span>{" "}
                at WGU.
              </p>
              <p>
                Every project I build — whether for a neighborhood nonprofit or an AI-powered
                startup — is fueled by the belief that technology should strengthen communities and
                create opportunities for everyone.
              </p>
            </div>

            <div className="mt-6">
              <Signature />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={goToContact}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-app-accent dark:text-[#080D1A] dark:hover:bg-app-accent-dim"
              >
                Let&apos;s Talk <FaArrowRight className="h-3 w-3" />
              </button>

              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-app-muted dark:text-slate-500">
                  Let&apos;s connect
                </p>
                <div className="flex items-center gap-4 text-app-muted dark:text-slate-400">
                  <a
                    href="https://www.linkedin.com/in/cesaradrianaguilar/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a
                    href="https://github.com/Blueavian9"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                    className="transition-colors hover:text-app-text dark:hover:text-white"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Photo — blended into the card */}
          <div className="relative h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[46%]">
            <img
              src="/assets/Cesar-Cover2.webp"
              alt="Cesar Aguilar — Full Stack Cloud & AI Engineer"
              className="about-photo-mask h-full w-full object-cover object-top"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>

        {/* ===== Certifications / Technical skills / Achievements ===== */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className={card}>
              <div className="flex items-center mb-4 gap-3">
                <FaCertificate className="text-xl text-yellow-400" />
                <h3 className="text-lg font-bold text-app-text dark:text-white">
                  Certifications &amp; Education
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-app-border bg-app-card hover:border-app-accent/40 transition-all duration-200 dark:border-slate-700 dark:bg-slate-700/30 dark:hover:border-app-accent/50"
                  >
                    <span className="text-base flex-shrink-0">{cert.icon}</span>
                    <span className="text-app-text dark:text-slate-300 text-xs font-medium leading-tight">
                      {cert.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={card}>
              <div className="flex items-center mb-5 gap-3">
                <FaAward className="text-2xl text-yellow-400" />
                <h3 className="text-xl font-bold text-app-text dark:text-white">
                  Key Achievements
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-xl border border-app-border bg-app-card hover:border-app-accent/40 hover:-translate-y-0.5 transition-all duration-200 dark:border-slate-700 dark:bg-slate-700/30"
                  >
                    <div className="flex items-center mb-2 gap-2">
                      <span className="text-xl">{a.icon}</span>
                      <h4 className="font-semibold text-app-text dark:text-white text-sm">
                        {a.title}
                      </h4>
                    </div>
                    <p className="text-app-muted dark:text-slate-400 text-xs leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={skillsRef}>
            <div className={card}>
              <div className="flex items-center mb-6 gap-3">
                <FaChartLine className="text-2xl text-app-accent" />
                <h3 className="text-xl font-bold text-app-text dark:text-white">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar key={i} skill={skill} animate={barsVisible} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== Skills (merged from Services.jsx) — navbar "Skills" anchor ===== */}
        <div id="skills" className="mt-20">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.4em] text-app-accent mb-3">Skills</p>
            <h2 className="text-4xl font-bold text-app-text dark:text-white mb-4">
              What I Build With
            </h2>
            <p className="mx-auto max-w-xl text-app-muted dark:text-slate-400 text-sm leading-relaxed">
              Four skill groups, clearly organized for recruiters and hiring managers.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg dark:border-cyan-500/10 dark:bg-[#081924] dark:shadow-[0_25px_80px_rgba(0,212,170,0.12)]">
            <div className="mb-6 flex flex-wrap gap-3">
              {skillGroups
                .flatMap((g) => g.pills)
                .map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 dark:border-[#1E2D47] dark:bg-[#112240] dark:text-slate-200"
                  >
                    {pill}
                  </span>
                ))}
            </div>

            <div className="rounded-[1.75rem] bg-slate-50 p-4 dark:bg-[#091726]">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* CTA — intentionally unchanged for now */}
        <div className="text-center mt-16">
          <div className="rounded-2xl border border-app-accent/20 bg-app-surface p-8 dark:bg-slate-800/40">
            <h3 className="text-2xl font-bold text-app-text dark:text-white mb-2">
              Open to Full-Time &amp; Contract Roles
            </h3>
            <p className="text-app-muted dark:text-slate-400 mb-8 max-w-xl mx-auto text-sm">
              Full Stack · Cloud · AI Integration · Los Angeles (open to remote).
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Blueavian9"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-app-border bg-app-card hover:border-app-accent/50 text-app-text dark:text-slate-200 dark:border-slate-600 dark:bg-slate-700/50 transition-all duration-200 text-sm font-medium"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cesaradrianaguilar/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-300 transition-all duration-200 text-sm font-medium"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
              <a
                href="/assets/Cesar-Aguilar-Resume.pdf"
                download="Cesar-Aguilar-Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-app-accent/40 bg-app-accent/10 hover:bg-app-accent/20 text-app-accent transition-all duration-200 text-sm font-medium"
              >
                <FaDownload className="text-lg" /> Resume PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
