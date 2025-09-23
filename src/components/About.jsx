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

              <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                <p>
                  I’m a Full-Stack Software Engineer with a strong foundation in
                  JavaScript, React, Node.js, and Tailwind CSS, combined with AI
                  integration and cloud/network engineering skills. My coding
                  journey began in 2017 with SoloLearn and FreeCodeCamp, where I
                  earned multiple certifications and built early projects. I
                  later graduated from <span className="text-cyan-400 font-semibold">
                    Bloom Institute of Technology
                  </span>, gaining
                  production-level experience across the full web stack. Rather
                  than be discouraged by market challenges, I turned every
                  obstacle into growth—continuing to sharpen my craft and deepen
                  my expertise. Contributing to an Internship. 
                  I’ve spent 5+ years delivering production-ready applications: Built and deployed
                  RESTful APIs and complex front-end architectures. Integrated
                  OpenAI and AWS Polly V3 for advanced AI capabilities. Focused
                  on performance, scalability, and real impact for end-users.
                  I’m now advancing my academic credentials with a 
                  B.S. in Cloud
                  & Network Engineering (AWS specialization) 
                  
                  and a Masters Degree in

                  Artificial Intelligence & Machine Learning at WGU, 
                  
                  with plans for a 
                  
                  Doctor of Engineering in AI/ML at George Washington
                  University. 
                  
                  What I bring to your team: Proven ability to ship
                  and maintain production systems that scale. Deep interest in
                  AI, cloud infrastructure, and real-world problem solving. A
                  resilient, growth-oriented mindset that turns setbacks into
                  innovation. I’m excited to bring this combination of hands-on
                  engineering experience and advanced AI/cloud training to a
                  forward-thinking team that values creativity, reliability, and
                  impact{" "}
                  
                  , even though on my research i didn't trust the school because
                  of the rebranding i still remained skeptical eventually i
                  Graduated and despite doing everything a student must to do
                  land a job i never got hired also during my time there
                  BloomTech (formerly Lambda School) is known for its "you don't
                  pay until you land a job" model, though this promise comes
                  with significant conditions. This payment option, an Income
                  Share Agreement (ISA), was designed to remove upfront
                  financial barriers to entering the tech industry. However, the
                  terms and history of this payment model have led to
                  controversy and legal action In its simplest form, the model
                  meant that graduates would only pay a percentage of their
                  income for a set period of time after securing a job that paid
                  above a certain threshold (e.g., $50,000 per year). For a
                  time, it was also covered by a "Tuition Refund Guarantee" that
                  promised graduates a refund and an additional payment if they
                  did not get a qualifying job within a year, provided they met
                  strict job-search requirements. The controversy and legal
                  action Regulators and students found significant issues with
                  BloomTech's claims and how the ISAs were actually structured
                  and sold. Misleading job-placement statistics: The company was
                  accused of publicly advertising inflated job-placement rates.
                  Internal reporting showed significantly lower rates for
                  graduates getting qualifying jobs. Hidden costs and deceptive
                  marketing: BloomTech falsely claimed that ISAs were not loans
                  and were "risk-free". The Consumer Financial Protection Bureau
                  (CFPB) determined they were, in fact, loans with an average
                  finance charge of $4,000. BloomTech also failed to disclose
                  key loan information required by law. Selling ISAs to
                  investors: The company marketed itself as financially aligned
                  with its students, but it was revealed that they sold many
                  ISAs to investors. This meant BloomTech often received a lump
                  sum payment long before a student secured a job. Settlement
                  and penalties: In April 2024, the CFPB took enforcement action
                  against BloomTech and its CEO, Austen Allred. As a result, the
                  company must stop collecting payments from many borrowers and
                  is banned from consumer lending activities. Allred was also
                  banned from the student-lending industry for 10 years and both
                  were required to pay civil penalties. despite my setbacks i
                  kept busy always learning ever growing towards more and more
                  coding techniques i was able to implement i even landed an
                  unpaid internship where i got zuckerburged by an employer
                  who's app i built despite not landing a job the employer could
                  not profit from my app becuase i owned the API Key and applied
                  best practices so it was just an experience that again i had
                  to change into positive if life give you lemons than i made
                  lemonade. eventually I discovered my passion for solving
                  complex problems through code and building better quality real
                  world projects and even architecural best practices. What
                  started as curiosity about web development and Full Stack
                  evolved into a deep expertise in{" "}
                  <span className="text-teal-300">
                    Full-stack Web Development
                  </span>
                  <span className="text-teal-500">AI Integration</span> and
                  currently
                  <span className="text-purple-300">{" "}
                  Cloud & Network Engineering
                  </span>
                  In 18 months i will have earned a{" "}
                  <span className="text-indigo-700">
                    Bachelors of Science in Cloud & Network Egineering with AWS
                    Specializations{" "}
                  </span>
                  right after I will be pursuing a{" "}
                  <span className="text-indigo-700">
                    Masters of Science Degree in Artificial Intelligence and
                    Machine Learning both from Western Governors University
                    (WGU){" "}</span>{" "} I will then pursue an <span className="text-indigo-700">Masters of Science Degree in Artificial Intelligence & Machine Learning both from Western Governors University (WGU) </span>
                </p>
                <p>
                  
                  , I'm bridging the gap between academic theory and real-world
                  application. My future goal? An{" "}
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    Online D.Eng from George Washington University
                  </span>
                  to lead the next generation of AI infrastructure.
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
