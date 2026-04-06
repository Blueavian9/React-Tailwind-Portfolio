import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import "./index.css";

// Eager load critical components
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

// Lazy load below-the-fold components
const About = lazy(() => import("./components/About.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default function App() {
  // Initialize theme on app load with localStorage persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    // Save to localStorage if not already set
    if (!savedTheme) {
      localStorage.setItem("theme", initialTheme);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />

      <main className="pt-16" id="main-content">
        {/* Hero loads immediately (above the fold) */}
        <section id="home">
          <Hero />
        </section>

        {/* Lazy-loaded sections with Suspense boundaries */}
        <Suspense fallback={<LoadingSpinner />}>
          <section id="about">
            <About />
          </section>
        </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section id="experience">
          <Experience />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="services">
            <Services />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <section id="projects">
            <Projects />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <section id="blog">
            <Blog />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

// // src/App.jsx
// import { useEffect } from "react";
// import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import About from "./components/About.jsx";
// import Services from "./components/Services.jsx";
// import Projects from "./components/Projects.jsx";
// import Contact from "./components/Contact.jsx";
// import Blog from "./components/Blog.jsx";
// import Footer from "./components/Footer.jsx";

// import "./App.css";
// import "./index.css";

// export default function App() {
//   // Initialize theme on app load
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const systemPrefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     if (savedTheme) {
//       document.documentElement.classList.toggle("dark", savedTheme === "dark");
//     } else {
//       document.documentElement.classList.toggle("dark", systemPrefersDark);
//     }
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
//       <Navbar />
//       <main className="pt-16">
//         <section id="home">
//           <Hero />
//         </section>
//         <section id="about">
//           <About />
//         </section>
//         <section id="services">
//           <Services />
//         </section>
//         <section id="projects">
//           <Projects />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>
//         <section id="blog">
//           <Blog />
//         </section>
//         <section id="footer">
//           <Footer />
//         </section>
//       </main>
//     </div>
//   );
// }
