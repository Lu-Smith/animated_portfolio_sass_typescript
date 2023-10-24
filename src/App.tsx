import React from 'react';
import './styles/app.scss';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <section>
        <NavBar />
      </section>
      <section>Parallax</section>
      <section>Art Projects</section>
      <section>Parallax</section>
      <section>Contact</section>
    </div>
  );
}

export default App; 
