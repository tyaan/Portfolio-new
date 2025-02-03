import Nav from './components/Nav';
import Projects from './Projects';
import CV from './CV';

import './App.css';

function App() {

  return (
    <div >
      <Nav />
      <div id="hi" className="section">
        <div className="about-text">
        <h1> Hi! I'm Tyaan. Full stack web developer. <br />Data analyst. Available for work.</h1>
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
