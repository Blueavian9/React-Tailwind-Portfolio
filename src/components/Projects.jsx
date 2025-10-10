import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    name: "Text2SpeechAPIPollyV3",
    technologies: "AWS-SDK Polly V3, Groq",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
    liveDemo: "https://text2speechpollyv3.netlify.app/",
    sound: "/sounds/owen-wilson-wow-80640.mp3",
  },
  {
    id: 2,
    name: "bookLibraryDocumentation",
    technologies: "Full Stack, Backend",
    image:
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/bookLibraryDocumentation",
    liveDemo: "https://booklibraryDocumentation.netlify.app/",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 3,
    name: "Nasa-Photo-Generator",
    technologies: "REACT.js, API's Front End",
    image:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/nasa-photo-of-the-day",
    liveDemo: "https://nasa-photo-of-the-day.netlify.app/",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
  {
    id: 4,
    name: "Langchain Agents RPG-Game",
    technologies: "GROQ_AI",
    image:
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/ai-groq-rpg",
    liveDemo: "https://ai-groq-rpg.netlify.app/",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 5,
    name: "React-Router-Movies",
    technologies: "React-Router, Link, NavLink",
    image:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/React-Router-Movies",
    liveDemo: "https://React-Router-Movies.netlify.app/",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
  {
    id: 6,
    name: "Asylum Report Generator",
    technologies: "Full Stack, Auth0",
    image:
      "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/asylum-rg-fe-starter",
    liveDemo: "https://asylum-rg-fe-starter.netlify.app/",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 7,
    name: "HTTP Todo App",
    technologies:
      "React, Tailwind, Testing, API Backend Routes, CRUD, React TransitionGroup, Node, ",
    image:
      "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/web-guided-project-HTTP",
    liveDemo: "https://web-guided-project-HTTP.netlify.app/",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
  {
    id: 8,
    name: "User-Onboarding",
    technologies: "Full Stack, Advanced React Hooks",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/User-Onboarding",
    liveDemo: "https://User-Onboarding.netlify.app/",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 9,
    name: "Parallax Website",
    technologies: "React, Spring, Framer Motion",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/parallax-website",
    liveDemo: "https://parallax-website.netlify.app",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
];

const Projects = () => {
  const audioRefs = useRef({});
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    const updateCursor = ({ clientX, clientY }) => {
      document.documentElement.style.setProperty("--x", `${clientX}px`);
      document.documentElement.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("pointermove", updateCursor, { passive: true });
    return () => window.removeEventListener("pointermove", updateCursor);
  }, []);

  const handleImageLoad = (projectId) => {
    setImagesLoaded(prev => ({ ...prev, [projectId]: true }));
  };

  const handleImageError = (projectId, e) => {
    console.log(`Image failed to load for project ${projectId}`);
    e.target.src = '/assets/projImg1.png'; // Fallback image
  };

  const playSound = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      console.log(`Playing sound for project ${id}:`, audio.src);
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.log('Audio play failed:', error);
        console.log('Audio element:', audio);
        console.log('Audio src:', audio.src);
        // Silently fail - audio is optional enhancement
      });
    } else {
      console.log(`No audio element found for project ${id}`);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
            Projects
          </span>
        </h2>

        {/* Hidden audio elements for any project with sound */}
        {projects.map(
          (p) =>
            p.sound && (
              <audio
                key={p.id}
                ref={(el) => {
                  audioRefs.current[p.id] = el;
                  if (el) {
                    console.log(`Audio element created for project ${p.id}:`, el.src);
                  }
                }}
                src={p.sound}
                preload="auto"
                onLoadStart={() => console.log(`Audio loading started for project ${p.id}:`, p.sound)}
                onCanPlay={() => console.log(`Audio can play for project ${p.id}`)}
                onError={(e) => console.log(`Audio error for project ${p.id}:`, e)}
              />
            )
        )}

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {projects.map((project) => (
            <li
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-300 hover:scale-105 group focus-within:scale-105"
              style={{ aspectRatio: "4 / 3", "--active": "0" }}
              onMouseEnter={() => playSound(project.id)}
              onClick={() => playSound(project.id)}
              role="article"
              aria-label={`Project: ${project.name}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  playSound(project.id);
                }
              }}
            >
              <div className="absolute inset-0 bg-gray-900 z-0"></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cover bg-center z-10"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Loading placeholder */}
                {!imagesLoaded[project.id] && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  className="w-full h-full object-cover opacity-0"
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.id)}
                  onError={(e) => handleImageError(project.id, e)}
                  style={{ opacity: imagesLoaded[project.id] ? 1 : 0 }}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
              <div className="relative z-30 p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.technologies}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  <a
                    href={project.github}
                    className="relative inline-block cursor-pointer bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 text-white border border-gray-400 px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    GitHub
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="relative inline-block cursor-pointer bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white border border-cyan-400 px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live demo`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40"
                style={{
                  background:
                    "radial-gradient(circle at var(--x) var(--y), hsla(0, 0%, 100%, 0.3), transparent 30vmin)",
                  backgroundAttachment: "fixed",
                }}
              ></div>
              <div
                className="absolute inset-0 pointer-events-none z-50"
                style={{
                  background:
                    "radial-gradient(circle at var(--x) var(--y), hsla(0, 0%, 100%, 0.7), transparent 30vmin), transparent",
                  backgroundAttachment: "fixed",
                  mask: `
                    linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
                    linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
                    linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
                    linear-gradient(white, white) 100% 50% / 4px 100% no-repeat
                  `,
                }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
