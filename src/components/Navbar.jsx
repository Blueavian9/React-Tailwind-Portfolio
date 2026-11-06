import { useState, useEffect, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_HEIGHT = 64;

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Compact the bar slightly once the page has scrolled.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view.
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
    if (target) window.scrollTo({ top: target.offsetTop - NAV_HEIGHT, behavior: "smooth" });
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
      {/* Main navbar */}
      <div
        className={`backdrop-blur-lg transition-all duration-300 border-b ${
          isScrolled
            ? "bg-app-surface/95 dark:bg-app-dark-background dark:bg-opacity-95 border-app-border/10 dark:border-app-dark-border/10 shadow-lg"
            : "bg-app-surface/80 dark:bg-app-dark-background/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-[height] duration-300 ${
              isScrolled ? "h-14" : "h-16"
            }`}
          >
            {/* Logo — left anchor */}
            <button
              type="button"
              onClick={() => smoothScrollTo("home")}
              className="group flex items-center gap-2.5 flex-shrink-0"
              aria-label="Scroll to top"
            >
              <span className="logo-badge flex h-10 items-center rounded-xl bg-[#05070D] px-2 ring-1 ring-sky-400/30 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/CA-Logo-Full.webp"
                  alt="Cesar Aguilar CA logo"
                  width="40"
                  height="32"
                  decoding="async"
                  className="logo-img h-8 w-auto object-contain"
                />
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="relative z-10 hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <button
                  type="button"
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

            {/* Right side: ThemeToggle + Hamburger */}
            <div className="flex items-center gap-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
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

          {/* Mobile dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  type="button"
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
