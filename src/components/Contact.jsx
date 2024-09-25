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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Talk to Me Section */}
          <div className="max-w-lg mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)] mb-8">
            <h2 className="text-3xl text-center font-bold text-white mb-4">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
                Talk to Me
              </span>
            </h2>

            <p className="text-white text-lg mb-6 text-center">
              I'm open to discussing employment opportunities, helping build web
              development projects, or partnership opportunities in Full Stack
              Software Development.
            </p>

            <div className="space-y-4">
              {/* Contact Details */}
              {/* <div className="flex items-center justify-center text-white">
                <FaPhone className="mr-3 text-cyan-400" />
                <span className="font-mono text-lg">
                  <strong>+123 456 7890</strong>
                </span>
              </div> */}

              <div className="flex items-center justify-center text-white">
                <FaEnvelope className="mr-3 text-cyan-400" />
                <span className="font-mono text-lg">
                  <strong>blueavian9@gmail.com</strong>
                </span>
              </div>

              {/* <div className="flex items-center justify-center text-white">
                <FaMapMarkedAlt className="mr-3 text-cyan-400" />
                <span className="font-mono text-lg">
                  <strong>
                    123 W. BloomTech St. Los Angeles County, United States of
                    America
                  </strong>
                </span>
              </div> */}
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

              <div className="relative overflow-hidden group">
                {/* <button
                  type="submit"
                  className="w-2/5 py-2 text-cyan-100 font-semibold uppercase tracking-wider bg-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out
                  relative z-1 bg-[#00ffff] text-white hover:bg-transparent hover:text-[#00ffff] border-2 border-transparent
                  hover:border-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.5),0_0_20px_rgba(0,255,255,0.5),0_0_30px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.7)]
                  hover:shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_25px_rgba(0,255,255,0.7),0_0_35px_rgba(0,255,255,0.8),0_0_45px_rgba(0,255,255,1)]"
                  > */}
                <button
                  type="submit"
                  className="w-2/5 py-2 text-cyan-100 font-semibold uppercase tracking-wider bg-cyan-400 shadow-lg shadow-cyan-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out
                 relative z-1 bg-[#00ffff] text-white hover:bg-transparent hover:text-[#00ffff] border-2 border-transparent
                 
                 hover:border-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.5),0_0_20px_rgba(0,255,255,0.5),0_0_30px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.7)]
                 hover:shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_25px_rgba(0,255,255,0.7),0_0_35px_rgba(0,255,255,0.8),0_0_45px_rgba(0,255,255,1)]"
                >
                  Send
                </button>
                <div className="absolute hover:sepia-0 flex">
                  <span className="w-2/5 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim1"></span>
                  <span className="w-0.5 h-2/5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim2"></span>
                  <span className="w-2/5 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim3"></span>
                  <span className="w-0.5 h-2/5 bg-gradient-to-t from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim4"></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

// Updated talk to Me and Contact Form without border bacground color
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="bg-black text-white py-20" id="contact">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Contact
//           </span>
//         </h2>
//         <div className="flex flex-col md:flex-row justify-between items-start space-x-0 md:space-x-12">
//           {/* Talk Section */}
//           <div className="w-full md:w-1/2">
//             <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
//               Talk to Me!
//             </h3>
//             <p className="font-mono">
//               I'm open to discussing employment opportunities, helping build web
//               development projects, or partnership opportunities in Full Stack
//               Software Development.
//             </p>
//             <div className="mb-4 mt-8">
//               <FaEnvelope className="inline-block text-green-400 mr-2" />
//               <a href="mailto:blueavian9@gmail.com" className="hover:underline">
//                 Blueavian9@gmail.com
//               </a>
//             </div>
//             <div className="mb-4">
//               <FaPhone className="inline-block text-green-400 mr-2" />
//               <span>1+333.333.3333</span>
//             </div>
//             <div className="mb-4">
//               <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
//               <span className="font-mono">
//                 Greater Los Angeles County area, United States
//               </span>
//             </div>
//           </div>

//           {/* Contact Form Section */}
//           <div className="w-full md:w-1/2">
//             <div className="p-8 bg-black bg-opacity-50 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
//               <h2 className="text-3xl font-bold text-center text-white mb-8">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//                   Contact Me
//                 </span>
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer"
//                   />
//                   <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
//                     Full Name
//                   </label>
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer"
//                   />
//                   <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
//                     Email
//                   </label>
//                 </div>
//                 <div className="relative">
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer resize-none"
//                   ></textarea>
//                   <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
//                     Message
//                   </label>
//                 </div>

//                 <div className="relative overflow-hidden group">
//                   <button
//                     type="submit"
//                     className="w-2/5 py-2 text-cyan-100 font-semibold uppercase tracking-wider bg-cyan-400 rounded-md hover:text-cyan-400 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
//                   >
//                     Send
//                   </button>
//                   <div className="absolute hover:sepia-0 flex">
//                     <span className="w-2/5 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim1"></span>
//                     <span className="w-0.5 h-2/5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim2"></span>
//                     <span className="w-2/5 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim3"></span>
//                     <span className="w-0.5 h-2/5 bg-gradient-to-t from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim4"></span>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

