import { useState } from "react";
import GlowingButton from "./GlowingButton";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fallbackImage =
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400";

  // Task 4 — Trust badge data pulled from resume
  const trustBadges = [
    { value: "5+", label: "Years Shipping" },
    { value: "15+", label: "Projects Delivered" },
    { value: "WGU", label: "B.S. + M.S. In Progress" },
  ];

  return (
    <section
      className="bg-gradient-to-b from-[#243b55] to-[#141e30] min-h-screen flex flex-col items-center justify-center text-white px-4 py-12"
      id="home"
      aria-label="Hero section"
    >
      {/* Profile Image */}
      <div className="relative group mb-8">
        {!imageLoaded && !imageError && (
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={imageError ? fallbackImage : "/assets/Cesar-Cover.webp"}
          alt="Cesar A. Aguilar — Full Stack AI Engineer & Cloud Systems Developer"
          className={`animate-fade-in-up animate-once animate-duration-1000 relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover transition-all duration-300 group-hover:scale-105 ${
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

      {/* Task 3 — Location + Availability badges */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        <div className="inline-flex items-center gap-2 bg-gray-800/60 border border-cyan-400/20 rounded-full px-5 py-2 text-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-gray-300">
            Open to Remote Roles · No Sponsorship Required
          </span>
        </div>
        <div className="inline-flex items-center gap-2 bg-gray-800/60 border border-cyan-400/20 rounded-full px-5 py-2 text-sm">
          <span className="text-cyan-400">📍</span>
          <span className="text-gray-300">Los Angeles, CA · El Sereno</span>
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-6">
        <h1 className="animate-fade text-4xl md:text-5xl font-bold mb-3">
          I&apos;m{" "}
          {/* Task 5 — Gradient: cyan-300 → teal-400 → blue-500 for richer pop */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500">
            Cesar A. Aguilar
          </span>
        </h1>

        <h2 className="text-lg md:text-xl font-semibold text-gray-300 max-w-2xl mx-auto">
          Building AI-Powered Cloud Systems for 5+ Years &nbsp;|&nbsp;{" "}
          <span className="text-cyan-400">
            Full Stack &middot; DevSecOps &middot; LangChain &middot; AWS
            &middot; Remote-Ready
          </span>
        </h2>
      </div>

      {/* Bio */}
      <div
        className="max-w-3xl text-center space-y-4"
        role="region"
        aria-label="Professional summary"
      >
        <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed">
          I&apos;m a{" "}
          <span className="text-cyan-400 font-semibold">
            Full Stack AI Engineer &amp; Cloud Systems Developer
          </span>{" "}
          with{" "}
          <span className="text-cyan-400 font-semibold">
            5+ years shipping production systems
          </span>{" "}
          across freelance and internship engagements — integrating{" "}
          <span className="text-teal-300">
            OpenAI, AWS Polly V3, and LangChain
          </span>{" "}
          into real EdTech platforms used by K&ndash;12 students. I build
          secure, scalable full-stack apps with{" "}
          <span className="text-teal-300">
            React, Node.js, Express, PostgreSQL, and AWS
          </span>
          , with a security-first mindset backed by active professional
          experience in high-stakes operations.
        </p>

        <p className="text-base md:text-lg text-gray-400 font-mono leading-relaxed">
          Currently accelerating through a{" "}
          <span className="text-blue-400 font-semibold">
            B.S. in Cloud Network Engineering
          </span>{" "}
          and{" "}
          <span className="text-blue-400 font-semibold">
            M.S. in AI &amp; Machine Learning at WGU
          </span>{" "}
          — applying theory directly to cloud-native architecture, DevOps
          pipelines, RAG systems, and modular API design.{" "}
          <span className="text-purple-400 font-semibold">
            Trajectory: D.Eng in AI/ML · George Washington University (GW)
          </span>
          .
        </p>
      </div>

      {/* Task 4 — Trust Badges */}
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {trustBadges.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {value}
            </div>
            <div className="text-sm text-gray-400 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <GlowingButton
          color="moon"
          href="https://github.com/blueavian9"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </GlowingButton>
        <GlowingButton
          color="aurora"
          href="https://www.linkedin.com/in/cesaradrianaguilar/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Download CV
        </GlowingButton>
        <GlowingButton
          color="cosmic"
          href="https://www.linkedin.com/in/cesaradrianaguilar/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </GlowingButton>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
