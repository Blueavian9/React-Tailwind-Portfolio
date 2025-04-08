import "./App.css";
import "./index.css";
import * as React from "react";
import Navbar from "../src/components/Navbar.jsx";
import Hero from "../src/components/Hero.jsx";
import About from "../src/components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "../src/components/Projects.jsx";
import Contact from "../src/components/Contact.jsx";
import Footer from "../src/components/Footer.jsx";
import
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
