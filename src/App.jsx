{/* Mock 2: */}
import "./App.css";
import "./index.css";
import * as React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
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
        <Blog />
      </main>
      <Footer />
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
