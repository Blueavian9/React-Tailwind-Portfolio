import "./App.css";
import "./main.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlowButton from "./components/GlowButton";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
      <GlowButton />
    </div>
  );
}

export default App;
