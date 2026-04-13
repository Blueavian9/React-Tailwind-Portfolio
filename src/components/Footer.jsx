import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Cesar Adrian Aguilar
              </span>
            </h3>
            <p className="text-gray-300 font-mono text-justify">
              Hi, I'm a devoted husband to my wife for over eight years and
              counting. I am also a proud &ldquo;pet dad&rdquo; to two spoiled
              guinea pigs, Munchie and Coco. They keep me company and
              occasionally steal my snacks while I code late into the night. By
              day, I serve as a{" "}
              <span className="text-indigo-400 font-semibold">
                Security Officer
              </span>{" "}
              for a Los Angeles City Council office.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 border-t border-gray-600 pt-4 flex justify-center items-center">
        <div className="flex space-x-4 my-4">
          <a
            href="https://www.linkedin.com/in/cesaradrianaguilar/"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Blueavian9"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-4 pb-4">
        &copy; {new Date().getFullYear()} Cesar Adrian Aguilar. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
