import React, { useRef } from "react";

const services = [
  {
    id: 1,
    title: "Strong Foundation in Web Technologies",
    description:
      "Proficient in HTML, CSS, and JavaScript fundamentals. Understands web protocols, APIs, and responsive design principles. Keeps up-to-date with evolving web standards and technologies.",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 2,
    title: "Full-Stack JS & React Expertise",
    description:
      "Developed end-to-end web applications using JavaScript, with Node.js for back-end and React for front-end. Built complex user interfaces, efficiently managing state and props in React. Implemented performance optimizations and integrated various JS frameworks and libraries for comprehensive web solutions.",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
  {
    id: 3,
    title: "Database Skills",
    description:
      "Designed and optimized database structures. Wrote complex queries and managed data efficiently. Worked with both SQL and NoSQL databases.",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 4,
    title: "Version Control, Collaboration & Tool Control",
    description:
      "Managed code versions using systems like Git. Facilitated team collaboration through platforms such as Github or GitLab. Implemented and maintained development tools and workflows.",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description:
      "Designed and managed cloud infrastructure. Optimized resources for performance and cost. Implemented security and scalable solutions.",
    sound: "/sounds/whoosh-effect-382717.mp3",
  },
  {
    id: 6,
    title: "DevOps CI/CD",
    description:
      "Automated software development and deployment processes. Built and maintained CI/CD pipelines. Improved system efficiency & software delivery quality.",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
];

const Service = () => {
  // store refs keyed by service id
  const audioRefs = useRef({});

  const playHoverSound = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

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
              onMouseEnter={() => playHoverSound(service.id)}
            >
              {/* individual hidden audio per card */}
              <audio
                ref={(el) => (audioRefs.current[service.id] = el)}
                src={service.sound}
                preload="auto"
              />

              {/* Hover overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/10 to-violet-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative px-6 pb-6 h-full flex flex-col justify-between z-10">
                <div>
                  <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 group-hover:from-yellow-300 group-hover:to-pink-400 transition-all duration-500">
                    {service.id}
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-blue-400 group-hover:from-yellow-300 group-hover:via-pink-400 group-hover:to-purple-500 transition-all duration-500 drop-shadow-md group-hover:drop-shadow-[0_0_15px_#38bdf8]">
                    {service.title}
                  </h3>

                  <p className="font-mono mt-2 text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
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
