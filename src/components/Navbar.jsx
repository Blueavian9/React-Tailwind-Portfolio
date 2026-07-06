import { useState, useEffect, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-25% 0px -75% 0px", threshold: [0.5] }
    );

    ["home", "about", "skills", "projects", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const smoothScrollTo = useCallback((id) => {
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 88, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top availability bar (desktop) */}
      <div className="hidden md:flex justify-between items-center bg-app-surface/95 border-b border-cyan-500/10 px-6 py-2 text-xs text-cyan-700 backdrop-blur-md dark:bg-[#06111d]/95 dark:text-cyan-200">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for remote roles —</span>
          <a
            href="mailto:blueavian9@gmail.com"
            className="underline text-cyan-700 dark:text-cyan-200"
          >
            blueavian9@gmail.com
          </a>
        </div>
        <span className="text-slate-500 dark:text-gray-400">
          Remote-ready Full Stack Cloud & AI Engineer
        </span>
      </div>

      {/* Main navbar */}
      <div
        className={`backdrop-blur-lg transition-all duration-300 border-b ${
          isScrolled
            ? "bg-app-surface/95 dark:bg-app-dark-surface/95 border-app-border/10 dark:border-app-dark-border/10 shadow-lg"
            : "bg-app-surface/80 dark:bg-app-dark-background/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo mark — left anchor */}
            <button
              onClick={() => smoothScrollTo("home")}
              className="group flex items-center gap-2.5 flex-shrink-0"
              aria-label="Scroll to top"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              >
                <path
                  d="M18 3L31 10.5V25.5L18 33L5 25.5V10.5L18 3Z"
                  fill="rgba(0,212,170,0.10)"
                  stroke="#00D4AA"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                />
                <circle cx="18" cy="18" r="3" fill="#00D4AA" />
                <line
                  x1="18"
                  y1="15"
                  x2="18"
                  y2="9"
                  stroke="#00D4AA"
                  strokeWidth="1.2"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15.4"
                  y1="19.5"
                  x2="10"
                  y2="22.5"
                  stroke="#00D4AA"
                  strokeWidth="1.2"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
                <line
                  x1="20.6"
                  y1="19.5"
                  x2="26"
                  y2="22.5"
                  stroke="#00D4AA"
                  strokeWidth="1.2"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="hidden sm:block text-sm font-semibold tracking-widest text-app-accent opacity-90 group-hover:opacity-100 transition-opacity duration-200">
                C·A
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-app-accent"
                      : "text-app-muted hover:text-app-text dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-app-accent rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Right side: Resume pill + ThemeToggle + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="/CesarAguilar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border border-app-accent/50 text-app-accent hover:bg-app-accent hover:text-[#080D1A] transition-all duration-200"
              >
                Resume ↗
              </a>

              <div className="flex items-center gap-4">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden flex flex-col gap-1.5 p-2"
                  aria-label="Toggle menu"
                >
                  <span
                    className={`w-6 h-0.5 bg-app-accent transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                  />
                  <span
                    className={`w-6 h-0.5 bg-app-accent transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`w-6 h-0.5 bg-app-accent transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-app-accent bg-app-accent/10"
                      : "text-app-muted hover:text-app-text hover:bg-app-surface/80 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 px-4">
                <a
                  href="/CesarAguilar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-app-accent/50 text-app-accent hover:bg-app-accent hover:text-[#080D1A] transition-all duration-200"
                >
                  Download Resume ↗
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
