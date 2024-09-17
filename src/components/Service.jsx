import * as React from "react";

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
      "Managed code versions using systems like Git. Facilitated team collaboration through platforms such as Github or GitLab. Implemented and Maintained development tools and workflows.",
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
      "Automated software development and deployment processes. Built and maintained CI/CD piplelines. Improved system efficiency & software delivery quality.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
            My Services
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className=" font-mono mt-2 text-gray-300">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
