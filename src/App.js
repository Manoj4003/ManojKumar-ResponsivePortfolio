
import './App.css';
import AboutUs from './components/About/AboutUs';
import ContactPage from './components/ContactUs/ContactUs';

import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import AppNavbar from './components/Navbar/Navbar';
import Projects from './components/ProjectPart/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <HeroSection/>
      <AboutUs/>
      <Education/>
      <Skills/>
      <Projects/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
