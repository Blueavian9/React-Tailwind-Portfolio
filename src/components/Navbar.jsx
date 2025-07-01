import { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHovering, setIsHovering] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);

  // Enhanced scroll effect with performance optimization
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Advanced intersection observer for smooth section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -75% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ["home", "about", "services", "projects", "contact"];
    const elements = sections.map(id => document.getElementById(id)).filter(Boolean);
    
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Theme management with system preference detection
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsThemeTransitioning(true);
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    
    // Apply theme to document
    document.documentElement.classList.toggle("dark", newTheme);
    
    setTimeout(() => setIsThemeTransitioning(false), 300);
  }, [isDarkMode]);

  // Smooth scroll with enhanced behavior
  const smoothScrollTo = useCallback((targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const navItems = [
    { id: "home", label: "Home", description: "Welcome to my portfolio" },
    { id: "about", label: "About", description: "Learn about my background" },
    { id: "services", label: "Services", description: "What I can do for you" },
    { id: "projects", label: "Projects", description: "View my work" },
    { id: "contact", label: "Contact", description: "Get in touch" },
  ];

  return (
    <>
      {/* Enhanced glassmorphism backdrop with depth layers */}
      <div
        className={`fixed top-0 left-0 right-0 h-20 z-40 transition-all duration-700 ${
          isScrolled
            ? isDarkMode
              ? "bg-gray-900/85 backdrop-blur-2xl shadow-2xl shadow-black/30"
              : "bg-white/85 backdrop-blur-2xl shadow-2xl shadow-gray-900/10"
            : "bg-transparent"
        }`}
        style={{
          backgroundImage: isScrolled
            ? isDarkMode
              ? "linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(31, 41, 55, 0.8) 50%, rgba(17, 24, 39, 0.85) 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(249, 250, 251, 0.8) 50%, rgba(255, 255, 255, 0.85) 100%)"
            : "none",
        }}
      />
      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? isDarkMode
              ? "shadow-2xl shadow-black/40 border-b border-gray-700/30"
              : "shadow-2xl shadow-gray-900/20 border-b border-gray-200/30"
            : "shadow-none border-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo/Brand with neumorphic design */}
            <div className="flex-shrink-0">
              <button
                onClick={() => smoothScrollTo("home")}
                className="group flex items-center space-x-3 text-2xl font-bold transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 rounded-xl p-2"
                aria-label="Go to home page"
                onMouseEnter={() => setIsHovering("logo")}
                onMouseLeave={() => setIsHovering(null)}
              >
                {/* Removed logo SVG and container, only text remains */}
                <div className="hidden sm:block">
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
                    isDarkMode
                      ? "from-white to-gray-300 group-hover:from-cyan-400 group-hover:to-blue-400"
                      : "from-gray-900 to-gray-700 group-hover:from-cyan-600 group-hover:to-blue-600"
                  }`}>
                    Cesar
                  </span>
                  <div className={`text-xs font-normal transition-colors duration-500 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    Full-Stack Developer
                  </div>
                </div>
              </button>
            </div>

            {/* Enhanced Desktop Navigation with neumorphic elements */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => smoothScrollTo(item.id)}
                    className={`relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-500 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-cyan-400/50 ${
                      activeSection === item.id
                        ? isDarkMode
                          ? "text-cyan-400 bg-cyan-400/15 shadow-lg shadow-cyan-400/20 border border-cyan-400/30"
                          : "text-cyan-600 bg-cyan-100/50 shadow-lg shadow-cyan-500/20 border border-cyan-500/30"
                        : isDarkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-700/30 hover:shadow-lg hover:shadow-gray-700/20"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 hover:shadow-lg hover:shadow-gray-300/20"
                    }`}
                    aria-label={`Navigate to ${item.label} section`}
                    aria-describedby={`${item.id}-description`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    onMouseEnter={() => setIsHovering(item.id)}
                    onMouseLeave={() => setIsHovering(null)}
                  >
                    {/* Enhanced background gradient on hover */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"
                        : "bg-gradient-to-r from-cyan-500/20 to-blue-600/20"
                    } opacity-0 group-hover:opacity-100`} />
                    
                    {/* Content with enhanced spacing */}
                    <span className="relative z-10 flex items-center space-x-3">
                      <span className="text-xl transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                      <span className="font-semibold">{item.label}</span>
                    </span>

                    {/* Enhanced active indicator with animation */}
                    {/* <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-blue-500 rounded-full transition-opacity duration-300 ${
                        activeSection === item.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    /> */}

                    {/* Enhanced hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      isHovering === item.id 
                        ? isDarkMode
                          ? "shadow-2xl shadow-cyan-400/40 ring-2 ring-cyan-400/50"
                          : "shadow-2xl shadow-cyan-500/40 ring-2 ring-cyan-500/50"
                        : "shadow-none ring-0"
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle Button */}
            <div className="hidden lg:block">
              <button
                onClick={e => {
                  const btn = e.currentTarget;
                  const ripple = document.createElement('span');
                  ripple.className = 'theme-toggle-ripple';
                  ripple.style.left = e.nativeEvent.offsetX + 'px';
                  ripple.style.top = e.nativeEvent.offsetY + 'px';
                  btn.appendChild(ripple);
                  setTimeout(() => ripple.remove(), 600);
                  toggleTheme();
                }}
                disabled={isThemeTransitioning}
                className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 shadow-lg group overflow-hidden
                  ${isDarkMode ? "bg-gray-900 text-yellow-400 hover:shadow-yellow-400/80" : "bg-white text-cyan-400 hover:shadow-cyan-400/80"}
                `}
                aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
                aria-pressed={isDarkMode}
                tabIndex={0}
              >
                <span className={`absolute -inset-1 rounded-full pointer-events-none transition-all duration-300
                  ${isDarkMode ? "shadow-[0_0_16px_4px_rgba(253,224,71,0.7)] group-hover:shadow-yellow-400/80" : "shadow-[0_0_16px_4px_rgba(34,211,238,0.7)] group-hover:shadow-cyan-400/80"}
                  opacity-0 group-hover:opacity-100 group-focus:opacity-100`}/>
                <span className="sr-only">{isDarkMode ? "Switch to light mode" : "Switch to dark mode"}</span>
                <span className="transition-transform duration-500 group-hover:scale-110 group-active:scale-95 flex items-center justify-center">
                  <span className={`inline-block transition-transform duration-500 ${isDarkMode ? 'rotate-0 scale-100' : 'rotate-180 scale-90'}`}>
                    {isDarkMode ? (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" fill="currentColor" />
                        <g stroke="currentColor" strokeLinecap="round">
                          <line x1="12" y1="2" x2="12" y2="4" />
                          <line x1="12" y1="20" x2="12" y2="22" />
                          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                          <line x1="2" y1="12" x2="4" y2="12" />
                          <line x1="20" y1="12" x2="22" y2="12" />
                          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                        </g>
                      </svg>
                    ) : (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor" />
                      </svg>
                    )}
                  </span>
                </span>
                <span className="absolute left-1/2 -bottom-9 -translate-x-1/2 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white shadow-lg shadow-cyan-400/30 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap font-mono tracking-wide">
                  {isDarkMode ? "Light mode" : "Dark mode"}
                </span>
              </button>
            </div>

            {/* Enhanced Mobile menu button with morphing animation */}
            <div className="block lg:hidden flex items-center space-x-2">
              {/* Theme toggle for mobile */}
              <button
                onClick={e => {
                  const btn = e.currentTarget;
                  const ripple = document.createElement('span');
                  ripple.className = 'theme-toggle-ripple';
                  ripple.style.left = e.nativeEvent.offsetX + 'px';
                  ripple.style.top = e.nativeEvent.offsetY + 'px';
                  btn.appendChild(ripple);
                  setTimeout(() => ripple.remove(), 600);
                  toggleTheme();
                }}
                disabled={isThemeTransitioning}
                className={`relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 shadow-lg group overflow-hidden
                  ${isDarkMode ? "bg-gray-900 text-yellow-400 hover:shadow-yellow-400/80" : "bg-white text-cyan-400 hover:shadow-cyan-400/80"}
                `}
                aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
                aria-pressed={isDarkMode}
                tabIndex={0}
              >
                <span className={`absolute -inset-1 rounded-full pointer-events-none transition-all duration-300
                  ${isDarkMode ? "shadow-[0_0_16px_4px_rgba(253,224,71,0.7)] group-hover:shadow-yellow-400/80" : "shadow-[0_0_16px_4px_rgba(34,211,238,0.7)] group-hover:shadow-cyan-400/80"}
                  opacity-0 group-hover:opacity-100 group-focus:opacity-100`}/>
                <span className="sr-only">{isDarkMode ? "Switch to light mode" : "Switch to dark mode"}</span>
                <span className="transition-transform duration-500 group-hover:scale-110 group-active:scale-95 flex items-center justify-center">
                  <span className={`inline-block transition-transform duration-500 ${isDarkMode ? 'rotate-0 scale-100' : 'rotate-180 scale-90'}`}>
                    {isDarkMode ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" fill="currentColor" />
                        <g stroke="currentColor" strokeLinecap="round">
                          <line x1="12" y1="2" x2="12" y2="4" />
                          <line x1="12" y1="20" x2="12" y2="22" />
                          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                          <line x1="2" y1="12" x2="4" y2="12" />
                          <line x1="20" y1="12" x2="22" y2="12" />
                          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                        </g>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor" />
                      </svg>
                    )}
                  </span>
                </span>
                <span className="absolute left-1/2 -bottom-9 -translate-x-1/2 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white shadow-lg shadow-cyan-400/30 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap font-mono tracking-wide">
                  {isDarkMode ? "Light mode" : "Dark mode"}
                </span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`relative p-3 rounded-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 ${
                  isMobileMenuOpen 
                    ? isDarkMode
                      ? "bg-cyan-400/20 text-cyan-400 shadow-lg shadow-cyan-400/20"
                      : "bg-cyan-500/20 text-cyan-600 shadow-lg shadow-cyan-500/20"
                    : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/30"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block w-5 h-0.5 transition-all duration-500 origin-center ${
                      isDarkMode ? "bg-current" : "bg-current"
                    } ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 transition-all duration-500 ${
                      isDarkMode ? "bg-current" : "bg-current"
                    } ${
                      isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 transition-all duration-500 origin-center ${
                      isDarkMode ? "bg-current" : "bg-current"
                    } ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation with glassmorphism */}
          <div
            id="mobile-menu"
            className={`lg:hidden transition-all duration-700 overflow-hidden rounded-2xl ${
              isMobileMenuOpen 
                ? `max-h-96 opacity-100 mt-4 ${
                    isDarkMode
                      ? "bg-gray-800/90 backdrop-blur-2xl border border-gray-700/50 shadow-2xl shadow-black/30"
                      : "bg-white/90 backdrop-blur-2xl border border-gray-200/50 shadow-2xl shadow-gray-900/10"
                  }` 
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="py-6 space-y-3 px-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl text-base font-medium transition-all duration-500 transform focus:outline-none focus:ring-4 focus:ring-cyan-400/50 ${
                    activeSection === item.id
                      ? isDarkMode
                        ? "text-cyan-400 bg-cyan-400/15 border-l-4 border-cyan-400 shadow-lg shadow-cyan-400/20"
                        : "text-cyan-600 bg-cyan-100/50 border-l-4 border-cyan-500 shadow-lg shadow-cyan-500/20"
                      : isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                  } ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms"
                  }}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-describedby={`${item.id}-description`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  <span className="flex items-center space-x-4">
                    <span className="text-2xl transition-transform duration-300 hover:scale-110">{item.icon}</span>
                    <div>
                      <span className="font-semibold">{item.label}</span>
                      <div className={`text-xs mt-1 transition-colors duration-500 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {item.description}
                      </div>
                    </div>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hidden descriptions for screen readers */}
      <div className="sr-only">
        {navItems.map((item) => (
          <div key={item.id} id={`${item.id}-description`}>
            {item.description}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;



/* Mock 3: */
// import * as React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white p-4 shadow-md w-full z-10">
//       <div className="container mx-auto flex justify-center items-center border-round">
//         <div className="space-x-8">
//           {/* Logo area with actual text */}
//           <div className="text-2xl font-bold">
//             <a
//               href="#home"
//               className="hover:text-cyan-400 transition duration-300"
//             ></a>
//           </div>

//           {/* Navigation Links */}
//           <div className="space-x-8">
//             <a
//               href="#home"
//               className="hover:text-cyan-400 transition duration-300"
//             >
//               <strong>Home</strong>
//             </a>
//             <a
//               href="#about"
//               className="hover:text-cyan-400 transition duration-300"
//             >
//               <strong>About</strong>
//             </a>
//             <a
//               href="#services"
//               className="hover:text-cyan-400 transition duration-300"
//             >
//               <strong>Services</strong>
//             </a>
//             <a
//               href="#projects"
//               className="hover:text-cyan-400 transition duration-300"
//             >
//               <strong>Projects</strong>
//             </a>
//             <a
//               href="#contact"
//               className="hover:text-cyan-400 transition duration-300"
//             >
//               <strong>Contact</strong>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;