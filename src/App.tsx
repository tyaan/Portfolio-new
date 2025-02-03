import Nav from './components/Nav';
import Projects from './Projects';
import CV from './CV';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './App.css';

function App() {

  return (
    <div >
      <Nav />
      <div id="hi" className="section">

        <div className="hi-text">
          <h1> Hi! I'm Tyaan. Full stack web developer. <br />Data analyst. Available for work.</h1>
        </div> 

        <div className="icons">
          <a className="icon" href="https://www.github.com/tyaan" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size="150px"/>
          </a>
          <a className="icon" href="https://www.linkedin.com/in/tyaansingh/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="150px"/>  
          </a>
        </div>

      </div>

      <div id="about" className="section">
        <CV ></CV>
      </div>

      <div id="projects" className="section">
        <Projects ></Projects>
      </div>
    </div>
  )
}

export default App;
