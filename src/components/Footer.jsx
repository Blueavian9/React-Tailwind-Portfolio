import * as React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* ✅ Correct public reference */}
      <img
        src="/assets/Cesar_Cover2.webp"
        alt="Cesar Cover 2"
        className="mx-auto mt-12 mb-8 w-48 h-48 rounded-full object-cover
             transform transition-transform duration-300 hover:scale-105"
      />

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Cesar Adrian Aguilar
              </span>
            </h3>

            <p className="text-gray-300 font-mono text-justify">
              {/* your bio text here */}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 my-4 md:my-0">
          <a
            href="https://www.facebook.com/cesar.aguilar.712/"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/cesar-aguilar-blueavian9/"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Blueavian9"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
        <div className="flex space-x-4 mr-8">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Accessibility
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Business Proposition VC Funding
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
