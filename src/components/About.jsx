import React, { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaCloud,
  FaRobot,
  FaGraduationCap,
  FaLightbulb,
  FaChartLine,
  FaAward,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";

const SkillBar = ({ skill, animate }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-app-text dark:text-slate-200 font-medium text-sm">{skill.name}</span>
      <span className="text-app-muted dark:text-slate-400 text-xs tabular-nums">{skill.level}%</span>
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

const About = () => {
  const skillsRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);

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
    { name: "JavaScript / React", level: 95, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "Node.js / Express", level: 90, color: "bg-gradient-to-r from-lime-400 to-green-600" },
    { name: "AWS / Cloud", level: 85, color: "bg-gradient-to-r from-sky-400 to-cyan-500" },
    { name: "AI / ML Integration", level: 88, color: "bg-gradient-to-r from-purple-400 to-pink-500" },
    { name: "LangChain / RAG", level: 80, color: "bg-gradient-to-r from-violet-400 to-purple-600" },
    { name: "PostgreSQL / Supabase", level: 85, color: "bg-gradient-to-r from-teal-400 to-cyan-600" },
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
    { icon: <FaCertificate className="text-purple-400" />, label: "WGU — B.S. Cloud & Network Eng." },
    { icon: <FaRobot className="text-pink-400" />, label: "M.S. AI/ML (In Progress)" },
  ];

  const card =
    "rounded-2xl border border-app-border bg-app-surface p-8 dark:border-slate-700/50 dark:bg-slate-800/60";

  return (
    <section
      id="about"
      className="bg-app-background text-app-text py-20 dark:bg-[#0a1628] dark:text-slate-100 transition-colors duration-500"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-app-accent mb-3">About</p>
          <p className="text-lg text-app-muted dark:text-slate-400 max-w-2xl mx-auto">
            Full Stack Cloud & AI Engineer — building production systems that matter.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Story + Certs */}
          <div className="space-y-6">
            <div className={card}>
              <div className="flex items-center mb-5 gap-3">
                <FaLightbulb className="text-2xl text-yellow-400" />
                <h3 className="text-xl font-bold text-app-text dark:text-white">My Story</h3>
              </div>
              <div className="space-y-4 text-app-muted dark:text-slate-300 text-sm leading-relaxed">
                <p>
                  Hi, I&apos;m <span className="text-app-accent font-semibold">Cesar A. Aguilar</span> — a devoted husband
                  to my wife <span className="text-app-text dark:text-white font-semibold">Neha</span> and proud pet dad to
                  guinea pigs <span className="text-app-text dark:text-white font-semibold">Munchie</span> and
                  <span className="text-app-text dark:text-white font-semibold"> Coco</span>.
                </p>
                <p>
                  By day, I serve as a <span className="text-app-accent font-semibold">Security Officer</span> for Los Angeles
                  Council District 14 in El Sereno, and I support community safety through weekend work
                  with local organizations.
                </p>
                <p>
                  When the uniform comes off, I turn to my other calling: becoming a world-class
                  technologist. I&apos;m currently pursuing a <span className="text-app-accent font-semibold">B.S. in
                  Cloud & Network Engineering</span> and a <span className="text-app-accent font-semibold">M.S. in AI &
                  Machine Learning</span> at WGU.
                </p>
                <p>
                  Every project I build — whether for a neighborhood nonprofit or an AI-powered startup — is
                  fueled by the belief that technology should strengthen communities and create opportunities
                  for everyone.
                </p>
              </div>
            </div>

            {/* Certs */}
            <div className={card}>
              <div className="flex items-center mb-4 gap-3">
                <FaCertificate className="text-xl text-yellow-400" />
                <h3 className="text-lg font-bold text-app-text dark:text-white">Certifications &amp; Education</h3>
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
          </div>

          {/* Right — Skills + Achievements */}
          <div className="space-y-6" ref={skillsRef}>
            <div className={card}>
              <div className="flex items-center mb-6 gap-3">
                <FaChartLine className="text-2xl text-app-accent" />
                <h3 className="text-xl font-bold text-app-text dark:text-white">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar key={i} skill={skill} animate={barsVisible} />
                ))}
              </div>
            </div>

            <div className={card}>
              <div className="flex items-center mb-5 gap-3">
                <FaAward className="text-2xl text-yellow-400" />
                <h3 className="text-xl font-bold text-app-text dark:text-white">Key Achievements</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-xl border border-app-border bg-app-card hover:border-app-accent/40 hover:-translate-y-0.5 transition-all duration-200 dark:border-slate-700 dark:bg-slate-700/30"
                  >
                    <div className="flex items-center mb-2 gap-2">
                      <span className="text-xl">{a.icon}</span>
                      <h4 className="font-semibold text-app-text dark:text-white text-sm">{a.title}</h4>
                    </div>
                    <p className="text-app-muted dark:text-slate-400 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
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
