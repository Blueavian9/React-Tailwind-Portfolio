// import * as React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import ContactBg1 from "../assets/logo.png";
// import { useState } from "react";

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
//     >
//       <div className="flex flex-col max-w-[1000px] w-full">
//         <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
//           <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
//             Contact
//           </p>
//           <p className="text-gray-300 py-4">Get in touch</p>
//         </div>
//         <div className="flex justify-center items-center">
//           <form
//             method="POST"
//             action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
//             className="flex flex-col max-w-[600px] w-full"
//           >
//             <input
//               className="bg-[#ccd6f6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               type="text"
//               placeholder="Name"
//               name="name"
//               required
//             />
//             <input
//               className="my-4 p-2 bg-[#ccd6f6] rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               type="email"
//               placeholder="Email"
//               name="email"
//               required
//             />
//             <textarea
//               className="bg-[#ccd6f6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               name="message"
//               rows="10"
//               placeholder="Message"
//               required
//             ></textarea>
//             <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md relative overflow-hidden transition-all duration-300 ease-in-out">
//               <span className="relative z-10">Let's Collaborate</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
//             </button>
//           </form>
//         </div>
//         <div className="flex justify-center space-x-4 pt-8">
//           <a
//             href="https://github.com/CesarMontoya"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub className="text-gray-300 text-3xl hover:text-cyan-500 transition-colors duration-300" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/cesar-montoya-372ba1258"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin className="text-gray-300 text-3xl hover:text-cyan-500 transition-colors duration-300" />
//           </a>
//           <a href="mailto:cmontoyanava@gmail.com">
//             <FaEnvelope className="text-gray-300 text-3xl hover:text-cyan-500 transition-colors duration-300" />
//           </a>
//         </div>
//       </div>
//       <img
//         src={ContactBg1}
//         alt="Logo"
//         className="absolute bottom-0 right-0 w-48 h-48 opacity-10"
//       />
//     </div>
//   );
// };

// export default Contact;
