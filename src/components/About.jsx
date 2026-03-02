import React from "react";
import {
  FaCode,
  FaCloud,
  FaRobot,
  FaGraduationCap,
  FaLightbulb,
  FaChartLine,
  FaAward,
} from "react-icons/fi";

const About = () => {
  const skills = [
    {
      name: "JavaScript/React",
      level: 95,
      color: "from-yellow-400 to-orange-500",
    },
    { name: "Node.js/Express", level: 90, color: "from-lime-400 to-green-600" }, // ✅ brighter gradient
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
      title: "5+ Years Experience",
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
      description: "B.S. in Cloud Network Engineering, M.S. AI/ML (WGU)",
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
            innovative problem solving & engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story & Journey */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="flex items-center mb-6">
                <FaLightbulb className="text-3xl text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  My Odyssey
                </h3>
              </div>

              {/* === NEW ABOUT ME SUMMARY === */}
              <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                <p>
                  Hi, I’m Cesar A. Aguilar—a devoted husband to my wife
                  <span className="text-cyan-400 font-semibold"> Neha </span>
                  for over six years, and proud “pet dad” to two spoiled guinea
                  pigs,
                  <span className="text-teal-400 font-semibold"> Munchie </span>
                  and
                  <span className="text-teal-400 font-semibold"> Coco </span>.
                  They keep me company (and occasionally steal my snacks) while
                  I code late into the night.
                </p>

                <p>
                  By day, I serve as a
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Security Officer for Los Angeles Council District 14 in El
                    Sereno
                  </span>
                  , guarding Councilmember Ysabel Jurado’s office and supporting
                  community safety. I also work Saturdays for the
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Lincoln Heights Youth Center
                  </span>
                  and answer to the
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Hollenbeck LAPD Security Services Division
                  </span>
                  , serving multiple City of Los Angeles LAPD posts including
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    PiperTech
                  </span>{" "}
                  and the
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    Hyperion S.A.F.E. Center
                  </span>
                  —all while studying full time at
                  <span className="text-indigo-400 font-semibold">
                    {" "}
                    Western Governors University (WGU)
                  </span>
                  .
                </p>

                <p>
                  By passion, I volunteer my technical skills to local
                  organizations like
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    Barrio Action Youth & Family Resource Center
                  </span>
                  and
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    College Bridge Academy
                  </span>
                  , building digital tools to help them grow and better serve
                  the neighborhood.
                </p>

                <p>
                  When the uniform comes off, I turn to my other calling:
                  becoming a world-class technologist. I’m currently pursuing a
                  <span className="text-indigo-400 font-semibold">
                    {" "}
                    B.S. in Cloud & Network Engineering
                  </span>
                  and preparing for a
                  <span className="text-indigo-400 font-semibold">
                    {" "}
                    Master’s in AI & Machine Learning
                  </span>
                  , all while refining my craft as a
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    Full-Stack Software Engineer
                  </span>
                  .
                </p>

                <p>
                  It’s a full life of long workdays, overtime shifts, late-night
                  coding sessions, and family time—but I wouldn’t trade it.
                  Every project I build, whether for a neighborhood non-profit
                  or an AI-powered startup, is fueled by my belief that
                  technology should strengthen communities and create
                  opportunities for everyone.
                </p>
              </div>
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
