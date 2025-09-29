import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import AppNavbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUs from "./components/About/AboutUs";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/ProjectPart/Projects";
import ContactPage from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AppNavbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
       
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
