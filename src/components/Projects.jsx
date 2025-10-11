import { useEffect, useRef, useState } from "react";
import { FiGithub, FiExternalLink, FiVideo } from "react-icons/fi";

const projects = [
  {
    id: 1,
    name: "Text2SpeechAPIPollyV3",
    technologies: "AWS-SDK Polly V3, Groq",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
    liveDemo: "https://text2speechpollyv3.netlify.app/",
    loomVideo: "https://www.loom.com/share/your-video-id-1",
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
    loomVideo: "https://www.loom.com/share/your-video-id-2",
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
    loomVideo: "https://www.loom.com/share/your-video-id-3",
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
    loomVideo: "https://www.loom.com/share/your-video-id-4",
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
    loomVideo: "https://www.loom.com/share/your-video-id-5",
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
    loomVideo: "https://www.loom.com/share/your-video-id-6",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 7,
    name: "HTTP Todo App",
    technologies:
      "React, Tailwind, Testing, API Backend Routes, CRUD, React TransitionGroup, Node",
    image:
      "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/web-guided-project-HTTP",
    liveDemo: "https://web-guided-project-HTTP.netlify.app/",
    loomVideo: "https://www.loom.com/share/your-video-id-7",
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
    loomVideo: "https://www.loom.com/share/your-video-id-8",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 9,
    name: "Parallax Website",
    technologies: "React, Spring",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "https://github.com/Blueavian9/parallax-website",
    liveDemo: "https://parallax-website-demo.netlify.app",
    loomVideo: "https://www.loom.com/share/your-video-id-9",
    sound: "/sounds/owen-wilson-wow-80640.mp3",
  },
];

