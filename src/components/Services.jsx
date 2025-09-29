import React, { useRef } from "react"; // ✅ added useRef only if you want hover sound

const services = [
  {
    id: 1,
    title: "Strong Foundation in Web Technologies",
    description:
      "Proficient in HTML, CSS, and JavaScript fundamentals. Understands web protocols, APIs, and responsive design principles. Keeps up-to-date with evolving web standards and technologies.",
  },
  {
    id: 2,
    title: "Full-Stack JS & React Expertise",
    description:
      "Developed end-to-end web applications using JavaScript, with Node.js for back-end and React for front-end. Built complex user interfaces, efficiently managing state and props in React. Implemented performance optimizations and integrated various JS frameworks and libraries for comprehensive web solutions.",
  },
  {
    id: 3,
    title: "Database Skills",
    description:
      "Designed and optimized database structures. Wrote complex queries and managed data efficiently. Worked with both SQL and NoSQL databases.",
  },
  {
    id: 4,
    title: "Version Control, Collaboration & Tool Control",
    description:
      "Managed code versions using systems like Git. Facilitated team collaboration through platforms such as Github or GitLab. Implemented and maintained development tools and workflows.",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description:
      "Designed and managed cloud infrastructure. Optimized resources for performance and cost. Implemented security and scalable solutions.",
  },
  {
    id: 6,
    title: "DevOps CI/CD",
    description:
      "Automated software development and deployment processes. Built and maintained CI/CD pipelines. Improved system efficiency & software delivery quality.",
  },
];

