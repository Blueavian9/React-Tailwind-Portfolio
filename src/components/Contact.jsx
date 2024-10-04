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

//original Contact form  page
import * as React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#243b55] to-[#141e30]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-8">
          {/* Talk to Me Section */}
          <div className="max-w-lg mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)] mb-8">
            <h2 className="text-3xl text-center font-bold text-white mb-4">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
                Talk to Me
              </span>
            </h2>

            <p className="text-white text-lg mb-6 text-center font-mono">
              I'm open to discussing employment opportunities, helping build web
              development projects, or partnership opportunities in Full Stack
              Software Development.
            </p>

            <div className="space-y-4">
              {/*  Contact Details Section */}
              <div className="flex items-center justify-center text-white">
                <FaPhone className="mr-3 text-cyan-400" />
                <span className="font-mono text-lg">
                  <strong>+123 456 7890</strong>
                </span>
              </div>

              <div className="flex items-center justify-center text-white">
                <FaEnvelope className="mr-4 mb-4 text-cyan-400" />
                <span className="font-mono text-lg">
                  <strong>blueavian9@gmail.com</strong>
                </span>
              </div>

              <div className="flex items-center justify-center text-white">
                <FaMapMarkedAlt className="mr-3 text-cyan-400" />
                <span className="font-mono text-lg">
                  <strong>123 W. BloomTech St. Los Angeles, USA</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
                Contact
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer"
                />
                <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer"
                />
                <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer resize-none"
                ></textarea>
                <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
                  Message
                </label>
              </div>

              {/* 
             original button mock 1: 
              <button
                  type="submit"
                  className="w-2/5 py-2 text-cyan-100 font-semibold uppercase tracking-wider bg-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out
                  relative z-1 bg-[#00ffff] text-white hover:bg-transparent hover:text-[#00ffff] border-2 border-transparent
                  hover:border-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.5),0_0_20px_rgba(0,255,255,0.5),0_0_30px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.7)]
                  hover:shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_25px_rgba(0,255,255,0.7),0_0_35px_rgba(0,255,255,0.8),0_0_45px_rgba(0,255,255,1)]"
                  > */}

              {/* <div className="relative overflow-hidden group">
                <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md relative overflow-hidden transition-all duration-300 ease-in-out">
                  <span className="relative z-10">Let's Collaborate</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                </button>
              </div> */}

              {/* 
               button mock 2: 
               <div className="relative overflow-hidden group"> 
                <button className="text-white border-2  from-cyan-400 to cyan-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md relative overflow-hidden transition-all duration-300 ease-in-out">
                  <span className="relative z-10">Let's Collaborate</span>
                  <span className="absolute inset-0 bg-gradient-to-r hover:bg-cyan-500 hover:border-cyan-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                </button>
              </div> */}

              {/* button mock 3: 
               <div className="relative overflow-hidden group">
                <button className="text-align-center text-white border-2 border-transparent from-cyan-400 to-cyan-600 w-2/5 max-w-xs px-4 py-3 my-8 mx-auto flex items-center rounded-md relative overflow-hidden transition-all duration-300 ease-in-out">
                  <span className="relative z-10 font-extrabold">
                    SEND{" "}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0"></span>
                </button>
              </div> 
                    */}

              {/* button mock 4: 
              <div className="relative overflow-hidden group">
  <button className="text-white border-2 border-transparent from-cyan-400 to-cyan-600 w-full max-w-xs px-6 py-4 my-8 mx-auto flex items-center rounded-md relative overflow-hidden transition-all duration-300 ease-in-out hover:border-cyan-500 hover:shadow-lg">
    <span className="relative z-10 font-bold transition-all duration-300 ease-in-out group-hover:font-extrabold">
      SEND
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0"></span>
  </button>
</div> */}
              {/* button mock 5: 
              <div className="relative overflow-hidden group">
                <button className="text-white border-2 border-transparent from-cyan-400 to-cyan-600 w-2/5 max-w-xs px-6 py-4 my-8 mx-auto flex items-center justify-center rounded-md relative overflow-hidden transition-all duration-300 ease-in-out hover:border-cyan-500 hover:shadow-lg">
                  <span className="relative z-10 font-bold transition-all duration-300 ease-in-out group-hover:font-extrabold text-center">
                    SEND
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0"></span>
                </button>
              </div>
                    */}

              {/* button mock 6:
              <div className="relative overflow-hidden group">
                <button className="text-white border-2 border-white bg-gradient-to-r from-pink-400 to-orange-400 w-2/5 max-w-xs px-6 py-4 my-8 mx-auto flex items-center justify-center rounded-md relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 hover:border-white hover:shadow-lg">
                  <span className="relative z-10 font-bold transition-all duration-300 ease-in-out group-hover:font-extrabold text-center">
                    SEND
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0"></span>
                </button>
              </div>
                    */}

              {/* button mock 7: */}
              <div className="relative overflow-hidden group">
                <button className="text-white border-2 border-white bg-gradient-to-r from-cyan-400 to-cyan-600 w-2/5 max-w-xs px-6 py-4 my-8 mx-auto flex items-center justify-center rounded-md relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 hover:border-white hover:shadow-lg">
                  <span className="relative z-10 font-bold transition-all duration-300 ease-in-out group-hover:font-extrabold text-center">
                    SEND
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