const Projects = () => {
  const audioRefs = useRef({});
  const [imageLoadErrors, setImageLoadErrors] = useState({});
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    const updateCursor = ({ clientX, clientY }) => {
      document.documentElement.style.setProperty("--x", `${clientX}px`);
      document.documentElement.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("pointermove", updateCursor, { passive: true });
    return () => window.removeEventListener("pointermove", updateCursor);
  }, []);

  // Enhanced audio playback with error handling
  const playSound = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.play().catch((err) => {
          console.log(
            `Audio playback prevented for project ${id}:`,
            err.message
          );
        });
      } catch (error) {
        console.log(`Audio error for project ${id}:`, error.message);
      }
    }
  };

  // Handle image load error
  const handleImageError = (id) => {
    setImageLoadErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Handle image load success
  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  // Fallback image
  const fallbackImage =
    "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400";

  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
            Projects
          </span>
        </h2>

        {/* Hidden audio elements with error handling */}
        {projects.map(
          (p) =>
            p.sound && (
              <audio
                key={p.id}
                ref={(el) => (audioRefs.current[p.id] = el)}
                src={p.sound}
                preload="auto"
                onError={() =>
                  console.log(`Failed to load audio for project ${p.id}`)
                }
              />
            )
        )}

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {projects.map((project) => (
            <li
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-300 hover:scale-105 group"
              style={{ aspectRatio: "4 / 3", "--active": "0" }}
              onMouseEnter={() => playSound(project.id)}
              onClick={() => playSound(project.id)}
              role="article"
              aria-label={`${project.name} project card`}
            >
              <div className="absolute inset-0 bg-gray-900 z-0"></div>

              {/* Image with lazy loading and error handling */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cover bg-center z-10 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${
                    imageLoadErrors[project.id] ? fallbackImage : project.image
                  })`,
                  opacity: imagesLoaded[project.id] ? 1 : 0.5,
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="hidden"
                  loading="lazy"
                  onError={() => handleImageError(project.id)}
                  onLoad={() => handleImageLoad(project.id)}
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

              <div className="relative z-30 p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.technologies}
                  </p>
                </div>

                {/* Enhanced button group */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white border border-gray-600 px-3 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg hover:from-gray-600 hover:to-gray-800 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.liveDemo}
                    className="inline-flex items-center gap-2 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg hover:from-cyan-500 hover:to-purple-500 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.loomVideo}
                    className="inline-flex items-center gap-2 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg hover:from-purple-500 hover:to-red-500 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${project.name} video demo`}
                  >
                    <FiVideo size={16} />
                    Video
                  </a>
                </div>
              </div>

              {/* Hover effects */}
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



// import { useEffect, useRef } from "react";

// const projects = [
//   {
//     id: 1,
//     name: "Text2SpeechAPIPollyV3",
//     technologies: "AWS-SDK Polly V3, Groq",
//     image:
//       "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
//     liveDemo: "https://text2speechpollyv3.netlify.app/",
//     sound: "public/sounds/owen-wilson-wow-80640.mp3",
//   },
//   {
//     id: 2,
//     name: "bookLibraryDocumentation",
//     technologies: "Full Stack, Backend",
//     image:
//       "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/bookLibraryDocumentation",
//     liveDemo: "https://booklibraryDocumentation.netlify.app/",
//     sound: "/sounds/whoosh-effect-382717.mp3",
//   },
//   {
//     id: 3,
//     name: "Nasa-Photo-Generator",
//     technologies: "REACT.js, API's Front End",
//     image:
//       "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/nasa-photo-of-the-day",
//     liveDemo: "https://nasa-photo-of-the-day.netlify.app/",
//     sound: "/sounds/simple-whoosh-382724.mp3",
//   },
//   {
//     id: 4,
//     name: "Langchain Agents RPG-Game",
//     technologies: "GROQ_AI",
//     image:
//       "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/ai-groq-rpg",
//     liveDemo: "https://ai-groq-rpg.netlify.app/",
//     sound: "/sounds/whoosh-effect-382717.mp3",
//   },
//   {
//     id: 5,
//     name: "React-Router-Movies",
//     technologies: "React-Router, Link, NavLink",
//     image:
//       "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/React-Router-Movies",
//     liveDemo: "https://React-Router-Movies.netlify.app/",
//     sound: "/sounds/simple-whoosh-382724.mp3",
//   },
//   {
//     id: 6,
//     name: "Asylum Report Generator",
//     technologies: "Full Stack, Auth0",
//     image:
//       "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/asylum-rg-fe-starter",
//     liveDemo: "https://asylum-rg-fe-starter.netlify.app/",
//     sound: "/sounds/whoosh-effect-382717.mp3",
//   },
//   {
//     id: 7,
//     name: "HTTP Todo App",
//     technologies:
//       "React, Tailwind, Testing, API Backend Routes, CRUD, React TransitionGroup, Node, ",
//     image:
//       "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/web-guided-project-HTTP",
//     liveDemo: "https://web-guided-project-HTTP.netlify.app/",
//     sound: "/sounds/simple-whoosh-382724.mp3",
//   },
//   {
//     id: 8,
//     name: "User-Onboarding",
//     technologies: "Full Stack, Advanced React Hooks",
//     image:
//       "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/User-Onboarding",
//     liveDemo: "https://User-Onboarding.netlify.app/",
//     sound: "/sounds/whoosh-effect-382717.mp3",
//   },
//   {
//     id: 9,
//     name: "Parallax Website",
//     technologies: "React, Spring",
//     image:
//       "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
//     github: "https://github.com/Blueavian9/",
//     liveDemo: "https://.netlify.app",
//     sound: "public/sounds/owen-wilson-wow-5_D3r9Hw8.mp3",
//   },
// ];

// const Projects = () => {
//   const audioRefs = useRef({}); // no TypeScript type here

//   useEffect(() => {
//     const updateCursor = ({ clientX, clientY }) => {
//       document.documentElement.style.setProperty("--x", `${clientX}px`);
//       document.documentElement.style.setProperty("--y", `${clientY}px`);
//     };
//     window.addEventListener("pointermove", updateCursor, { passive: true });
//     return () => window.removeEventListener("pointermove", updateCursor);
//   }, []);

//   const playSound = (id) => {
//     const audio = audioRefs.current[id];
//     if (audio) {
//       audio.currentTime = 0;
//       audio.play();
//     }
//   };

//   return (
//     <div className="bg-black text-white py-20" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Projects
//           </span>
//         </h2>

//         {/* Hidden audio elements for any project with sound */}
//         {projects.map(
//           (p) =>
//             p.sound && (
//               <audio
//                 key={p.id}
//                 ref={(el) => (audioRefs.current[p.id] = el)}
//                 src={p.sound}
//                 preload="auto"
//               />
//             )
//         )}

//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
//           {projects.map((project) => (
//             <li
//               key={project.id}
//               className="bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-300 hover:scale-105 group"
//               style={{ aspectRatio: "4 / 3", "--active": "0" }}
//               onMouseEnter={() => playSound(project.id)}
//               onClick={() => playSound(project.id)}
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

// // Mock 1:
// // import { useEffect } from "react";

// // const projects = [
// //   {
// //     id: 1,
// //     name: "Text2SpeechAPIPollyV3",
// //     technologies: "AWS-SDK Polly V3, Groq",
// //     image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
// //     liveDemo: "https://text2speechpollyv3.netlify.app/"
// //   },
// //   {
// //     id: 2,
// //     name: "bookLibraryDocumentation",
// //     technologies: "Full Stack, Backend",
// //     image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/bookLibraryDocumentation",
// //     liveDemo: "https://booklibraryDocumentation.netlify.app/",
// //   },
// //   {
// //     id: 3,
// //     name: "Nasa-Photo-Generator",
// //     technologies: "REACT.js, API's Front End",
// //     image: "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/nasa-photo-of-the-day",
// //     liveDemo: "https://nasa-photo-of-the-day.netlify.app/",
// //   },
// //   {
// //     id: 4,
// //     name: "Langchain Agents RPG-Game",
// //     technologies: "GROQ_AI",
// //     image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/ai-groq-rpg",
// //     liveDemo: "https://ai-groq-rpg.netlify.app/",
// //   },
// //   {
// //     id: 5,
// //     name: "React-Router-Movies",
// //     technologies: "React-Router, Link, NavLink",
// //     image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/React-Router-Movies",
// //     liveDemo: "https://React-Router-Movies.netlify.app/",
// //   },
// //   {
// //     id: 6,
// //     name: "Asylum Report Generator",
// //     technologies: "Full Stack, Auth0",
// //     image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/asylum-rg-fe-starter",
// //     liveDemo: "https://asylum-rg-fe-starter.netlify.app/",
// //   },
// //   {
// //     id: 7,
// //     name: "HTTP Todo App",
// //     technologies:
// //       "React, Tailwind, Testing, API Backend Routes, CRUD, React TransitionGroup, Node, ",
// //     image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/web-guided-project-HTTP",
// //     liveDemo: "https://web-guided-project-HTTP.netlify.app/",
// //   },
// //   {
// //     id: 8,
// //     name: "User-Onboarding",
// //     technologies: "Full Stack, Advanced React Hooks",
// //     image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/User-Onboarding",
// //     liveDemo: "https://User-Onboarding.netlify.app/",
// //   },
// //   {
// //     id: 9,
// //     name: "Parallax Website",
// //     technologies: "React, Spring",
// //     image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
// //     github: "https://github.com/Blueavian9/",
// //     liveDemo: "https://.netlify.app",
// //   },
// // ];

// // const Projects = () => {
// //   useEffect(() => {
// //     const updateCursor = ({ clientX, clientY }) => {
// //       document.documentElement.style.setProperty("--x", `${clientX}px`);
// //       document.documentElement.style.setProperty("--y", `${clientY}px`);
// //     };

// //     window.addEventListener("pointermove", updateCursor, { passive: true });
// //     return () => window.removeEventListener("pointermove", updateCursor);
// //   }, []);

// //   return (
// //     <div className="bg-black text-white py-20" id="project">
// //       <div className="container mx-auto px-8 md:px-16 lg:px-24">
// //         <h2 className="text-4xl font-bold text-center mb-12">
// //           <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
// //             Projects
// //           </span>
// //         </h2>
// //         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
// //           {projects.map((project) => (
// //             <li
// //               key={project.id}
// //               className="bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-300 hover:scale-105 group"
// //               style={{
// //                 aspectRatio: "4 / 3",
// //                 "--active": "0",
// //               }}
// //             >
// //               <div className="absolute inset-0 bg-gray-900 z-0"></div>
// //               <div
// //                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cover bg-center z-10"
// //                 style={{ backgroundImage: `url(${project.image})` }}
// //               ></div>
// //               <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
// //               <div className="relative z-30 p-6 h-full flex flex-col justify-between">
// //                 <div>
// //                   <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
// //                   <p className="text-gray-400 mb-4">{project.technologies}</p>
// //                 </div>

// //                 <div className="flex justify-center">
// //                   <a
// //                     href={project.github}
// //                     className="relative inline-block cursor-pointer bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 text-white border border-gray-400 px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                   >
// //                     GitHub
// //                   </a>
// //                 </div>
// //               </div>
// //               <div
// //                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40"
// //                 style={{
// //                   background:
// //                     "radial-gradient(circle at var(--x) var(--y), hsla(0, 0%, 100%, 0.3), transparent 30vmin)",
// //                   backgroundAttachment: "fixed",
// //                 }}
// //               ></div>
// //               <div
// //                 className="absolute inset-0 pointer-events-none z-50"
// //                 style={{
// //                   background:
// //                     "radial-gradient(circle at var(--x) var(--y), hsla(0, 0%, 100%, 0.7), transparent 30vmin), transparent",
// //                   backgroundAttachment: "fixed",
// //                   mask: `
// //                     linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
// //                     linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
// //                     linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
// //                     linear-gradient(white, white) 100% 50% / 4px 100% no-repeat
// //                   `,
// //                 }}
// //               ></div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;
