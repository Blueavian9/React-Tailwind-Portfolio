import "./App.css";
import "./index.css";
import * as React from "react";
import Navbar from "../src/components/Navbar.jsx";
import Hero from "../src/components/Hero.jsx";
import About from "../src/components/About.jsx";
import Service from "../src/components/Service.jsx";
import Projects from "../src/components/Projects.jsx";
import Contact from "../src/components/Contact.jsx";
import Footer from "../src/components/Footer.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
