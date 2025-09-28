{
  /* Mock 2: */
}
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import "./index.css";
import { useEffect } from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

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

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      {/* ✅ give the page breathing room so Navbar never overlaps */}
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

// Mock 1:
//  import "./App.css";
// import "./index.css";
// import * as React from "react";
// import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import About from "./components/About.jsx";
// import Services from "./components/Services.jsx";
// import Projects from "./components/Projects.jsx";
// import Contact from "./components/Contact.jsx";
// import Blog from "./components/Blog.jsx";
// import Footer from "./components/Footer.jsx";

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <About />
//       <Hero />
//       <Services />
//       <Projects />
//       <Contact />
//       <Blog />
//       <Footer />
//     </div>
//   );
// }
