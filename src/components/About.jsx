import * as React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-center mb-12">
              <strong>
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
                  About Me
                </span>
              </strong>
            </h2>
            <p className="text-lg mb-8">
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
            <br />
            <div className="text-4xl font-bold text-center mb-12">
              <strong>
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
                  Front End:
                </span>
              </strong>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  <strong>HTML, CSS</strong>
                </label>

                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="javascript" className="w-2/12">
                    <strong>JavaScript</strong>
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
                    <strong>Node JS</strong>
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
                    <strong>React JS</strong>
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
                  <label htmlFor="javascript" className="w-2/12">
                    <strong>BootStrap</strong>
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
                  <label htmlFor="htmlandcss" className="w-2/12">
                    <strong>SASS</strong>
                  </label>

                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="unit-test" className="w-2/12">
                      <strong>DOM</strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="unit-test" className="w-2/12">
                      <strong>API</strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="unit-test" className="w-2/12">
                      <strong>Next.js</strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="nodejs" className="w-2/12">
                      <strong>TypeScript</strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                  </div>
                </div>

                <br />
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-center mb-12">
                    <strong>
                      <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
                        Back End:
                      </span>
                    </strong>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <label htmlFor="unit-test" className="w-2/12">
                        <strong>MYSQL</strong>
                      </label>

                      <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <label htmlFor="htmlandcss" className="w-2/12">
                        <strong>JQuery</strong>
                      </label>

                      <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <label htmlFor="unit-test" className="w-2/12">
                          <strong>HTTP/AJAX</strong>
                        </label>

                        <div className="grow bg-gray-800 rounded-full h-2.5">
                          <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <label htmlFor="react-js" className="w-2/12">
                          <strong>AWS-SDK Polly V3 </strong>
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

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="unit-test" className="w-2/12">
                      <strong>Unit Testing</strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="unit-test" className="w-2/12">
                      <strong>Cypress</strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="unit-test" className="w-2/12">
                      <strong>Postman</strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="unit-test" className="w-2/12">
                      <strong>Sanity</strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="unit-test" className="w-2/12">
                      <strong>AWS API KEY </strong>
                    </label>

                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="text-4xl font-bold text-center mb-12">
                  <strong>
                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
                      Full Stack:
                    </span>
                  </strong>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="javascript" className="w-2/12">
                      <strong>Debugging</strong>
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
                      <strong> Data Structures & Algorithms </strong>
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
                      <strong>Problem Solving</strong>
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
                    <strong>Project Management</strong>
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
                    <strong>SCRUM w/ Trello</strong>
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
                  <label htmlFor="unit-test" className="w-2/12">
                    <strong>Systems Architecture</strong>
                  </label>

                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>

              <div className="text-4xl font-bold text-center mb-12">
                <strong>
                  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
                    AI:
                  </span>
                </strong>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <strong>ChatGPT </strong>
                  </label>

                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <strong> Agents </strong>
                  </label>

                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <strong>Prompt Testing </strong>
                  </label>

                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <strong>Claude</strong>
                  </label>

                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>

              <div className="text-4xl font-bold text-center mb-12">
                <strong>
                  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
                    Additional:
                  </span>
                </strong>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    <strong>Spanish</strong>
                  </label>

                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="javascript" className="w-2/12">
                      <strong>Hindi</strong>
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
              <br />
              <br />
              <hr />

              <div className="mt-8 flex justify-between text-center">
                <div>
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    3+
                  </h3>
                  <p className="mt-2">
                    <strong>Years Experience</strong>
                  </p>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    100+
                  </h3>
                  <p className="mt-2">
                    <strong>Projects Completed</strong>
                  </p>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    30+
                  </h3>
                  <p className="mt-2">
                    <strong>Happy Clients</strong>
                  </p>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    700+
                  </h3>
                  <p className="mt-2">
                    <strong>Total Contributions</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default About;
