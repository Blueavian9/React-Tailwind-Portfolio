import { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHovering, setIsHovering] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-25% 0px -75% 0px", threshold: [0.5] }
    );

    ["home", "about", "services", "projects", "contact"]
      .map(id => document.getElementById(id))
      .filter(Boolean)
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const smoothScrollTo = useCallback(id => {
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const getButtonClasses = (dark, active) => {
    active
      ? dark
        ? "text-cyan-400 bg-cyan-400/15 border border-cyan-400/30"
        : "text-cyan-600 bg-cyan-100/50 border border-cyan-500/30"
      : dark
      ? "text-gray-300 hover:text-white hover:bg-gray-700/30"
      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"; // Final bfanch & semicolon 
  }
}