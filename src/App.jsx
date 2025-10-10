// src/App.jsx
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

// Lazy load components for better performance
const About = lazy(() => import("./components/About.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

import "./App.css";
import "./index.css";

export default function App() {
  // Initialize theme on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  // Loading component for Suspense fallback
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#home" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main className="pt-16" id="main-content">
        <section id="home">
          <Hero />
        </section>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="about">
            <About />
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
          <section id="footer">
            <Footer />
          </section>
        </Suspense>
      </main>
    </div>
  );
}
