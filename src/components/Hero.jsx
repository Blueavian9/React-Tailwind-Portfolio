import React from "react";
import GlowingButton from "./GlowingButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#243b55] to-[#141e30] min-h-screen flex flex-col items-center justify-center text-white px-4 py-12">
      {/* Profile Image with Enhanced Glow */}
      <div className="relative group mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-1000 group-hover:duration-300 animate-tilt"></div>
        <img
          src="/src/assets/Cesar-Cover.png"
          alt="Cesar Aguilar - Full Stack DevOps Cloud Engineer"
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="eager"
        />
      </div>

      {/* Enhanced Name & Title with Better Typography */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
            Cesar Aguilar
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
          DevOps AI Integration Solutions Architect
        </h2>
      </div>

      {/* Enhanced Bio with Better Readability */}
      <div className="max-w-4xl text-center space-y-4">
        <p className="text-lg md:text-xl text-gray-300 font-mono leading-relaxed">
          I'm a <span className="text-cyan-400 font-semibold">Full Stack DevOps Cloud Engineer</span> with{" "}
          <span className="text-cyan-400 font-semibold">3+ years of experience</span> building secure, scalable, and AI-integrated systems using technologies like{" "}
          <span className="text-teal-300">JavaScript, React.js, Node.js, Express, and AWS</span>. My work spans end-to-end web application development, including RESTful APIs, authentication systems, and AI integrations with{" "}
          <span className="text-teal-300">OpenAI, AWS Polly V3, and LangChain</span>—blending backend logic with intuitive frontend architecture.
        </p>
        
        <p className="text-base md:text-lg text-gray-400 font-mono leading-relaxed">
          Currently pursuing a <span className="text-blue-400 font-semibold">B.S. in Cloud Network Engineering</span> and an{" "}
          <span className="text-blue-400 font-semibold">M.S. in AI & Machine Learning at WGU</span>, I'm actively translating advanced theory into working cloud-native solutions. I bring a strong grasp of DevOps pipelines, modular architecture, and data persistence, with a focus on ethical, production-ready software. My goal is to lead cross-functional teams driving innovation in AI infrastructure and cloud engineering.
          <span className="text-purple-400 font-semibold"> Future pursuit: Online Doctor of Engineering (D.Eng) from George Washington University</span>.
        </p>
      </div>

      {/* Enhanced CTA Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
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

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}