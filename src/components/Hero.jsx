import * as React from "react";
import CesarCoverImg from "../assets/Cesar-Cover.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={CesarCoverImg}
        alt="Cesar-Cover.png"
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
      <p className="mt-4 text-lg text-gray-300 font-mono">
        I specialize in building modern and responsive web applications.
      </p>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          type="button"
          className="bg-gradient-to-r from-yellow-300 to-orange-600 hover:from-pink-200 hover:to-red-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <strong>Github</strong>
        </button>

        <button
          type="button"
          className="bg-gradient-to-r from-orange-400 to-red-800 hover:from-red-400 hover:to-pink-800 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <strong>Download CV</strong>
        </button>

        <button
          type="button"
          className="bg-gradient-to-r from-blue-400 to-blue-800 hover:from-red-400 hover:to-red-800 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <strong>LinkedIn</strong>
        </button>
      </div>
    </div>
  );
};

export default Hero;
