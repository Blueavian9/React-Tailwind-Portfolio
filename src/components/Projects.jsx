import { useInView } from "../hooks/useInView";

const Projects = () => {
  const [gridRef, gridVisible] = useInView(0.1);

  const projects = [
    {
      title: "Holistic Psychology Wellness App",
      description:
        "HIPAA-conscious AI-enabled full-stack wellness platform with secure Auth0 authentication, Stripe payments, AI-enhanced booking and reporting, and OpenAI-powered prompt pipelines. Deployed and production-ready.",
      tags: [
        "React",
        "Node.js",
        "Vite",
        "Tailwind CSS",
        "OpenAI APIs",
        "Supabase",
        "Stripe",
        "Auth0",
      ],
      github: "https://github.com/blueavian9",
      demo: "https://valeriemunozpsyc.com",
      highlight: "HIPAA-Conscious · AI-Powered",
      icon: "🧠",
    },
    {
      title: "AI-Powered Educational Platform",
      description:
        "Full-stack platform showcasing AI-driven features: text-to-speech (AWS Polly V3), speech-to-text, vision analysis, and content moderation. Modular Express backend serving 500+ potential users with comprehensive API documentation.",
      tags: [
        "Node.js",
        "Express",
        "AWS Polly V3 SDK",
        "OpenAI APIs",
        "REST API",
      ],
      github: "https://github.com/blueavian9",
      demo: "https://github.com/blueavian9",
      highlight: "TTS · STT · Vision · AI Moderation",
      icon: "🎓",
    },
    {
      title: "AI Chatbot Summarizer (RAG)",
      description:
        "Knowledge-augmented AI chatbot using Retrieval-Augmented Generation to summarize school information with advanced search pipelines. Built with a team of 4 engineers with full state management and data persistence.",
      tags: ["React.js", "Node.js", "RAG", "LangChain", "OpenAI", "PostgreSQL"],
      github: "https://github.com/blueavian9",
      demo: "https://github.com/blueavian9",
      highlight: "RAG Architecture · Multi-Dev Team",
      icon: "🤖",
    },
    {
      title: "Secure Authentication System",
      description:
        "Production-grade login/signup system with JWT token-based auth, bcrypt password hashing, RBAC, and comprehensive Express middleware. Achieved 98% Jest unit test coverage rate with a hardened PostgreSQL schema.",
      tags: ["Express.js", "PostgreSQL", "JWT", "bcrypt.js", "Knex.js", "Jest"],
      github: "https://github.com/blueavian9",
      demo: "https://github.com/blueavian9",
      highlight: "98% Test Coverage · RBAC",
      icon: "🔐",
    },
    {
      title: "RESTful API Suite",
      description:
        "Scalable RESTful APIs for high-performance web apps with optimized SQL queries, Knex.js migrations, and full API documentation. Reduced response times by 40% through query optimization and efficient data handling.",
      tags: ["Node.js", "Express", "Knex.js", "SQLite", "PostgreSQL", "REST"],
      github: "https://github.com/blueavian9",
      demo: "https://github.com/blueavian9",
      highlight: "40% Faster · Fully Documented",
      icon: "⚡",
    },
    {
      title: "Cloud Ops AI Assistant (RAG)",
      description:
        "DevOps troubleshooting assistant powered by LangChain and RAG pipelines. Built with Python and Streamlit, it enables intelligent task execution, data transformation, and decision-support for cloud operations workflows.",
      tags: ["Python", "LangChain", "RAG", "Streamlit", "AWS", "Azure"],
      github: "https://github.com/blueavian9",
      demo: "https://github.com/blueavian9",
      highlight: "LangChain · Multi-Cloud DevOps",
      icon: "☁️",
    },
  ];

  const TagPill = ({ label }) => (
    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-400/20">
      {label}
    </span>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800/40 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Projects &amp; Builds
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Full-stack systems, AI integrations, and cloud-ready apps built with
            real users and production constraints in mind.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-md hover:-translate-y-1 hover:shadow-cyan-400/10"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0)" : "translateY(32px)",
                transition:
                  "opacity 0.5s ease-out " +
                  i * 0.1 +
                  "s, transform 0.5s ease-out " +
                  i * 0.1 +
                  "s",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{project.icon}</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 text-right leading-relaxed">
                  {project.highlight}
                </span>
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag, j) => (
                  <TagPill key={j} label={tag} />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors duration-200"
                >
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
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/blueavian9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-600 dark:text-cyan-400 text-sm font-medium hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors duration-200"
          >
            View all repositories on GitHub
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

export default Projects;
