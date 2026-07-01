import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-app-surface text-app-text border-t border-app-border dark:bg-[#0F1829] dark:text-slate-400 dark:border-slate-700/50 transition-colors duration-500">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-app-text dark:text-white">
              Cesar Adrian Aguilar
            </h3>
            <p className="text-app-muted dark:text-slate-400 text-sm mt-1">
              Full Stack Cloud &amp; AI Engineer · Los Angeles, CA
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/cesaradrianaguilar/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-app-muted hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/Blueavian9"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-app-muted hover:text-app-text dark:hover:text-white transition-colors duration-200"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="mailto:cesar.aguilar.dev@gmail.com"
              className="text-xs font-medium px-4 py-2 rounded-full border border-app-accent/40 text-app-accent hover:bg-app-accent/10 transition-all duration-200"
            >
              cesar.aguilar.dev@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-app-border dark:border-slate-700/50 mt-8 pt-6 text-center">
          <p className="text-app-muted dark:text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Cesar Adrian Aguilar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
