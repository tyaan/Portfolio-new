import React, { useState } from 'react';
import Nav from './components/Nav';
import Projects from './Projects';
import CV from './CV';

import './App.css';

function App() {
  const [rotation, setRotation] = useState<number>(45)

  const handleMouseMove = (e) => {
    // const hi = document.querySelector('#hi')
    // const rect = hi?.getBoundingClientRect()
    // const centerX = rect.left + rect.width / 2
    // const centerY = rect.top + rect.height / 2

    const centerX = window.innerWidth / 2
    // const centerY = window.innerHeight / 2

    const deltaX = e.clientX - centerX
    // const deltaY = e.clientY - centerY

    const MAX_DIST = window.innerWidth * 0.4
    // const distFromCenter = Math.min(Math.sqrt(deltaX**2 + deltaY**2), MAX_DIST)
    const distFromCenter = Math.min(Math.abs(deltaX), MAX_DIST)

    // const angle = (MAX_DIST - distFromCenter) * 45 / MAX_DIST
    const angle = distFromCenter * 45 / MAX_DIST
    setRotation(angle)
  }

  return (
    <div onMouseMove={handleMouseMove} onScroll={handleMouseMove}>
      <Nav />
      <div id="hi" className="section">
        <div className="about-text">
        <h1> Hi! I'm Tyaan. Full stack web developer. <br />Data analyst. Available for hire.</h1>
        <div className="color-bar bar-1" style={{transform:`rotate(${rotation}deg)`}}></div>
        <div className="color-bar bar-2" style={{transform:`rotate(-${rotation}deg)`}}></div>
        </div> 
      </div>
      <div id="about" className="section">
        <CV ></CV>
      </div>
      <div id="projects" className="section">
        <Projects ></Projects>
      </div>
    </div>
  );
}

export default App;
