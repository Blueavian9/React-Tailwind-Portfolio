import { useRef } from "react";

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Building production-grade applications with React, Next.js, TypeScript, and Node.js/Express. I architect scalable front-to-back solutions — from pixel-perfect UIs to RESTful APIs — with performance and accessibility baked in from day one.",
    sound: "/sounds/whoosh-bamboo-389752.mp3",
  },
  {
    id: 2,
    title: "AI & ML Integration",
    description:
      "Embedding intelligent features into real products using OpenAI, LangChain, RAG pipelines, and AWS Polly V3. I bridge the gap between ML models and user-facing apps so AI actually does something useful — not just impressive in a demo.",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
  {
    id: 3,
    title: "Cloud Architecture & AWS",
    description:
      "Designing and deploying resilient cloud infrastructure on AWS (Cloud Practitioner certified). From IAM and S3 to Lambda and scalable VPC setups, I build environments that stay up, stay fast, and stay within budget.",
    sound: "/sounds/whoosh-bamboo-389752.mp3",
  },
  {
    id: 4,
    title: "DevOps & CI/CD Pipelines",
    description:
      "Automating the full software lifecycle with GitHub Actions, Docker, and Kubernetes. I eliminate manual deployments, enforce code quality gates, and keep teams shipping confidently — multiple times a day if needed.",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
  {
    id: 5,
    title: "Database Design & Optimization",
    description:
      "Modeling and tuning data layers with PostgreSQL, MongoDB, and hybrid SQL/NoSQL strategies. I design schemas that scale cleanly, write queries that don't crawl, and structure data so your app never becomes its own bottleneck.",
    sound: "/sounds/whoosh-bamboo-389752.mp3",
  },
  {
    id: 6,
    title: "Community Tech & Non-Profit Solutions",
    description:
      "Volunteering technical skills to organizations like Barrio Action Youth & Family Resource Center and College Bridge Academy. I build affordable, maintainable digital tools that help community orgs punch above their weight.",
    sound: "/sounds/simple-whoosh-382724.mp3",
  },
];

const Service = () => {
  const audioRefs = useRef({});

  const playHoverSound = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.play().catch((err) => {
          console.log(
            `Audio playback prevented for service ${id}:`,
            err.message,
          );
        });
      } catch (error) {
        console.log(`Audio error for service ${id}:`, error.message);
      }
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      playHoverSound(id);
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-[#243b55] to-[#141e30] text-white py-20"
      id="services"
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
              className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30 focus-within:scale-105 focus-within:shadow-2xl focus-within:shadow-teal-500/30"
              onMouseEnter={() => playHoverSound(service.id)}
              onFocus={() => playHoverSound(service.id)}
              onKeyDown={(e) => handleKeyDown(e, service.id)}
              tabIndex="0"
              role="article"
              aria-label={`${service.title} service card`}
            >
              <audio
                ref={(el) => (audioRefs.current[service.id] = el)}
                src={service.sound}
                preload="auto"
                onError={(e) => {
                  console.log(
                    `Failed to load audio for service ${service.id}:`,
                    e.target.error?.message,
                  );
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/10 to-violet-700/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>

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

                <button
                  className="mt-4 inline-block text-left text-green-400 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Read more about: ${service.title}`);
                  }}
                  aria-label={`Read more about ${service.title}`}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
