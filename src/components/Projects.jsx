import { FaUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    name: "Valerie's Psychological Wellness",
    impact:
      "Live therapy booking SaaS — real Stripe payments, Supabase auth, AI-powered intake workflows, and RBAC. Production app with paying users.",
    tech: ["React", "Supabase", "Stripe", "Vercel", "Tailwind"],
    badge: "Live · Paying Users",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400",
    github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
    liveDemo: "https://valerie.u.netlify.app/",
  },
  {
    id: 2,
    name: "AI Agent — RAG + Tools",
    impact:
      "Retrieval-augmented AI agent with OpenAI, LangChain-style flows, and interactive tool integrations. Demonstrates production-grade AI architecture.",
    tech: ["OpenAI", "Node.js", "LangChain", "React", "REST API"],
    badge: "AI / LangChain",
    badgeColor: "bg-violet-500/10 text-violet-600 border-violet-500/30 dark:text-violet-400",
    github: "https://github.com/Blueavian9/ai-groq-rpg",
    liveDemo: "https://ai-groq-rpg.netlify.app/",
  },
  {
    id: 3,
    name: "OpenAI API Demo Suite",
    impact:
      "Production-ready API demo showcasing prompt handling, multi-modal responses, and polished UI flows built with the OpenAI platform.",
    tech: ["OpenAI", "React", "Tailwind", "JavaScript", "AWS"],
    badge: "OpenAI",
    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/30 dark:text-sky-400",
    github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
    liveDemo: "https://nasa-photo-of-the-day.netlify.app/",
  },
  {
    id: 4,
    name: "Secure Auth System",
    impact:
      "Role-based SaaS auth architecture with secure sessions, Supabase, and modern access control patterns — deployable and production-ready.",
    tech: ["Supabase", "Auth", "Node.js", "React", "Security"],
    badge: "Auth · RBAC",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/30 dark:text-amber-400",
    github: "https://github.com/Blueavian9/asylum-rg-fe-starter",
    liveDemo: "https://asylum-rg-fe-starter.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#080D1A] py-20 text-[#F0F4FF]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.4em] text-app-accent mb-3">Projects</p>
          <h2 className="text-4xl font-bold text-app-text dark:text-white mb-4">
            Built for Production
          </h2>
          <p className="mx-auto max-w-2xl text-app-muted dark:text-slate-400 text-sm leading-relaxed">
            Live products with real payments, AI integrations, and secure auth systems — not just
            demos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-[#1E2D47] bg-[#0F1829]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="overflow-hidden rounded-3xl border border-cyan-500/10 bg-[#091724] mb-6">
                <img
                  src={`https://images.pexels.com/photos/${[577585, 163064, 2159, 5668858][project.id - 1]}/pexels-photo-${[577585, 163064, 2159, 5668858][project.id - 1]}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={project.name}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-app-text dark:text-white leading-snug">
                    {project.name}
                  </h3>
                  <span
                    className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-app-muted dark:text-slate-400 flex-1">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#112240] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-app-accent px-4 py-2 text-xs font-semibold text-[#080D1A] transition hover:bg-app-accent-dim"
                  >
                    Live Demo <FaUpRightFromSquare className="h-3 w-3" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-app-border bg-app-surface px-4 py-2 text-xs font-semibold text-app-muted transition hover:border-app-accent/40 hover:text-app-text dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-cyan-500/40 dark:hover:text-white"
                  >
                    GitHub <FaGithub className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
