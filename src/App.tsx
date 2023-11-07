import React from 'react';
import './styles/app.scss';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Parallax from './components/Parallax';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="App">
      <Cursor />
      <section id='Home'>
        <NavBar />
        <Hero />
      </section>
      <section id='Projects'>
        <Parallax type='projects' />
      </section>
      <section>
        <Projects />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
      <section >
        <Portfolio />
      </section>
  
    </div>
  );
}

export default App; 
