import React from 'react';
import './styles/app.scss';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <section id='Home'>
        <NavBar />
        <Hero />
      </section>
      <section id='Projects'>Parallax</section>
      <section>Projects</section>
      <section id='Portfolio'>Parallax</section>
      <section >Portfolio</section>
      <section id='About'>Parallax</section>
      <section >About</section>
      <section id='Contact'>Parallax</section>
      <section >Contact</section>
    </div>
  );
}

export default App; 
