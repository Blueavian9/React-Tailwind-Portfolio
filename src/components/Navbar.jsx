import { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

// Cursive calligraphy font for logo
const calligraphyFontLink = document.createElement("link");
calligraphyFontLink.href =
  "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
calligraphyFontLink.rel = "stylesheet";
document.head.appendChild(calligraphyFontLink);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDarkMode(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-25% 0px -75% 0px", threshold: [0.5] },
    );

    ["home", "about", "services", "projects", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const smoothScrollTo = useCallback((id) => {
    const target = document.getElementById(id);
    if (target)
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  // Dark mode toggle with localStorage persistence
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Dynamic button classes
  const getButtonClasses = (active) =>
    twMerge(
      "px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105",
      active
        ? isDarkMode
          ? "text-cyan-400 bg-cyan-400/15 border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
          : "text-cyan-600 bg-cyan-100/50 border border-cyan-500/30"
        : isDarkMode
          ? "text-gray-300 hover:text-white hover:bg-gray-700/30"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50",
    );

  // Keyboard navigation handler
  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      smoothScrollTo(id);
    }
  };

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Navbar Container */}
      <nav
        className={twMerge(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? isDarkMode
              ? "bg-gray-900/95 backdrop-blur-lg shadow-xl shadow-cyan-500/10 border-b border-cyan-400/20"
              : "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200"
            : "bg-transparent",
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <button
              onClick={() => smoothScrollTo("home")}
              onKeyDown={(e) => handleKeyDown(e, "home")}
              className={twMerge(
                "flex items-center gap-2 group",
                "hover:scale-105 transition-transform duration-300",
                "focus:outline-none focus:ring-2 focus:ring-cyan-400",
                "focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-2",
              )}
              aria-label="Go to home section"
            >
              {/* Monogram badge */}
              <span
                className={twMerge(
                  "w-9 h-9 rounded-xl flex items-center justify-center",
                  "text-sm font-bold leading-none select-none",
                  isDarkMode
                    ? "bg-cyan-400 text-gray-900"
                    : "bg-cyan-500 text-white",
                )}
              >
                CA
              </span>

              {/* Calligraphy name */}
              <span
                style={{ fontFamily: "'Great Vibes', cursive" }}
                className={twMerge(
                  "text-3xl leading-none tracking-wide",
                  "bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500",
                  "bg-clip-text text-transparent",
                )}
              >
                Cesar A. Aguilar
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className={getButtonClasses(activeSection === item.id)}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={twMerge(
                  "ml-4 p-3 rounded-full transition-all duration-300 transform hover:scale-110",
                  isDarkMode
                    ? "bg-gray-700/50 text-yellow-400 hover:bg-gray-600/50"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300",
                )}
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
                title={isDarkMode ? "Light Mode" : "Dark Mode"}
              >
                {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={twMerge(
                  "p-2 rounded-full transition-all duration-300",
                  isDarkMode
                    ? "bg-gray-700/50 text-yellow-400"
                    : "bg-gray-200 text-gray-700",
                )}
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={twMerge(
                  "p-2 rounded-lg transition-all duration-300",
                  isDarkMode
                    ? "text-cyan-400 hover:bg-gray-700/50"
                    : "text-gray-700 hover:bg-gray-200",
                )}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={twMerge(
            "md:hidden transition-all duration-500 ease-in-out overflow-hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            isDarkMode
              ? "bg-gray-900/98 backdrop-blur-xl border-t border-cyan-400/20"
              : "bg-white/98 backdrop-blur-xl border-t border-gray-200",
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScrollTo(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className={twMerge(
                  "w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300",
                  activeSection === item.id
                    ? isDarkMode
                      ? "text-cyan-400 bg-cyan-400/15 border border-cyan-400/30"
                      : "text-cyan-600 bg-cyan-100/50 border border-cyan-500/30"
                    : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
                )}
                aria-label={`Navigate to ${item.label}`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;