import * as React { useEffect } from "react";
// import CesarCoverImg from "../assets/Cesar-Cover.png";
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
    name: "Project 1",
    technologies: "MERN Stack",
    image: projImg1,
    github: "https://github.com/Blueavian9",
  },
  {
        id: 2,
      name: "Project 2",
      technologies: "MERN Stack",
      image: projImg2,
      github: "https://github.com/Blueavian9",
    },
    {
      id: 3,
      name: "Project 3",
      technologies: "MERN Stack",
      image: projImg3,
      github: "https://github.com/Blueavian9",
    },
    {
      id: 4,
      name: "Project 4",
      technologies: "MERN Stack",
      image: projImg4,
      github: "https://github.com/Blueavian9",
    },
    {
      id: 5,
      name: "Project 5",
      technologies: "MERN Stack",
      image: projImg5,
      github: "https://github.com/Blueavian9",
    },
    {
      id: 6,
      name: "Project 6",
      technologies: "MERN Stack",
      image: projImg6,
      github: "https://github.com/Blueavian9",
    },
    {
      id: 7,
      name: "Project 7",
      technologies: "MERN Stack",
      image: projImg7,
      github: "https://github.com/Blueavian9",
    },
    {
      id: 8,
      name: "Project 8",
      technologies: "MERN Stack",
      image: projImg8,
      github: "https://github.com/Blueavian9",
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
      document.documentElement.style.setProperty('--x', clientX);
      document.documentElementstyle.setProperty('--y', clientY);
    }, 
    window.addEventListener('pointermove', updateCursor);
    return () => window.removeEventListener('pointermove', updateCursor);
  }, []);

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24"> 
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {projects.map((project) => (
            <li
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-300 hover:scale-105 group"
              style={{
                aspectRatio: '4 / 3',
                '--active': '0',
              }}
            >
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: `url(${project.image})`}}></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
              <div className="relative z-20 p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.technologies}</p>
                </div>
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30"
                style={{
                  background: 'radial-gradient(circle at var(--x) var(--y), hsla(0, 0%, 100%, 0.15), transparent 15vmin)',
                  backgroundAttachment: 'fixed',
                }}
              ></div>
              <div 
                className="absolute inset-0 pointer-events-none z-40"
                style={{
                  background: 'radial-gradient(circle at var(--x) var(--y), hsla(0, 0%, 100%, 0.5), transparent 15vmin), transparent',
                  backgroundAttachment: 'fixed',
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
  )
}



// this is my previous code before adding the card:hover spotlight effect w/ background-attachment 
// const projects = [
//   {
//     id: 1,
//     name: "Project 1",
//     technologies: "MERN Stack",
//     image: projImg1,
//     github: "https://github.com/Blueavian9",
//   },
//   {
//     id: 2,
//     name: "Project 2",
//     technologies: "MERN Stack",
//     image: projImg2,
//     github: "https://github.com/Blueavian9",
//   },
//   {
//     id: 3,
//     name: "Project 3",
//     technologies: "MERN Stack",
//     image: projImg3,
//     github: "https://github.com/Blueavian9",
//   },
//   {
//     id: 4,
//     name: "Project 4",
//     technologies: "MERN Stack",
//     image: projImg4,
//     github: "https://github.com/Blueavian9",
//   },
//   {
//     id: 5,
//     name: "Project 5",
//     technologies: "MERN Stack",
//     image: projImg5,
//     github: "https://github.com/Blueavian9",
//   },
//   {
//     id: 6,
//     name: "Project 6",
//     technologies: "MERN Stack",
//     image: projImg6,
//     github: "https://github.com/Blueavian9",
//   },
//   {
//     id: 7,
//     name: "Project 7",
//     technologies: "MERN Stack",
//     image: projImg7,
//     github: "https://github.com/Blueavian9",
//   },
//   {
//     id: 8,
//     name: "Project 8",
//     technologies: "MERN Stack",
//     image: projImg8,
//     github: "https://github.com/Blueavian9",
//   },
//   {
//     id: 9,
//     name: "Project 9",
//     technologies: "MERN Stack",
//     image: projImg9,
//     github: "https://github.com/Blueavian9",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="bg-black text-white py-20" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
//             transform transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="rounded-lg mb-4 
//               w-full h-48 object-cover"
//               />
//               <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
//               <p className="text-gray-400 mb-4">{project.technologies}</p>
//               <a
//                 href={project.github}
//                 className="inline-block bg-gradient-to-r 
//               from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
