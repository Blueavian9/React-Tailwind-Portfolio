import "./App.css";
import "./main.jsx";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlowButton from "./components/GlowButton";
import About from "./components/About";
import Service from "./components/Service.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GlowButton />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