// semi finished contact and talk forms
// const ContactForm = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#243b55] to-[#141e30]">
//       <div className="w-full max-w-md p-8 bg-black bg-opacity-50 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
//         <h2 className="text-3xl font-bold text-center text-white mb-8">
//           <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             {" "}
//             Contact Me{" "}
//           </span>
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="relative">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer"
//             />
//             <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
//               Full Name
//             </label>
//           </div>
//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer"
//             />
//             <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
//               Email
//             </label>
//           </div>
//           <div className="relative">
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows="4"
//               className="w-full px-0 py-2 text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer resize-none"
//             ></textarea>
//             <label className="absolute left-0 top-2 text-white text-base transition-all duration-300 -z-1 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-6 peer-valid:text-xs peer-valid:-translate-y-6">
//               Message
//             </label>
//           </div>

//           <div className="relative overflow-hidden group">
//             <button
//               type="submit"
//               className="w-2/5 py-2 text-cyan-100 font-semibold uppercase tracking-wider bg-cyan-400 rounded-md hover:text-cyan-400 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
//             >
//               Send
//             </button>
//             <div className="absolute hover:sepia-0 flex">
//               <span className="w-2/5 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim1"></span>
//               <span className="w-0.5 h-2/5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim2"></span>
//               <span className="w-2/5 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim3"></span>
//               <span className="w-0.5 h-2/5 bg-gradient-to-t from-transparent via-cyan-400 to-transparent group-hover:animate-btn-anim4"></span>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default ContactForm;
/*   
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#243b55] to-[#141e30]">
      <div className="w-full max-w-md p-8 bg-black bg-opacity-50 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="relative overflow-hidden group mt-10">
            <button
              type="submit"
              className="relative inline-block px-8 py-3 text-[#03e9f4] text-base uppercase tracking-[4px] overflow-hidden transition-all duration-500 ease-in-out group-hover:text-white group-hover:bg-[#03e9f4] group-hover:rounded group-hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_100px_#03e9f4]"
            >
              Send
              <span className="absolute block top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent to-[#03e9f4] group-hover:animate-btn-anim1"></span>
              <span className="absolute block top-[-100%] right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-[#03e9f4] group-hover:animate-btn-anim2"></span>
              <span className="absolute block bottom-0 right-[-100%] w-full h-[2px] bg-gradient-to-l from-transparent to-[#03e9f4] group-hover:animate-btn-anim3"></span>
              <span className="absolute block bottom-[-100%] left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-[#03e9f4] group-hover:animate-btn-anim4"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
</div>
  );
}

 export default ContactForm; 
  /*  original contact.jsx file
  const Contact = () => {
   return (
     <div className="bg-black text-white py-20" id="contact">
       <div className="container mx-auto px-8 md:px-16 lg:px-24">
         <h2 className="text-4xl font-bold text-center mb-12">
           <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
             Contact
           </span>
         </h2>
         <div className="flex flex-col md:flex-row items-center md:space-x-12">
           <div className="flex-1">
             <h3
               className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
             from-cyan-400 to-green-400 mb-4"
             >
               Talk to Me!
             </h3>
             <p className="font-mono">
               I'm open to discussing Employent Opportunities and helping build
               in my specialty of Full Stack Software Development and web
               development projects or partnership opportunities.
             </p>
             <div className="mb-4 mt-8">
               <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
               <a
                 href="mailto:youremail@example.com"
                 className="hover:underline"
               >
                 Blueavian9@gmail.com
               </a>
             </div>
             <div className="mb-4">
               <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
               <span>1+333.333.3333</span>
             </div>
             <div className="mb-4">
               <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
               <span className="font-mono">
                 Greater Los Angeles County area, United States
               </span>
             </div>
           </div>
           <div className="flex-1 w-full">
             <form className="space-y-4">
               <div>
                 <label htmlFor="name" className="block mb-2">
                   Full Name
                 </label>
                 <input
                   type="text"
                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                     focus:border-green-400"
                   placeholder="Enter You Name"
                 />
               </div>
               <div>
                 <label htmlFor="emial" className="block mb-2">
                   Email
                 </label>
                 <input
                   type="text"
                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                     focus:border-green-400"
                   placeholder="Enter You Email"
                 />
               </div>
               <div>
                 <label htmlFor="message" className="block mb-2">
                   Message
                 </label>
                 <textarea
                   type="text"
                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                     focus:border-green-400"
                   rows="5"
                   placeholder="Enter You Message"
                 />
               </div>
               <button
                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
             transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
               >
                 Send
               </button>
             </form>
           </div>
         </div>
       </div>
     </div>
   );
 }
 export default Contact;   */
