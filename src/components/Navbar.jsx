import * as React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md w-full z-10">
      <div className="container mx-auto flex justify-center items-center border-round">
        <div className="space-x-8">
          <div className="text-2xl font-bold">
            {/*
            <a href="#home" className="hover:text-cyan-400"></a>
          </div>
           <div className="space-x-8">
            <a href="#home" className="hover:text-cyan-400">
              <strong>Home</strong>
            </a> */}
            <a href="#about" className="hover:text-cyan-400">
              <strong>About</strong>
            </a>
            <hr />
            <a href="#services" className="hover:text-cyan-400">
              <strong>Services</strong>
            </a>
            <hr />
            <a href="#projects" className="hover:text-cyan-400">
              <strong>Projects</strong>
            </a>
            <hr />
            <a href="#contact" className="hover:text-cyan-400">
              <strong>Contact</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
