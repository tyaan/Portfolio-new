import React from 'react';
import Nav from './components/Nav';
import Projects from './Projects';
import CV from './CV';

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <div id="about" className="section">
        <div className="about-text">
        <h1>  Hi! I'm Tyaan. I'm really good and you should hire me to do stuff for you. </h1>
        </div> 
      </div>
      <div id="projects" className="section">
        <Projects ></Projects>
      </div>
      <div id="cv" className="section">
        <CV ></CV>
      </div>
    </div>
  );
}

export default App;
