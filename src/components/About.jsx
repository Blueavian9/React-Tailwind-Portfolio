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

/* ─── Animated skill bar ─────────────────────────────────────────── */
const SkillBar = ({ skill, animate }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="text-white font-semibold text-sm">{skill.name}</span>
      <span className="text-gray-400 text-sm">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all ease-out group-hover:shadow-lg`}
        style={{
          width: animate ? `${skill.level}%` : "0%",
          transition: animate
            ? "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
          boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
        }}
      />
    </div>
  </div>
);

/* ─── About ──────────────────────────────────────────────────────── */
const About = () => {
  const skillsRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);

  // Trigger bar animation when skills section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    // ── Frontend ──────────────────────────────────────────
    {
      name: "JavaScript / React",
      level: 95,
      color: "from-yellow-400 to-orange-500",
    },
    { name: "TypeScript", level: 85, color: "from-yellow-300 to-yellow-500" },
    { name: "Next.js", level: 83, color: "from-gray-300 to-gray-500" },

    // ── Backend ───────────────────────────────────────────
    {
      name: "Node.js / Express",
      level: 90,
      color: "from-lime-400 to-green-600",
    },
    { name: "Python", level: 82, color: "from-blue-300 to-indigo-500" },

    // ── Cloud & DevOps ────────────────────────────────────
    { name: "AWS / Cloud", level: 85, color: "from-blue-400 to-cyan-500" },
    { name: "DevOps / CI-CD", level: 85, color: "from-indigo-400 to-blue-600" },
    {
      name: "Docker / Kubernetes",
      level: 78,
      color: "from-sky-400 to-blue-500",
    },

    // ── AI & Data ─────────────────────────────────────────
    {
      name: "AI / ML Integration",
      level: 88,
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "LangChain / RAG",
      level: 80,
      color: "from-violet-400 to-purple-600",
    },

    // ── Database ──────────────────────────────────────────
    { name: "Database Design", level: 88, color: "from-teal-400 to-cyan-600" },
    {
      name: "PostgreSQL / MongoDB",
      level: 85,
      color: "from-green-400 to-teal-500",
    },
  ];

  const achievements = [
    {
      icon: <FaCode className="text-cyan-400" />,
      title: "5+ Years Experience",
      description: "Full Stack development with modern technologies",
    },
    {
      icon: <FaCloud className="text-blue-400" />,
      title: "Cloud Architecture",
      description: "AWS, DevOps pipelines, and scalable solutions",
    },
    {
      icon: <FaRobot className="text-purple-400" />,
      title: "AI Integration",
      description: "OpenAI, AWS Polly V3, LangChain implementations",
    },
    {
      icon: <FaGraduationCap className="text-green-400" />,
      title: "Advanced Education",
      description: "B.S. Cloud Network Engineering · M.S. AI/ML (WGU)",
    },
  ];

  const certifications = [
    {
      icon: <FaCloud className="text-blue-400" />,
      label: "AWS Cloud Practitioner",
    },
    {
      icon: <FaShieldAlt className="text-cyan-400" />,
      label: "CompTIA Security+",
    },
    {
      icon: <FaCertificate className="text-purple-400" />,
      label: "WGU — B.S. Cloud & Network Eng.",
    },
    {
      icon: <FaRobot className="text-pink-400" />,
      label: "M.S. AI/ML (In Progress)",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-[#141e30] to-[#243b55] text-white py-20"
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I build Full-Stack Apps with Payments, Auth, and Automation.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Story */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="flex items-center mb-6">
                <FaLightbulb className="text-3xl text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  My Odyssey
                </h3>
              </div>

              <div className="space-y-4 text-gray-300 font-mono leading-relaxed text-sm">
                <p>
                  Hi, I&apos;m Cesar A. Aguilar — a devoted husband to my wife
                  <span className="text-cyan-400 font-semibold"> Neha </span>
                  for over six years, and proud &ldquo;pet dad&rdquo; to two
                  spoiled guinea pigs,
                  <span className="text-teal-400 font-semibold"> Munchie </span>
                  and
                  <span className="text-teal-400 font-semibold"> Coco</span>.
                  They keep me company (and occasionally steal my snacks) while
                  I code late into the night.
                </p>

                <p>
                  By day, I serve as a
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Security Officer for Los Angeles Council District 14 in El
                    Sereno
                  </span>
                  , guarding Councilmember Ysabel Jurado&apos;s office and
                  supporting community safety. I also work Saturdays for the
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Lincoln Heights Youth Center
                  </span>{" "}
                  and the
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Hollenbeck LAPD Security Services Division
                  </span>
                  , serving LAPD posts including
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    PiperTech
                  </span>{" "}
                  and the
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Hyperion S.A.F.E. Center
                  </span>
                  — all while studying full time at
                  <span className="text-indigo-400 font-semibold">
                    {" "}
                    Western Governors University (WGU)
                  </span>
                  .
                </p>

                <p>
                  By passion, I volunteer my technical skills to local
                  organizations like
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    Barrio Action Youth &amp; Family Resource Center
                  </span>{" "}
                  and
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    College Bridge Academy
                  </span>
                  , building digital tools to help them grow and better serve
                  the neighborhood.
                </p>

                <p>
                  When the uniform comes off, I turn to my other calling:
                  becoming a world-class technologist. I&apos;m currently
                  pursuing a
                  <span className="text-indigo-400 font-semibold">
                    {" "}
                    B.S. in Cloud &amp; Network Engineering
                  </span>{" "}
                  and a
                  <span className="text-indigo-400 font-semibold">
                    {" "}
                    Master&apos;s in AI &amp; Machine Learning
                  </span>
                  , while refining my craft as a
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    Full Stack AI Integrations Systems Architect
                  </span>
                  .
                </p>

                <p>
                  It&apos;s a full life — long workdays, overtime shifts,
                  late-night coding sessions, and family time — but I
                  wouldn&apos;t trade it. Every project I build, whether for a
                  neighborhood non-profit or an AI-powered startup, is fueled by
                  my belief that technology should strengthen communities and
                  create opportunities for everyone.
                </p>
              </div>
            </div>

            {/* ── Certifications row ── */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="flex items-center mb-4">
                <FaCertificate className="text-2xl text-yellow-400 mr-3" />
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Certifications &amp; Education
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-700/40 border border-gray-600/30 hover:border-cyan-400/60 hover:shadow-md hover:shadow-cyan-400/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="text-lg flex-shrink-0">{cert.icon}</span>
                    <span className="text-gray-300 text-xs font-medium leading-tight">
                      {cert.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Skills & Achievements */}
          <div className="space-y-8" ref={skillsRef}>
            {/* Technical Skills */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="flex items-center mb-6">
                <FaChartLine className="text-3xl text-cyan-400 mr-4" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Technical Expertise
                </h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar key={i} skill={skill} animate={barsVisible} />
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="flex items-center mb-6">
                <FaAward className="text-3xl text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Key Achievements
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-xl bg-gray-700/30 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-3">
                      <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <h4 className="font-bold text-white text-sm">
                        {achievement.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA — GitHub + LinkedIn + Resume Download ── */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Open to Full-Time &amp; Contract Roles
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Full Stack · Cloud · AI Integration · Los Angeles (open to
              remote). Let&apos;s build something that actually matters.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/Blueavian9"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub Profile"
                className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-400/50 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
              >
                <FaGithub className="text-xl text-gray-300" />
                <span className="text-gray-300">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/cesaradrianaguilar/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-3 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 hover:border-blue-400 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-105"
              >
                <FaLinkedin className="text-xl text-blue-400" />
                <span className="text-blue-300">LinkedIn</span>
              </a>

              {/* Resume Download */}
              <a
                href="/assets/Cesar-Aguilar-Resume.pdf"
                download="Cesar-Aguilar-Resume.pdf"
                aria-label="Download Resume PDF"
                className="flex items-center gap-3 px-6 py-3 bg-teal-600/20 hover:bg-teal-600/30 border border-teal-500/40 hover:border-teal-400 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/30 hover:scale-105"
              >
                <FaDownload className="text-xl text-teal-400" />
                <span className="text-teal-300">Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
