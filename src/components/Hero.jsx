import * as React from "react";
import CesarCoverImg from "../assets/Cesar-Cover.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={CesarCoverImg}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Cesar Adrian Aguilar
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        {/* original Github-btn:
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        > */}
        <button
          type="button"
          class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-orange-500 hover:to-pink-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <strong>Github</strong>
        </button>

        {/* original cv-btn:
         <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        > */}
        <button
          type="button"
          class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-orange-500 hover:to-pink-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <strong>Download CV</strong>
        </button>

        <button
          className="bg-gradient-to-r from-cyan-400 to-blue-800 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <strong>LinkedIn</strong>
        </button>
      </div>
    </div>
  );
};

export default Hero;
