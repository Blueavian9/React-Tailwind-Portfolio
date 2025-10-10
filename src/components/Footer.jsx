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
<<<<<<< HEAD
              Hi, I’m Cesar A. Aguilar a devoted husband and family man to my wife
=======
              Hi, I’m Cesar A. Aguilar, A devoted husband to my wife
>>>>>>> 964d8b2d37080ff837bc55624eecd2c4656a8deb
              <span className="text-cyan-400 font-semibold">Neha</span> for over
              seven years and counting, I am also a proud “pet dad” to two spoiled guinea pigs,
              <span className="text-teal-400 font-semibold">Munchie</span> and
              <span className="text-teal-400 font-semibold">Coco</span>. They
              keep me company (and occasionally steal my snacks) while I code
              late into the night. By day, I serve as a
              <span className="text-blue-400 font-semibold">
                Security Officer for Los Angeles Council District 14 in El
                Sereno
              </span>
              , guarding Councilmember Ysabel Jurado’s office and supporting
              community safety. I also work Saturdays for the Lincoln Heights
              Youth Center and answer to the
              <span className="text-blue-400 font-semibold">
                Hollenbeck LAPD Security Services Division
              </span>
              , serving multiple City of Los Angeles LAPD posts including
              <span className="text-blue-400 font-semibold">PiperTech</span> and
              the
              <span className="text-blue-400 font-semibold">
                Hyperion S.A.F.E. Center
              </span>
              — all while studying full time at
              <span className="text-indigo-400 font-semibold">
                Western Governors University (WGU)
              </span>
              . By passion, I volunteer my technical skills to local
              organizations like
              <span className="text-purple-400 font-semibold">
                Barrio Action Youth & Family Resource Center
              </span>
              and
              <span className="text-purple-400 font-semibold">
                College Bridge Academy
              </span>
              , building digital tools to help them grow and better serve the
              neighborhood. When the uniform comes off, I turn to my other
              calling: becoming a world-class technologist. I’m currently
              pursuing a
              <span className="text-indigo-400 font-semibold">
                B.S. in Cloud & Network Engineering
              </span>
              and preparing for a
              <span className="text-indigo-400 font-semibold">
                Master’s in AI & Machine Learning
              </span>
              , all while refining my craft as a
              <span className="text-cyan-400 font-semibold">
                Full-Stack Software Engineer
              </span>
              . It’s a full life of long workdays, overtime shifts, late-night
              coding sessions, and family time— but I wouldn’t trade it. Every
              project I build, whether for a neighborhood non-profit or an
              AI-powered startup, is fueled by my belief that technology should
              strengthen communities and create opportunities for everyone.
            </p>

            {/* Shorter Bio */}
            {/* <p> Hi, I’m Cesar A. Aguilar—married for over
              <span className="text-cyan-400 font-semibold">six years</span> to
              my wife
              <span className="text-cyan-400 font-semibold">Neha</span> and pet
              dad to two spoiled guinea pigs,
              <span className="text-teal-400 font-semibold">Munchie</span> and
              <span className="text-teal-400 font-semibold">Coco</span>. By day,
              I’m a
              <span className="text-blue-400 font-semibold">
                Security Officer for Los Angeles Council District 14 in El
                Sereno
              </span>
              , guarding Councilmember Ysabel Jurado’s office. I also work
              Saturdays at Lincoln Heights Youth Center and support
              <span className="text-blue-400 font-semibold">
                Hollenbeck LAPD Security Services
              </span>
              , covering PiperTech and the Hyperion S.A.F.E. Center—all while
              studying full time at
              <span className="text-indigo-400 font-semibold">
                Western Governors University
              </span>
              . I volunteer technical skills for
              <span className="text-purple-400 font-semibold">
                Barrio Action Youth & Family Resource Center
              </span>
              and
              <span className="text-purple-400 font-semibold">
                College Bridge Academy
              </span>
              , building digital tools that empower local non-profits. Currently
              pursuing a
              <span className="text-indigo-400 font-semibold">
                B.S. in Cloud & Network Engineering
              </span>
              and an
              <span className="text-indigo-400 font-semibold">
                M.S. in AI & Machine Learning
              </span>
              , I merge full-stack engineering with AI innovation to create
              scalable solutions that serve real communities. This version is
              concise and visually rich, ideal for a portfolio sidebar or an
              “About” card without losing the heart of your story.
            </p> */}
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
