import { useState, useEffect, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
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
      <div className="hidden md:flex justify-between items-center bg-[#06111d]/95 border-b border-cyan-500/10 px-6 py-2 text-xs text-cyan-200 backdrop-blur-md">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for remote roles —</span>
          <a href="mailto:cesar.aguilar.dev@gmail.com" className="underline text-cyan-200">
            cesar.aguilar.dev@gmail.com
          </a>
        </div>
        <span className="text-gray-400">Remote-ready Full Stack Cloud & AI Engineer</span>
      </div>

      <div
        className={`backdrop-blur-lg transition-all duration-300 border-b ${
          isScrolled ? "bg-[#08111d]/95 border-cyan-500/10 shadow-lg" : "bg-[#06111d]/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:flex items-center gap-8 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id ? "text-cyan-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <div className="px-4 py-3 bg-[#06111d]/95 text-xs text-cyan-200 border-y border-cyan-500/10">
                🟢 Available for remote roles —{" "}
                <a href="mailto:cesar.aguilar.dev@gmail.com" className="underline">
                  cesar.aguilar.dev@gmail.com
                </a>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useState, useEffect, useCallback } from "react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [isHovering, setIsHovering] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
//           setActiveSection(entry.target.id);
//         }
//       });
//       },
//       { root: null, rootMargin: "-25% 0px -75% 0px", threshold: [0.5] }
//     );

//     ["home", "about", "services", "projects", "contact"]
//       .map((id) => document.getElementById(id))
//       .filter(Boolean)
//       .forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const smoothScrollTo = useCallback((id) => {
//     const target = document.getElementById(id);
//     if (target)
//       window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   }, []);

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "services", label: "Services" },
//     { id: "projects", label: "Projects" },
//     { id: "contact", label: "Contact" },
//   ];

//   const getButtonClasses = (dark, active) => {
//     active
//       ? dark
//         ? "text-cyan-400 bg-cyan-400/15 border border-cyan-400/30"
//         : "text-cyan-600 bg-cyan-100/50 border border-cyan-500/30"
//       : dark
//                       ? "text-gray-300 hover:text-white hover:bg-gray-700/30"
//       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"; // Final bfanch & semicolon
//   };
// };

// export default Navbar;