const Service = () => {
  // Optional: prepare hover sound (uncomment and add /public/sounds/hover.mp3)
  // const hoverSoundRef = useRef(null);
  // const playHoverSound = () => {
  //   if (hoverSoundRef.current) {
  //     hoverSoundRef.current.currentTime = 0;
  //     hoverSoundRef.current.play().catch(() => {});
  //   }
  // };

  return (
    <div
      className="bg-gradient-to-b from-[#243b55] to-[#141e30] text-white py-20"
      id="service"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
            Services
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30"
              // onMouseEnter={playHoverSound} // ✅ enable for hover sound
            >
              {/* Optional hover sound file */}
              {/* <audio ref={hoverSoundRef} src="/sounds/hover.mp3" preload="auto" /> */}

              {/* Hover overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/10 to-violet-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative px-6 pb-6 h-full flex flex-col justify-between z-10">
                <div>
                  {/* ID number with strong hover gradient */}
                  <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 group-hover:from-yellow-300 group-hover:to-pink-400 transition-all duration-500">
                    {service.id}
                  </div>

                  {/* Title with bright dynamic hover gradient + glow */}
                  <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-blue-400 group-hover:from-yellow-300 group-hover:via-pink-400 group-hover:to-purple-500 transition-all duration-500 drop-shadow-md group-hover:drop-shadow-[0_0_15px_#38bdf8]">
                    {service.title}
                  </h3>

                  <p className="font-mono mt-2 text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-4 inline-block text-green-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
















// Mock 3:
// import React from "react";

// const services = [
//   {
//     id: 1,
//     title: "Strong Foundation in Web Technologies",
//     description:
//       "Proficient in HTML, CSS, and JavaScript fundamentals. Understands web protocols, APIs, and responsive design principles. Keeps up-to-date with evolving web standards and technologies.",
//   },
//   {
//     id: 2,
//     title: "Full-Stack JS & React Expertise",
//     description:
//       "Developed end-to-end web applications using JavaScript, with Node.js for back-end and React for front-end. Built complex user interfaces, efficiently managing state and props in React. Implemented performance optimizations and integrated various JS frameworks and libraries for comprehensive web solutions.",
//   },
//   {
//     id: 3,
//     title: "Database Skills",
//     description:
//       "Designed and optimized database structures. Wrote complex queries and managed data efficiently. Worked with both SQL and NoSQL databases.",
//   },
//   {
//     id: 4,
//     title: "Version Control, Collaboration & Tool Control",
//     description:
//       "Managed code versions using systems like Git. Facilitated team collaboration through platforms such as Github or GitLab. Implemented and Maintained development tools and workflows.",
//   },
//   {
//     id: 5,
//     title: "Cloud Computing",
//     description:
//       "Designed and managed cloud infrastructure. Optimized resources for performance and cost. Implemented security and scalable solutions.",
//   },
//   {
//     id: 6,
//     title: "DevOps CI/CD",
//     description:
//       "Automated software development and deployment processes. Built and maintained CI/CD piplelines. Improved system efficiency & software delivery quality.",
//   },
// ];

// const Service = () => {
//   return (
//     <div
//       className="bg-gradient-to-b from-[#243b55] to-[#141e30] text-white py-20"
//       id="service"
//     >
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Services
//           </span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             >
//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-violet-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

//               <div className="relative px-6 pb-6 h-full flex flex-col justify-between z-10">
//                 <div>
//                   {/* 🔹 ID number: brightens on hover */}
//                   <div className="text-right text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 group-hover:from-green-300 group-hover:to-teal-300 transition-colors duration-300">
//                     {service.id}
//                   </div>

//                   {/* 🔹 Title: stronger gradient and glow on hover */}
//                   <h3 className="mt-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-300 to-blue-400 group-hover:from-yellow-300 group-hover:via-pink-400 group-hover:to-purple-500 transition-colors duration-300 drop-shadow-md group-hover:drop-shadow-lg">
//                     {service.title}
//                   </h3>

//                   <p className="font-mono mt-2 text-gray-300">
//                     {service.description}
//                   </p>
//                 </div>

//                 <a
//                   href="#"
//                   className="mt-4 inline-block text-green-400 hover:text-blue-500 transition-colors duration-300"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;



// Mock 2: Code
// const Service = () => {
//   return (
//     <div
//       className="bg-gradient-to-b from-[#243b55] to-[#141e30] text-white py-20"
//       id="service"
//     >
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Services
//           </span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-violet-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//               <div className="relative px-6 pb-6 h-full flex flex-col justify-between z-10">
//                 <div>
//                   <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
//                     {service.id}
//                   </div>
//                   <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//                     {service.title}
//                   </h3>
//                   <p className="font-mono mt-2 text-gray-300">
//                     {service.description}
//                   </p>
//                 </div>
//                 <a
//                   href="#"
//                   className="mt-4 inline-block text-green-400 hover:text-blue-500 transition-colors duration-300"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

// original Mock 1: code before animated gradient border
//import * as React from "react";

// const services = [
//   {
//     // id: 1,
//     title: "Strong Foundation in Web Technologies",
//     description:
//       "Proficient in HTML, CSS, and JavaScript fundamentals. Understands web protocols, APIs, and responsive design principles. Keeps up-to-date with evolving web standards and technologies.",
//   },
//   {
//     // id: 2,
//     title: "Full-Stack JS & React Expertise",
//     description:
//       "Developed end-to-end web applications using JavaScript, with Node.js for back-end and React for front-end. Built complex user interfaces, efficiently managing state and props in React. Implemented performance optimizations and integrated various JS frameworks and libraries for comprehensive web solutions.",
//   },
//   {
//     // id: 3,
//     title: "Database Skills",
//     description:
//       "Designed and optimized database structures. Wrote complex queries and managed data efficiently. Worked with both SQL and NoSQL databases.",
//   },
//   {
//     // id: 4,
//     title: "Version Control, Collaboration & Tool Control",
//     description:
//       "Managed code versions using systems like Git. Facilitated team collaboration through platforms such as Github or GitLab. Implemented and Maintained development tools and workflows.",
//   },
//   {
//     // id: 5,
//     title: "Cloud Computing",
//     description:
//       "Designed and managed cloud infrastructure. Optimized resources for performance and cost. Implemented security and scalable solutions.",
//   },
//   {
//     // id: 6,
//     title: "DevOps CI/CD",
//     description:
//       "Automated software development and deployment processes. Built and maintained CI/CD piplelines. Improved system efficiency & software delivery quality.",
//   },
// ];

// const Service = () => {
//   return (
//     <div className="bg-gradient-to-b from-[#243b55] to-[#141e30] text-white py-20" id="service">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Services
//           </span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
//               transition-transform duration-300 hover:scale-105"
//             >
//               <div
//                 className="text-right text-2xl font-bold text-transparent bg-clip-text
//               bg-gradient-to-r from-green-600 to-blue-400"
//               >
//                 {service.id}
//               </div>
//               <h3
//                 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
//               bg-gradient-to-r from-green-400 to-blue-500"
//               >
//                 {service.title}
//               </h3>
//               <p className=" font-mono mt-2 text-gray-300">
//                 {service.description}
//               </p>
//               <a
//                 href="#"
//                 className="mt-4 inline-block text-green-400 hover:text-blue-500"
//               >
//                 Read More
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;
