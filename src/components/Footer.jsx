import * as React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import CesarCover2Img from "../assets/Cesar_Cover2.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <img
        src={CesarCover2Img}
        alt="Cesar-Cover.png"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Cesar Adrian Aguilar
              </span>
            </h3>

            <p className="text-gray-400" algin-text="justify-lef">
              is a passionate and dedicated Full Stack Software Engineer with
              over 3 years of professional experience, currently specializing in
              Full Stack Software Development and AI prompt testing at
              TalkAnimate Inc. His expertise spans a range of Front End
              technologies like React.js, Redux, and Flexbox, as well as Back
              End skills in Node.js, TypeScript, and MYSQL. He excels in
              developing responsive, efficient applications while leveraging his
              deep knowledge of algorithms, data structures, and system
              architecture. Married for over six years to his best friend Neha,
              Cesar codes, problem-solves, and innovates alongside their beloved
              guinea pigs, Munchie and Coco, always pushing the boundaries of
              modern technology. Fluent in Spanish and conversational in Hindi,
              he seamlessly blends technical acumen with effective
              communication, making him a standout engineer in today’s
              competitive tech landscape.
            </p>
          </div>
        </div>
      </div>

      <div
        className="border-t border-gray-600 pt-4 flex flex-col md:flex-row
          justify-between items-center"
      >
        <p className="text-gray-400 mt-2 text-sm leading-6 text-slate-500">
          &copy; {new Date().getFullYear()} Cesar Labs Inc. All rights reserved.
        </p>
        <div className="flex space-x-4 my-4 md:my-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub />
          </a>
        </div>
        <div className="flex space-x-4">
          <ul>
            <li>
              <a
                target="_blank"
                href="#"
                className="text-gray-400 hover:text-white"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="#"
                className="text-gray-400 hover:text-white"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="#"
                className="text-gray-400 hover:text-white"
              >
                Accessibility
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="#"
                className="text-gray-400 hover:text-white"
              >
                Business Proposition VC Funding
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
