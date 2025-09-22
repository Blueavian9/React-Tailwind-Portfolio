import React from "react";
import { 
  FaCode, 
  FaReact, 
  FaDatabase, 
  FaGitAlt, 
  FaCloud, 
  FaCogs,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode className="text-4xl text-cyan-400" />,
    title: "Strong Foundation in Web Technologies",
    description:
      "Proficient in HTML, CSS, and JavaScript fundamentals. Understands web protocols, APIs, and responsive design principles. Keeps up-to-date with evolving web standards and technologies.",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "Web APIs", "Responsive Design"],
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    icon: <FaReact className="text-4xl text-green-400" />,
    title: "Full-Stack JS & React Expertise",
    description:
      "Developed end-to-end web applications using JavaScript, with Node.js for back-end and React for front-end. Built complex user interfaces, efficiently managing state and props in React. Implemented performance optimizations and integrated various JS frameworks and libraries for comprehensive web solutions.",
    skills: ["React.js", "Node.js", "Express", "Redux", "Next.js"],
    color: "from-green-400 to-emerald-500"
  },
  {
    id: 3,
    icon: <FaDatabase className="text-4xl text-purple-400" />,
    title: "Database Skills",
    description:
      "Designed and optimized database structures. Wrote complex queries and managed data efficiently. Worked with both SQL and NoSQL databases.",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design"],
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 4,
    icon: <FaGitAlt className="text-4xl text-orange-400" />,
    title: "Version Control, Collaboration & Tool Control",
    description:
      "Managed code versions using systems like Git. Facilitated team collaboration through platforms such as Github or GitLab. Implemented and Maintained development tools and workflows.",
    skills: ["Git", "GitHub", "GitLab", "CI/CD", "Agile Methodologies"],
    color: "from-orange-400 to-red-500"
  },
  {
    id: 5,
    icon: <FaCloud className="text-4xl text-blue-400" />,
    title: "Cloud Computing",
    description:
      "Designed and managed cloud infrastructure. Optimized resources for performance and cost. Implemented security and scalable solutions.",
    skills: ["AWS", "Docker", "Kubernetes", "Serverless", "Infrastructure as Code"],
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: 6,
    icon: <FaCogs className="text-4xl text-teal-400" />,
    title: "DevOps CI/CD",
    description:
      "Automated software development and deployment processes. Built and maintained CI/CD piplelines. Improved system efficiency & software delivery quality.",
    skills: ["Jenkins", "GitHub Actions", "AWS CodePipeline", "Terraform", "Monitoring"],
    color: "from-teal-400 to-cyan-500"
  }
];

const Service = () => {
  return (
    <section className="bg-gradient-to-b from-[#243b55] to-[#141e30] text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
              Services & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical services spanning the entire software development lifecycle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                    {service.id.toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.color} group-hover:scale-105 transition-transform duration-300`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/30 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="flex items-center justify-center w-full py-3 bg-gray-700/30 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 text-gray-300 hover:text-cyan-300 rounded-xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 group/btn">
                  <span className="mr-2">Learn More</span>
                  <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ready to Build Something Exceptional?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next project. I bring full-stack expertise, AI integration capabilities, 
              and a passion for creating scalable, production-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
              >
                <FaCheckCircle className="mr-2" />
                View My Work
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
              >
                <FaArrowRight className="mr-2" />
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
