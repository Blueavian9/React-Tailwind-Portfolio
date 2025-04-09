import React from "react";
import CesarCoverImg from "../assets/Cesar-Cover.png";

const GlowingButton = ({ children, className, gradientFrom, gradientTo }) => (
  <button
    type="button"
    className={`relative px-6 py-3 rounded-full font-bold text-white overflow-hidden group ${className}`}
  >
    <span
      className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 blur-lg group-hover:opacity-100"
      style={{
        background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
      }}
    ></span>
    <span
      className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 group-hover:opacity-70"
      style={{
        background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
      }}
    ></span>
    <span className="relative z-10">{children}</span>
  </button>
);

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#243b55] to-[#141e30] min-h-screen flex flex-col items-center justify-center text-white px-4 py-12">
      {/* Profile Image Glow Effect */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-1000 group-hover:duration-300 animate-tilt"></div>
        <img
          src={CesarCoverImg}
          alt="Cesar Cover"
          className="relative w-48 h-48 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Name and Role */}
      <h1 className="mt-8 text-4xl md:text-6xl font-bold text-center">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
          Cesar Adrian Aguilar
        </span>
        , a Full-Stack Developer
      </h1>

      {/* Description */}
      <p className="mt-4 text-lg text-gray-300 font-mono max-w-2xl text-center">
        I specialize in building modern and responsive web applications.
      </p>

      {/* Glowing Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <GlowingButton
          className="bg-gradient-to-r from-green-300 via-green-600 to-green-900 outline hover:outline-offset-4"
          gradientFrom="#6EE7B7"
          gradientTo="#3B82F6"
        >
          GitHub
        </GlowingButton>
        <GlowingButton
          className="bg-gradient-to-r from-orange-300 via-orange-600 to-orange-900 outline hover:outline-offset-4"
          gradientFrom="#FDBA74"
          gradientTo="#EF4444"
        >
          Download CV
        </GlowingButton>
        <GlowingButton
          className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 outline hover:outline-offset-4"
          gradientFrom="#93C5FD"
          gradientTo="#1E3A8A"
        >
          LinkedIn
        </GlowingButton>
      </div>
    </section>
  );
}

// original Hero Component
// const Hero = () => {
//   return (
//     <div className="bg-gradient-to-b from-[#243b55] to-[#141e30] text-white text-center py-16">
//       <img
//         src={CesarCoverImg}
//         alt="Cesar-Cover.png"
//         className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
//         transition-transform duration-300 hover:scale-105"
//       />
//       <h1 className="text-4xl font-bold">
//         I'm{" "}
//         <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//         Cesar Adrian Aguilar
//         </span>
//         , Full-Stack Developer
//       </h1>
//       <p className="mt-4 text-lg text-gray-300 font-mono">
//         I specialize in building modern and responsive web applications.
//       </p>

//       <div className="mt-8 flex justify-center space-x-4">
//         <button
//           type="button"
//           className="bg-gradient-to-r from-yellow-200 to-orange-800 hover:from-pink-200 hover:to-pink-800 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//         >
//           <strong>Github</strong>
//         </button>

//         <button
//           type="button"
//           className="bg-gradient-to-r from-yellow-400 to-red-800 hover:from-green-200 hover:to-green-800 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//         >
//           <strong>Download CV</strong>
//         </button>

//         <button
//           type="button"
//           className="bg-gradient-to-r from-blue-200 to-blue-800 hover:from-red-400 hover:to-purple-800 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//         >
//           <strong>LinkedIn</strong>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
