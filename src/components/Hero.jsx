import React, { useEffect, useRef } from "react";
import GlowingButton from "./GlowingButton";

const techStack = ["React", "Node", "OpenAI", "AWS", "Supabase", "Stripe"];

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
    <section className="relative overflow-hidden bg-[#080D1A] min-h-screen text-[#F0F4FF] px-4 py-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,170,0.16),transparent_28%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row items-center justify-between px-4">
        <div className="w-full lg:w-6/12 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-[#0F1829]/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to remote roles —{" "}
            <a href="mailto:blueavian9@gmail.com" className="underline">
              blueavian9@gmail.com
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Cesar A. Aguilar</p>
            <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl leading-tight text-white">
              Full Stack Cloud & AI Engineer
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              I build production SaaS apps powered by AI — currently open to remote roles.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#1E2D47] bg-[#112240] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <GlowingButton color="aurora" href="/CesarAguilar_Resume.pdf" target="_blank">
              Download Resume
            </GlowingButton>
            <GlowingButton color="moon" href="#projects">
              See My Work
            </GlowingButton>
          </div>
        </div>

        <div className="w-full lg:w-5/12">
          <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-cyan-500/10 bg-[#0F1829]/95 p-4 shadow-[0_30px_80px_rgba(0,212,170,0.12)]">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-sky-500/10 to-violet-500/5 blur-3xl" />
            <img
              ref={spotlightRef}
              src="/assets/Cesar-Cover.webp"
              alt="Cesar Aguilar"
              className="relative mx-auto h-72 w-72 rounded-[1.75rem] object-cover shadow-2xl"
              loading="eager"
            />
          </div>
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
