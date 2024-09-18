import * as React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home" className="hover:text-green-400">
            My Portfolio
          </a>
        </div>
        <div className="space-x-8">
          <a href="#home" className="hover:text-green-400">
            Home
          </a>
          <a href="#about" className="hover:text-green-400">
            About
          </a>
          <a href="#service" className="hover:text-green-400">
            Service
          </a>
          <a href="#projects" className="hover:text-green-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
