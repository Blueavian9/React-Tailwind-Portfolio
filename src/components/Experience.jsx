const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Full Stack AI Integrations Systems Engineer",
      company: "Freelancer — Self-Employed",
      location: "Los Angeles, CA (Remote)",
      dates: "April 2024 – Present",
      bullets: [
        "Develop secure RESTful APIs integrating AWS Polly V3 SDK and OpenAI APIs for text generation, vision, speech, and content moderation.",
        "Build scalable backend systems with Node.js/Express supporting real-time AI-driven educational tools serving 1,000+ users.",
        "Implement CI/CD pipelines (GitHub Actions) improving system reliability by 35%.",
        "Lead security configurations across AWS environments — environment variables, API key security, RBAC.",
      ],
      tags: ["Node.js", "Express", "AWS Polly", "OpenAI", "CI/CD", "GitHub Actions"],
    },
    {
      type: "work",
      title: "Full Stack Software Engineer (Internship)",
      company: "TalkAnimate Inc.",
      location: "Burbank, CA (Remote)",
      dates: "April 2024 – November 2024",
      bullets: [
        "Built AI-driven educational tools integrating AWS Polly V3 SDK and OpenAI APIs (TTS, STT, vision, content moderation).",
        "Architected scalable Node.js/Express backend serving a real-time SaaS platform with 1,000+ concurrent users.",
        "Implemented CI/CD pipelines improving deployment reliability by 35% and accelerating release cadence.",
      ],
      tags: ["React", "TypeScript", "Node.js", "AWS", "OpenAI", "CI/CD"],
    },
    {
      type: "work",
      title: "Full Stack Software Developer",
      company: "Bloom Institute of Technology",
      location: "San Francisco, CA (Remote)",
      dates: "March 2021 – March 2024",
      bullets: [
        "Engineered a Full-Stack Asylum Report Generator with Auth0 authentication and PostgreSQL persistence.",
        "Designed RESTful APIs with Express.js, improving performance by 30% through query optimization.",
        "Achieved 98% Jest unit test coverage across all backend services.",
        "Collaborated in Agile sprint cycles ensuring timely, cross-functional delivery.",
      ],
      tags: ["Express.js", "PostgreSQL", "Auth0", "Jest", "Knex.js", "Agile"],
    },
    {
      type: "volunteer",
      title: "Volunteer — Community Tech Educator",
      company: "Greater Los Angeles Area",
      location: "Los Angeles, CA",
      dates: "2021 – Present",
      bullets: [
        "Mentored aspiring developers from underrepresented communities on full-stack fundamentals.",
        "Facilitated coding workshops covering React, Python, and cloud basics for non-traditional learners.",
      ],
      tags: ["Mentorship", "React", "Python", "Community", "Education"],
    },
  ];

  const TagPill = ({ label }) => (
    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-app-accent/10 text-app-accent border border-app-accent/20 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-800">
      {label}
    </span>
  );

  const TypeBadge = ({ type }) =>
    type === "volunteer" ? (
      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
        Volunteer
      </span>
    ) : (
      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-app-accent/10 text-app-accent dark:bg-cyan-900/20 dark:text-cyan-400 border border-app-accent/20 dark:border-cyan-800">
        Work
      </span>
    );

  return (
    <section
      id="experience"
      className="py-20 bg-app-surface text-app-text dark:bg-[#0a1628] dark:text-slate-100 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-app-accent mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl font-bold text-app-text dark:text-white">
            Experience &amp; Impact
          </h2>
          <p className="mt-3 text-app-muted dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Full Stack Engineer and AI Integration specialist — building, deploying, and optimizing
            scalable solutions from Los Angeles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-app-accent/50 via-app-accent/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6 group">
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center mt-1.5 flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 ${
                      exp.type === "volunteer"
                        ? "border-purple-400 bg-purple-50 dark:bg-purple-900/30"
                        : "border-app-accent bg-app-accent/10 dark:bg-cyan-900/20"
                    }`}
                  >
                    {exp.type === "volunteer" ? (
                      <svg
                        className="w-4 h-4 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-app-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-app-border bg-app-background p-6 transition-all duration-300 group-hover:border-app-accent/40 dark:border-slate-700 dark:bg-slate-800/50 dark:group-hover:border-cyan-500/40">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <TypeBadge type={exp.type} />
                        <span className="text-xs text-app-muted dark:text-slate-500">
                          {exp.dates}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-app-text dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-app-accent font-medium mt-0.5">{exp.company}</p>
                      <p className="text-xs text-app-muted dark:text-slate-500 mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm text-app-muted dark:text-slate-300 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-app-accent flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, k) => (
                      <TagPill key={k} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/cesaradrianaguilar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-app-accent/40 text-app-accent text-sm font-medium hover:bg-app-accent/10 transition-colors duration-200"
          >
            View full profile on LinkedIn
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
