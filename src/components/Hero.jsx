// Mock 3:
import React, { useEffect, useRef } from "react";
import GlowingButton from "./GlowingButton";

export default function Hero() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;

      const rect = spotlightRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spotlightRef.current.style.setProperty("--x", x);
      spotlightRef.current.style.setProperty("--y", y);
    };

    const element = spotlightRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
      <section className="bg-gradient-to-b from-[#243b55] to-[#141e30] min-h-screen flex flex-col items-center justify-center text-white px-4 py-12">
      {/* Profile Image with Enhanced Glow */}
        <div className="relative group mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-all duration-700 group-hover:duration-300 animate-tilt"></div>
        <img
          src="/assets/Cesar-Cover.webp"
          alt="Cesar Aguilar - Full Stack AI Integration DevOps Cloud Network Software Engineer and Solutions Architect"
          // 🔽 reduced overall size
          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="eager"
          />
        </div>

        {/* Name & Title */}
      <div className="text-center mb-6">
        <h1 ref={spotlightRef} className="text-4xl md:text-5xl font-bold mb-2 spotlight-name relative">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
            Cesar Aguilar
          </span>
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-300">
        I'm a Full Stack Engineer I build and ship production web applications.  
        </h2>
      </div>

        {/* Bio */}
      <div className="max-w-3xl text-center space-y-4">
        <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed">
          I'm a{" "}
          <span className="text-cyan-400 font-semibold">
          full stack engineer. My most recent project is a production therapy booking platform with real client, live domain, Stripe payments, automated emails, role-based auth. </span></p>

        <p className="text-base md:text-lg text-gray-400 font-mono leading-relaxed">
          Currently pursuing a{" "}
          <span className="text-blue-400 font-semibold">
            B.S. in Cloud Network Engineering
          </span>{" "}
          and an{" "}
          <span className="text-blue-400 font-semibold">
            M.S. in AI & Machine Learning at WGU
          </span>
          , I’m translating advanced theory into cloud-native solutions with a
          strong grasp of DevOps pipelines, modular architecture, and data
          persistence.{" "}
          <span className="text-purple-400 font-semibold">
            Future pursuit: Online Doctor of Engineering (D.Eng) from George
            Washington University
          </span>
          .
        </p>
      </div>

      {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <GlowingButton
            color="moon"
            href="https://github.com/blueavian9"
            target="_blank"
          >
            GitHub
          </GlowingButton>

          <GlowingButton
            color="aurora"
            href="/CesarAguilar_Resume.pdf"
            target="_blank"
          >
            Download CV
          </GlowingButton>

          <GlowingButton
            color="cosmic"
            href="https://www.linkedin.com/in/cesaradrianaguilar/"
            target="_blank"
          >
            LinkedIn
          </GlowingButton>
        </div> 

      {/* Scroll Indicator — moved slightly lower */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
    );
  }
















// Mock 2:
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

//       {/* Name & Title with Glow Animation */}
//       <div className="text-center mb-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-2 glow-name">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Cesar Aguilar
//           </span>
//         </h1>
//         <h2 className="text-lg md:text-xl font-semibold text-gray-300">
//           Full Stack Engineer • Building Production Web Applications
//         </h2>
//       </div>

//       {/* Bio */}
//       <div className="max-w-3xl text-center space-y-4">
//         <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed">
//           I'm a{" "}
//           <span className="text-cyan-400 font-semibold">
//             full stack engineer. My most recent project is a production therapy
//             booking platform with real client, live domain, Stripe payments,
//             automated emails, role-based auth.{" "}
//           </span>
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

// Mock 1:
//  import React from "react";
// import GlowingButton from "./GlowingButton";

// export default function Hero() {
//   return (
//       <section className="bg-gradient-to-b from-[#243b55] to-[#141e30] min-h-screen flex flex-col items-center justify-center text-white px-4 py-12">
//       {/* Profile Image with Enhanced Glow */}
//         <div className="relative group mb-8">
//         <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-all duration-700 group-hover:duration-300 animate-tilt"></div>
//         <img
//           src="/assets/Cesar-Cover.webp"
//           alt="Cesar Aguilar - Full Stack AI Integration DevOps Cloud Network Software Engineer and Solutions Architect"
//           // 🔽 reduced overall size
//           className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
//           loading="eager"
//           />
//         </div>

//         {/* Name & Title */}
//       <div className="text-center mb-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">
//           I'm{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
//             Cesar Aguilar
//           </span>
//         </h1>
//         <h2 className="text-lg md:text-xl font-semibold text-gray-300">
//         I'm a Full Stack Engineer I build and ship production web applications.
//         </h2>
//       </div>

//         {/* Bio */}
//       <div className="max-w-3xl text-center space-y-4">
//         <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed">
//           I'm a{" "}
//           <span className="text-cyan-400 font-semibold">
//           full stack engineer. My most recent project is a production therapy booking platform with real client, live domain, Stripe payments, automated emails, role-based auth. </span></p>

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
//         <div className="mt-8 flex flex-wrap justify-center gap-6">
//           <GlowingButton
//             color="moon"
//             href="https://github.com/blueavian9"
//             target="_blank"
//           >
//             GitHub
//           </GlowingButton>

//           <GlowingButton
//             color="aurora"
//             href="/CesarAguilar_Resume.pdf"
//             target="_blank"
//           >
//             Download CV
//           </GlowingButton>

//           <GlowingButton
//             color="cosmic"
//             href="https://www.linkedin.com/in/cesaradrianaguilar/"
//             target="_blank"
//           >
//             LinkedIn
//           </GlowingButton>
//         </div>

//       {/* Scroll Indicator — moved slightly lower */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//     );
//   }
