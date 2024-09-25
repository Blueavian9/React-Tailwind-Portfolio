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
            <p className="text-lg mb-8 font-mono">
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
                  <span className="font-bold"> HTML, CSS </span>
                </label>

                {/* Moonlight glowing effect bar with percentage */}
                <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  {/* The background glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                  {/* Progress bar representing 90% */}
                  <div
                    className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                    style={{ width: "95%" }}
                  />

                  {/* Percentage label inside the progress bar */}
                  <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                    95%
                  </span>
                </div>
              </div>
            </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  <span className="font-bold"> JavaScript </span>
                </label>

                {/* Moonlight glowing effect bar with percentage */}
                <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  {/* The background glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                  {/* Progress bar representing 90% */}
                  <div
                    className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                    style={{ width: "85%" }}
                  />

                  {/* Percentage label inside the progress bar */}
                  <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                    85%
                  </span>
                </div>
              </div>
            </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  <span className="font-bold"> Node.js </span>
                </label>

                {/* Moonlight glowing effect bar with percentage */}
                <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  {/* The background glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                  {/* Progress bar representing 90% */}
                  <div
                    className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                    style={{ width: "75%" }}
                  />

                  {/* Percentage label inside the progress bar */}
                  <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                    75%
                  </span>
                </div>
              </div>
            </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  <span className="font-bold"> BootStrap </span>
                </label>

                {/* Moonlight glowing effect bar with percentage */}
                <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  {/* The background glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                  {/* Progress bar representing 90% */}
                  <div
                    className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                    style={{ width: "75%" }}
                  />

                  {/* Percentage label inside the progress bar */}
                  <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                    75%
                  </span>
                </div>
              </div>

              
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    <span className="font-bold"> SASS </span>
                  </label>

                  {/* Moonlight glowing effect bar with percentage */}
                  <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    {/* The background glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                    {/* Progress bar representing 90% */}
                    <div
                      className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                      style={{ width: "75%" }}
                    />

                    {/* Percentage label inside the progress bar */}
                    <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                      75%
                    </span>
                  </div>
                </div>
              </div>

             
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    <span className="font-bold"> DOM </span>
                  </label>

                  {/* Moonlight glowing effect bar with percentage */}
                  <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    {/* The background glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                    {/* Progress bar representing 90% */}
                    <div
                      className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                      style={{ width: "85%" }}
                    />

                    {/* Percentage label inside the progress bar */}
                    <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                      85%
                    </span>
                  </div>
                </div>
              </div>

                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    <span className="font-bold"> API </span>
                  </label>

                  {/* Moonlight glowing effect bar with percentage */}
                  <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    {/* The background glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                    {/* Progress bar representing 90% */}
                    <div
                      className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                      style={{ width: "85%" }}
                    />

                    {/* Percentage label inside the progress bar */}
                    <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                      85%
                    </span>
                  </div>
                </div>
              </div>

                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    <span className="font-bold"> NEXT.JS </span>
                  </label>

                  {/* Moonlight glowing effect bar with percentage */}
                  <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    {/* The background glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                    {/* Progress bar representing 90% */}
                    <div
                      className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                      style={{ width: "75%" }}
                    />

                    {/* Percentage label inside the progress bar */}
                    <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                      75%
                    </span>
                  </div>
                </div>
              </div>

            
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    <span className="font-bold"> TypeScript </span>
                  </label>

                  {/* Moonlight glowing effect bar with percentage */}
                  <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    {/* The background glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                    {/* Progress bar representing 90% */}
                    <div
                      className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                      style={{ width: "95%" }}
                    />

                    {/* Percentage label inside the progress bar */}
                    <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                      95%
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="space-y-4">
                <div className="text-4xl font-bold text-center mb-12">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
                    Back End:
                  </span>
                </div>

              
                  <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                      <span className="font-bold"> MYSQL </span>
                    </label>

                    {/* Moonlight glowing effect bar with percentage */}
                    <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      {/* The background glowing effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                      {/* Progress bar representing 90% */}
                      <div
                        className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                        style={{ width: "95%" }}
                      />

                      {/* Percentage label inside the progress bar */}
                      <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                        95%
                      </span>
                    </div>
                  </div>
                </div>

        
                  <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                      <span className="font-bold"> JQUERY </span>
                    </label>

                    {/* Moonlight glowing effect bar with percentage */}
                    <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      {/* The background glowing effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                      {/* Progress bar representing 90% */}
                      <div
                        className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                        style={{ width: "95%" }}
                      />

                      {/* Percentage label inside the progress bar */}
                      <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                        95%
                      </span>
                    </div>
                  </div>

                 
                    <div className="flex items-center">
                      <label htmlFor="htmlandcss" className="w-2/12">
                        <span className="font-bold"> HTTP/AJAX </span>
                      </label>

                      {/* Moonlight glowing effect bar with percentage */}
                      <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                        {/* The background glowing effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                        {/* Progress bar representing 90% */}
                        <div
                          className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                          style={{ width: "95%" }}
                        />

                        {/* Percentage label inside the progress bar */}
                        <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                          95%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                      <span className="font-bold">
                          AWS-SDK Polly V3</span></label>

                    {/* Moonlight glowing effect bar with percentage */}
                    <div className="relative grow bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      {/* The background glowing effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 rounded-full animate-glow" />

                      {/* Progress bar representing 90% */}
                      <div
                        className="absolute top-0 left-0 h-full bg-[#A7FF19] rounded-full"
                        style={{ width: "95%" }}
                      />

                      {/* Percentage label inside the progress bar */}
                      <span className="absolute right-2 text-sm text-white font-bold top-0 bottom-0 flex items-center justify-center">
                        95%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <span className="font-bold">Unit Testing</span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <span className="font-bold">Cypress</span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <span className="font-bold">Postman</span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <span className="font-bold">Sanity</span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="unit-test" className="w-2/12">
                    <span className="font-bold">AWS API KEY </span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
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
                    <span className="font-bold">Debugging</span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="nodejs" className="w-2/12">
                    <span className="font-bold">
                      {" "}
                      Data Structures & Algorithms{" "}
                    </span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="react-js" className="w-2/12">
                    <span className="font-bold">Problem Solving</span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  <span className="font-bold">Project Management</span>
                </label>
                {/* Moonlight glowing effect bar */}
                <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="react-js" className="w-2/12">
                  <span className="font-bold">SCRUM w/ Trello</span>
                </label>

                {/* Moonlight glowing effect bar */}
                <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="unit-test" className="w-2/12">
                  <span className="font-bold">Systems Architecture</span>
                </label>

                {/* Moonlight glowing effect bar */}
                <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
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
                  <span className="font-bold">ChatGPT </span>
                </label>

                {/* Moonlight glowing effect bar */}
                <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="unit-test" className="w-2/12">
                  <span className="font-bold"> Agents </span>
                </label>

                {/* Moonlight glowing effect bar */}
                <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="unit-test" className="w-2/12">
                  <span className="font-bold">Prompt Testing </span>
                </label>

                {/* Moonlight glowing effect bar */}
                <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="unit-test" className="w-2/12">
                  <span className="font-bold">Claude</span>
                </label>

                {/* Moonlight glowing effect bar */}
                <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
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
                  <span className="font-bold">Spanish</span>
                </label>

                {/* Moonlight glowing effect bar */}
                <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="javascript" className="w-2/12">
                    <span className="font-bold">Hindi</span>
                  </label>

                  {/* Moonlight glowing effect bar */}
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 rounded-full animate-glow" />
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
                  <span className="font-bold">Years Experience</span>
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
  );
};

export default About;
