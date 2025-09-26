
import './App.css';
import AboutUs from './components/About/AboutUs';
import Education from './components/Education/Education';
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
    </div>
  );
}

export default App;
