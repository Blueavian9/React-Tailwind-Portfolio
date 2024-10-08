import * as React from "react";
import { useEffect } from "react";
import projImg1 from "../assets/projImg1.png";
import projImg2 from "../assets/projImg2.png";
import projImg3 from "../assets/projImg3.png";
import projImg4 from "../assets/projImg4.png";
import projImg5 from "../assets/projImg5.png";
import projImg6 from "../assets/projImg6.png";
import projImg7 from "../assets/projImg7.png";
import projImg8 from "../assets/projImg8.png";
import projImg9 from "../assets/projImg9.png";

const projects = [
  {
    id: 1,
    name: "Text2SpeechAPIPollyV3",
    technologies: "AWS-SDK Polly V3, Groq",
    image: projImg1,
    github: "https://github.com/Blueavian9/Text2SpeechAPIPollyV3",
  },
  {
    id: 2,
    name: "bookLibraryDocumentation",
    technologies: "Full Stack, Backend",
    image: projImg2,
    github: "https://github.com/Blueavian9/bookLibraryDocumentation",
  },
  {
    id: 3,
    name: "Nasa-Photo-Generator",
    technologies: "REACT.js, API's Front End",
    image: projImg3,
    github: "https://github.com/Blueavian9/nasa-photo-of-the-day",
  },
  {
    id: 4,
    name: "Langchain Agents RPG-Game",
    technologies: "GROQ_AI",
    image: projImg4,
    github: "https://github.com/Blueavian9/ai-groq-rpg",
  },
  {
    id: 5,
    name: "React-Router-Movies",
    technologies: "React-Router, Link, NavLink",
    image: projImg5,
    github: "https://github.com/Blueavian9/React-Router-Movies",
  },
  {
    id: 6,
    name: "Asylum Report Generator",
    technologies: "Full Stack, Auth0",
    image: projImg6,
    github: "https://github.com/Blueavian9/asylum-rg-fe-starter",
  },
  {
    id: 7,
    name: "HTTP Todo App",
    technologies:
      "React, Tailwind, Testing, API Backend Routes, CRUD, React TransitionGroup, Node, ",
    image: projImg7,
    github: "https://github.com/Blueavian9/web-guided-project-HTTP",
  },
  {
    id: 8,
    name: "Project 8",
    technologies: "MERN Stack",
    image: projImg8,
    github: "https://github.com/Blueavian9/Morocco-Website",
  },
  {
    id: 9,
    name: "Project 9",
    technologies: "MERN Stack",
    image: projImg9,
    github: "https://github.com/Blueavian9",
  },
];

const Projects = () => {
  useEffect(() => {
    const updateCursor = ({ clientX, clientY }) => {
      document.documentElement.style.setProperty("--x", `${clientX}px`);
      document.documentElement.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("pointermove", updateCursor);
    return () => window.removeEventListener("pointermove", updateCursor);
  }, []);

  // CSS variables for the neon effect
  const neonStyles = `
  :root {
  --clr neon: hsl(317 100% 54%);
  --clr-bg: hsl(323 21% 16%);
  }
  `;

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
            Projects
          </span>
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {projects.map((project) => (
            <li
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-300 hover:scale-105 group"
              style={{
                aspectRatio: "4 / 3",
                "--active": "0",
              }}
            >
              <div className="absolute inset-0 bg-gray-900 z-0"></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cover bg-center z-10"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
              <div className="relative z-30 p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.technologies}</p>
                </div>

                <div className="flex justify-center">
                  <a
                    href={project.github}
                    className="relative inline-block cursor-pointer bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 text-white border border-gray-400 px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
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
