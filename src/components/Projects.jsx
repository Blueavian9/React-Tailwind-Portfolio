import { FaUpRightFromSquare, FaGithub } from "react-icons/fa6";
const projects = [
  {
    id: 1,
    name: "Valerie's Psychological Wellness",
    impact:
      "Live therapy booking SaaS with Stripe payments, Supabase auth, and AI-powered intake workflows.",
    tech: ["React", "Supabase", "Stripe", "Vercel", "Tailwind"],
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
    liveDemo: "https://valerie.u.netlify.app/",
  },
  {
    id: 2,
    name: "AI Agent (RAG + Tools)",
    impact:
      "Retrieval-augmented AI agent prototype with OpenAI, LangChain-style flows, and interactive tool integrations.",
    tech: ["OpenAI", "Node.js", "LangChain", "React", "API"],
    image:
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Blueavian9/ai-groq-rpg",
    liveDemo: "https://ai-groq-rpg.netlify.app/",
  },
  {
    id: 3,
    name: "OpenAI API Demo Suite",
    impact:
      "Production-ready API demo showcasing prompt handling, multi-modal responses, and polished UI flows.",
    tech: ["OpenAI", "React", "Tailwind", "JavaScript", "Cloud"],
    image:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
    liveDemo: "https://nasa-photo-of-the-day.netlify.app/",
  },
  {
    id: 4,
    name: "Secure Auth System",
    impact:
      "Role-based SaaS auth architecture built with secure sessions, Supabase, and modern access control.",
    tech: ["Supabase", "Auth", "Node.js", "React", "Security"],
    image:
      "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Blueavian9/asylum-rg-fe-starter",
    liveDemo: "https://asylum-rg-fe-starter.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-app-background py-20 text-app-text dark:bg-[#080D1A] dark:text-[#F0F4FF]"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3">Projects</p>
          <h2 className="text-4xl font-bold text-white">Lead with credibility.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Live products, AI integrations, secure auth systems, and real payment flows.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-app-border bg-app-surface/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 dark:border-[#1E2D47] dark:bg-[#0F1829]/95 dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:dark:border-cyan-400/30"
            >
              <div className="overflow-hidden rounded-3xl border border-cyan-500/10 bg-slate-100 mb-6 dark:bg-[#091724]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-app-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-app-text dark:bg-[#112240] dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#07191f] transition hover:bg-cyan-300"
                  >
                    Live Demo
                    <FaUpRightFromSquare className="h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10"
                  >
                    GitHub
                    <FaGithub className="h-4 w-4" />
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

// Mock 1:
// import { useEffect } from "react";

// const projects = [
//   {
//     id: 1,
//     name: "Text2SpeechAPIPollyV3",
//     technologies: "AWS-SDK Polly V3, Groq",
//     image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
//     liveDemo: "https://text2speechpollyv3.netlify.app/"
//   },
//   {
//     id: 2,
//     name: "bookLibraryDocumentation",
//     technologies: "Full Stack, Backend",
//     image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/bookLibraryDocumentation",
//     liveDemo: "https://booklibraryDocumentation.netlify.app/",
//   },
//   {
//     id: 3,
//     name: "Nasa-Photo-Generator",
//     technologies: "REACT.js, API's Front End",
//     image: "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/nasa-photo-of-the-day",
//     liveDemo: "https://nasa-photo-of-the-day.netlify.app/",
//   },
//   {
//     id: 4,
//     name: "Langchain Agents RPG-Game",
//     technologies: "GROQ_AI",
//     image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/ai-groq-rpg",
//     liveDemo: "https://ai-groq-rpg.netlify.app/",
//   },
//   {
//     id: 5,
//     name: "React-Router-Movies",
//     technologies: "React-Router, Link, NavLink",
//     image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/React-Router-Movies",
//     liveDemo: "https://React-Router-Movies.netlify.app/",
//   },
//   {
//     id: 6,
//     name: "Asylum Report Generator",
//     technologies: "Full Stack, Auth0",
//     image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/asylum-rg-fe-starter",
//     liveDemo: "https://asylum-rg-fe-starter.netlify.app/",
//   },
//   {
//     id: 7,
//     name: "HTTP Todo App",
//     technologies:
//       "React, Tailwind, Testing, API Backend Routes, CRUD, React TransitionGroup, Node, ",
//     image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/web-guided-project-HTTP",
//     liveDemo: "https://web-guided-project-HTTP.netlify.app/",
//   },
//   {
//     id: 8,
//     name: "User-Onboarding",
//     technologies: "Full Stack, Advanced React Hooks",
//     image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/User-Onboarding",
//     liveDemo: "https://User-Onboarding.netlify.app/",
//   },
//   {
//     id: 9,
//     name: "Parallax Website",
//     technologies: "React, Spring",
//     image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/",
//     liveDemo: "https://.netlify.app",
//   },
// ];

// const Projects = () => {
//   useEffect(() => {
//     const updateCursor = ({ clientX, clientY }) => {
//       document.documentElement.style.setProperty("--x", `${clientX}px`);
//       document.documentElement.style.setProperty("--y", `${clientY}px`);
//     };

//     window.addEventListener("pointermove", updateCursor, { passive: true });
//     return () => window.removeEventListener("pointermove", updateCursor);
//   }, []);

//   return (
//     <div className="bg-black text-white py-20" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Projects
//           </span>
//         </h2>
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
//           {projects.map((project) => (
//             <li
//               key={project.id}
//               className="bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-300 hover:scale-105 group"
//               style={{
//                 aspectRatio: "4 / 3",
//                 "--active": "0",
//               }}
//             >
//               <div className="absolute inset-0 bg-gray-900 z-0"></div>
//               <div
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cover bg-center z-10"
//                 style={{ backgroundImage: `url(${project.image})` }}
//               ></div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
//               <div className="relative z-30 p-6 h-full flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
//                   <p className="text-gray-400 mb-4">{project.technologies}</p>
//                 </div>

//                 <div className="flex justify-center">
//                   <a
//                     href={project.github}
//                     className="relative inline-block cursor-pointer bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 text-white border border-gray-400 px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40"
//                 style={{
//                   background:
//                     "radial-gradient(circle at var(--x) var(--y), hsla(0, 0%, 100%, 0.3), transparent 30vmin)",
//                   backgroundAttachment: "fixed",
//                 }}
//               ></div>
//               <div
//                 className="absolute inset-0 pointer-events-none z-50"
//                 style={{
//                   background:
//                     "radial-gradient(circle at var(--x) var(--y), hsla(0, 0%, 100%, 0.7), transparent 30vmin), transparent",
//                   backgroundAttachment: "fixed",
//                   mask: `
//                     linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
//                     linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
//                     linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
//                     linear-gradient(white, white) 100% 50% / 4px 100% no-repeat
//                   `,
//                 }}
//               ></div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Projects;
