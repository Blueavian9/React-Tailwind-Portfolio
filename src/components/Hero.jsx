import { useState } from "react";
import GlowingButton from "./GlowingButton";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fallbackImage = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400";

  return (
    <section 
      className="bg-gradient-to-b from-[#243b55] to-[#141e30] min-h-screen flex flex-col items-center justify-center text-white px-4 py-12"
      id="home"
      aria-label="Hero section"
    >
      {/* Profile Image with Enhanced Glow and Error Handling */}
      <div className="relative group mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-all duration-700 group-hover:duration-300 animate-tilt"></div>
        
        {/* Loading state */}
        {!imageLoaded && !imageError && (
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src={imageError ? fallbackImage : "/assets/Cesar-Cover.webp"}
          alt="Cesar Aguilar - Full Stack AI Integration DevOps Cloud Network Software Engineer and Solutions Architect"
          className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            console.log("Profile image failed to load, using fallback");
            setImageError(true);
            setImageLoaded(true);
          }}
        />
      </div>

      {/* Name & Title */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
            Cesar Aguilar
          </span>
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-300">
          Full Stack AI Integration Software Engineer & Solutions Architect
        </h2>
      </div>

      {/* Bio */}
      <div className="max-w-3xl text-center space-y-4" role="region" aria-label="Professional summary">
        <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed">
          I'm a{" "}
          <span className="text-cyan-400 font-semibold">
            Full Stack AI Integration DevOps Cloud Network Software Engineer
          </span>{" "}
          with{" "}
          <span className="text-cyan-400 font-semibold">
            5+ years of experience
          </span>{" "}
          building secure, scalable, and AI-integrated systems using{" "}
          <span className="text-teal-300">
            JavaScript, React.js, Node.js, Express, and AWS
          </span>
          . My work spans end-to-end web application development, including
          RESTful APIs, authentication systems, and AI integrations with{" "}
          <span className="text-teal-300">
            OpenAI, AWS Polly V3, and LangChain
          </span>
          .
        </p>

        <p className="text-base md:text-lg text-gray-400 font-mono leading-relaxed">
          Currently pursuing a{" "}
          <span className="text-blue-400 font-semibold">
            B.S. in Cloud Network Engineering
          </span>{" "}
          and an{" "}
          <span className="text-blue-400 font-semibold">
            M.S. in AI & Machine Learning at

// import React from "react";
// import GlowingButton from "./GlowingButton";

// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-b from-[#243b55] to-[#141e30] min-h-screen flex flex-col items-center justify-center text-white px-4 py-12">
//       {/* Profile Image with Enhanced Glow */}
//       <div className="relative group mb-8">
//         <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-all duration-700 group-hover:duration-300 animate-tilt"></div>
//         <img
//           src="/assets/Cesar-Cover.webp"
//           alt="Cesar Aguilar - Full Stack AI Integration DevOps Cloud Network Software Engineer and Solutions Architect"
//           // 🔽 reduced overall size
//           className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
//           loading="eager"
//         />
//       </div>

//       {/* Name & Title */}
//       <div className="text-center mb-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">
//           I'm{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Cesar Aguilar
//           </span>
//         </h1>
//         <h2 className="text-lg md:text-xl font-semibold text-gray-300">
//           Full Stack AI Integration Software Engineer & Solutions Architect
//         </h2>
//       </div>

//       {/* Bio */}
//       <div className="max-w-3xl text-center space-y-4">
//         <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed">
//           I'm a{" "}
//           <span className="text-cyan-400 font-semibold">
//             Full Stack AI Integration DevOps Cloud Network Software Engineer
//           </span>{" "}
//           with{" "}
//           <span className="text-cyan-400 font-semibold">
//             5+ years of experience
//           </span>{" "}
//           building secure, scalable, and AI-integrated systems using{" "}
//           <span className="text-teal-300">
//             JavaScript, React.js, Node.js, Express, and AWS
//           </span>
//           . My work spans end-to-end web application development, including
//           RESTful APIs, authentication systems, and AI integrations with{" "}
//           <span className="text-teal-300">
//             OpenAI, AWS Polly V3, and LangChain
//           </span>
//           .
//         </p>

//         <p className="text-base md:text-lg text-gray-400 font-mono leading-relaxed">
//           Currently pursuing a{" "}
//           <span className="text-blue-400 font-semibold">
//             B.S. in Cloud Network Engineering
//           </span>{" "}
//           and an{" "}
//           <span className="text-blue-400 font-semibold">
//             M.S. in AI & Machine Learning at WGU
//           </span>
//           , I’m translating advanced theory into cloud-native solutions with a
//           strong grasp of DevOps pipelines, modular architecture, and data
//           persistence.{" "}
//           <span className="text-purple-400 font-semibold">
//             Future pursuit: Online Doctor of Engineering (D.Eng) from George
//             Washington University
//           </span>
//           .
//         </p>
//       </div>

//       {/* CTA Buttons */}
//       <div className="mt-8 flex flex-wrap justify-center gap-6">
//         <GlowingButton
//           color="moon"
//           href="https://github.com/blueavian9"
//           target="_blank"
//         >
//           GitHub
//         </GlowingButton>

//         <GlowingButton
//           color="aurora"
//           href="/CesarAguilar_Resume.pdf"
//           target="_blank"
//         >
//           Download CV
//         </GlowingButton>

//         <GlowingButton
//           color="cosmic"
//           href="https://www.linkedin.com/in/cesaradrianaguilar/"
//           target="_blank"
//         >
//           LinkedIn
//         </GlowingButton>
//       </div>

//       {/* Scroll Indicator — moved slightly lower */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// }
