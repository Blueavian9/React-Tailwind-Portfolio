import "./App.css";
import "./main.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import GlowButton from "./components/GlowButton.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

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
