import { useEffect, useState } from 'react';
import '../Nav.css';

function Nav() {
  const [opacity, setOpacity] = useState(1); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500; 
      const newOpacity = Math.max(0.6, 1 - 0.4*(scrollPosition / maxScroll)); 
      setOpacity(newOpacity); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <nav className="nav" 
      style={{ 
        opacity
      }}
    />
    <ul className="menu">
      <li>
          <button onClick={() => scrollToSection('hi')}>Hi!</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
        </li>
      </ul>
    </>
  );
}

export default Nav;
