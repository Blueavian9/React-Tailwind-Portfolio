const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Full Stack Engineer",
      company: "talkAnimate Inc.",
      location: "Los Angeles, CA",
      dates: "2024 – Present",
      bullets: [
        "Build and maintain scalable full-stack features using React, TypeScript, and Node.js in a production SaaS environment.",
        "Architect AWS infrastructure (EC2, S3, Lambda, RDS) and automate CI/CD pipelines with GitHub Actions.",
        "Collaborate cross-functionally with design and product to ship user-facing animation tooling at speed.",
        "Optimize front-end performance through lazy loading, code splitting, and Lighthouse auditing.",
      ],
      tags: ["React", "TypeScript", "AWS", "Node.js", "CI/CD"],
    },
    {
      type: "work",
      title: "Full Stack Developer — Freelance",
      company: "Self-Employed",
      location: "Los Angeles, CA (Remote)",
      dates: "2023 – Present",
      bullets: [
        "Designed and deployed a HIPAA-aware psychology SaaS (valeriemunozpsyc.com) using Vite, React, TypeScript, and Astro.",
        "Built a RAG-powered Cloud Ops AI assistant with Python, LangChain, and Streamlit for DevOps troubleshooting.",
        "Delivered a real-time parent–teacher communication platform (HallPass) with TypeScript and WebSockets.",
        "Managed Azure and AWS cloud deployments, DNS, and Vercel/Netlify hosting for multiple client projects.",
      ],
      tags: ["Python", "LangChain", "Azure", "Astro", "Vercel", "Netlify"],
    },
    {
      type: "work",
      title: "DevOps & Cloud Engineering",
      company: "Independent Projects",
      location: "Los Angeles, CA",
      dates: "2022 – Present",
      bullets: [
        "Designed and documented a microservices architecture visualizer using a mall-floor metaphor — blueprint diagram, interactive HTML, and layered system maps.",
        "Built and deployed Text-to-Speech applications using AWS Polly, API Gateway, and Lambda.",
        "Developed LangChain-powered RPG agents live on Netlify, demonstrating multi-agent orchestration patterns.",
        "Earned AWS and Azure cloud specializations with hands-on infrastructure management across both platforms.",
      ],
      tags: ["AWS Polly", "Lambda", "Microservices", "LangChain", "Terraform"],
    },
    {
      type: "volunteer",
      title: "Volunteer — Community Tech Educator",
      company: "Greater Los Angeles Area",
      location: "Los Angeles, CA",
      dates: "2021 – Present",
      bullets: [
        "Mentored aspiring developers from underrepresented communities on full-stack fundamentals and job search strategy.",
        "Facilitated coding workshops covering React, Python, and cloud basics for non-traditional learners.",
      ],
      tags: ["Mentorship", "Community", "Education"],
    },
  ];

  const TagPill = ({ label }) => (
    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-400/20">
      {label}
    </span>
  );

  const TypeBadge = ({ type }) =>
    type === "volunteer" ? (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
        Volunteer
      </span>
    ) : (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
        Work
      </span>
    );

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">
            Career Journey
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Experience &amp; Impact
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Full Stack Engineer and DevOps enthusiast with AWS &amp; Azure
            specializations — building, deploying, and optimizing scalable
            solutions from Los Angeles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6 group">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center mt-1.5 flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110
                      ${
                        exp.type === "volunteer"
                          ? "border-purple-400 bg-purple-50 dark:bg-purple-900/30"
                          : "border-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
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
                        className="w-4 h-4 text-cyan-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:shadow-sm">
                  {/* Card header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <TypeBadge type={exp.type} />
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {exp.dates}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">
                        {exp.company}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
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

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://linkedin.com/in/cesar-aguilar-blueavian9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-600 dark:text-cyan-400 text-sm font-medium hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors duration-200"
          >
            View full profile on LinkedIn
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
