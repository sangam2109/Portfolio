import './App.css';
import About from './Components/Aboutpage/About';
import Contact from './Components/Contactpage/Contact';
// import Experience from './Components/Experience';
import Home from './Components/HomePage/Home';
import Navbar from './Components/Navbar/Navbar';
import Skill from './Components/Skillspage/Skill';
import Project from './Components/ProjectsPage/Project';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;