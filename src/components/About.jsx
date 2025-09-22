import React from "react";
import {
  FaCode,
  FaCloud,
  FaRobot,
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

const About = () => {
  const skills = [
    {
      name: "JavaScript/React",
      level: 95,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Node.js/Express",
      level: 90,
      color: "from-green-400 to-emerald-600",
    },
    { name: "AWS/Cloud", level: 85, color: "from-blue-400 to-cyan-500" },
    {
      name: "AI/ML Integration",
      level: 80,
      color: "from-purple-400 to-pink-500",
    },
    { name: "DevOps/CI-CD", level: 85, color: "from-indigo-400 to-blue-600" },
    { name: "Database Design", level: 88, color: "from-teal-400 to-cyan-600" },
  ];

  const achievements = [
    {
      icon: <FaCode className="text-cyan-400" />,
      title: "3+ Years Experience",
      description: "Full Stack development with modern technologies",
    },
    {
      icon: <FaCloud className="text-blue-400" />,
      title: "Cloud Architecture",
      description: "AWS, DevOps pipelines, and scalable solutions",
    },
    {
      icon: <FaRobot className="text-purple-400" />,
      title: "AI Integration",
      description: "OpenAI, AWS Polly V3, LangChain implementations",
    },
    {
      icon: <FaGraduationCap className="text-green-400" />,
      title: "Advanced Education",
      description: "B.S. Cloud Network Engineering, M.S. AI/ML (WGU)",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-[#141e30] to-[#243b55] text-white py-20"
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into scalable, AI-powered solutions through
            innovative engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story & Journey */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="flex items-center mb-6">
                <FaLightbulb className="text-3xl text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  My Journey
                </h3>
              </div>

              <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                <p>
                  My journey began at{" "}
                  <span className="text-cyan-400 font-semibold">
                    Bloom Institute of Technology
                  </span>
                  , where I discovered my passion for solving complex problems
                  through code. What started as curiosity about web development
                  evolved into a deep expertise in{" "}
                  <span className="text-teal-300">full-stack engineering</span>
                  and <span className="text-purple-300">AI integration</span>.
                </p>

                <p>
                  At{" "}
                  <span className="text-cyan-400 font-semibold">
                    TalkAnimate Inc.
                  </span>
                  , I've spent 5+ years building production-ready applications
                  that serve real users. From implementing
                  <span className="text-teal-300"> RESTful APIs</span> to
                  integrating
                  <span className="text-purple-300">
                    {" "}
                    OpenAI and AWS Polly V3
                  </span>
                  , I've learned that great software isn't just about code—it\'s
                  about creating solutions that make a difference.
                </p>

                <p>
                  Currently pursuing my{" "}
                  <span className="text-blue-400 font-semibold">
                    B.S. in Cloud Network Engineering
                  </span>{" "}
                  and
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    M.S. in AI & Machine Learning at WGU
                  </span>
                  , I'm bridging the gap between academic theory and real-world
                  application. My future goal? An{" "}
                  <span className="text-purple-400 font-semibold">
                    Online D.Eng from George Washington University
                  </span>
                  to lead the next generation of AI infrastructure.
                </p>
              </div>
            </div>

            {/* Leadership & Vision */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="flex items-center mb-6">
                <FaUsers className="text-3xl text-green-400 mr-4" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Leadership & Vision
                </h3>
              </div>

              <p className="text-gray-300 font-mono leading-relaxed">
                I believe in{" "}
                <span className="text-cyan-400 font-semibold">
                  ethical, production-ready software
                </span>
                that scales. My goal is to lead cross-functional teams in
                building the future of
                <span className="text-purple-300"> AI infrastructure</span> and
                <span className="text-teal-300"> cloud engineering</span>. Every
                line of code I write is guided by principles of security,
                scalability, and user-centered design.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Achievements */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="flex items-center mb-6">
                <FaChartLine className="text-3xl text-cyan-400 mr-4" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Technical Expertise
                </h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: `0 0 10px rgba(34, 211, 238, 0.3)`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="flex items-center mb-6">
                <FaAward className="text-3xl text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Key Achievements
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gray-700/30 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                  >
                    <div className="flex items-center mb-3">
                      <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <h4 className="font-bold text-white text-sm">
                        {achievement.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects that push
              the boundaries of technology. Let's create solutions that make a
              real impact.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
