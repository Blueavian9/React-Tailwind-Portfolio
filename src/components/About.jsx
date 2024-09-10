import * as React from "react";
import CesarCover2Img from "../assets/Cesar_Cover2.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={CesarCover2Img}
            alt="CesarCover2"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              {/* I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences. */}
              I am a passionate Full-Stack Software Engineer with over three
              years of experience in creating secure, dynamic web applications.
              My expertise includes React, Node.js, Express, and AI integration,
              as demonstrated by my work with `Groq's Whisper`. At `talkanimate
              Inc.` I led the development of a Full-Stack Asylum Report
              Generator, implementing robust security and Auth0 authentication.
              My skills encompass building RESTful APIs, performing CRUD
              operations, and designing efficient database schemas, ensuring
              scalable, high-quality solutions. I excel in collaborative,
              fast-paced environments, with a strong focus on security and
              compliance. My diverse skill set and proactive approach make me a
              valuable asset to any software
            </p>
            <div className="text-4xl font-bold text-center mb-12">
              <strong> Front End:</strong>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML, CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="javascript" className="w-2/12">
                    JavaScript
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="nodejs" className="w-2/12">
                    Node JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="react-js" className="w-2/12">
                    React JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-4xl font-bold text-center mb-12">
                  <strong> Back End:</strong>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                      HTML, CSS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <label htmlFor="javascript" className="w-2/12">
                        JavaScript
                      </label>
                      <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <label htmlFor="nodejs" className="w-2/12">
                        Node JS
                      </label>
                      <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <label htmlFor="react-js" className="w-2/12">
                        React JS
                      </label>
                      <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-4xl font-bold text-center mb-12">
                <strong> Full Stack:</strong>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    HTML, CSS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="javascript" className="w-2/12">
                      JavaScript
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="nodejs" className="w-2/12">
                      Node JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="react-js" className="w-2/12">
                      React JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="nodejs" className="w-2/12">
                    Node JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="react-js" className="w-2/12">
                    React JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="text-4xl font-bold text-center mb-12">
                <strong> Additional:</strong>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    HTML, CSS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="javascript" className="w-2/12">
                      JavaScript
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="nodejs" className="w-2/12">
                      Node JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="react-js" className="w-2/12">
                      React JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="mt-12 flex justify-between text-center">
                  <div>
                    <h3
                      className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                    >
                      3+
                    </h3>
                    <p>Years Experience</p>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                    >
                      100+
                    </h3>
                    <p>Projects Completed</p>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                    >
                      30+
                    </h3>
                    <p>Happy Clients</p>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                    >
                      700+
                    </h3>
                    <p>Total Contributions </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
