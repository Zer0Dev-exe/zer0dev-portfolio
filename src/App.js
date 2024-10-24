// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Sección de contacto
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Contact /> {/* Añadimos la sección de contacto */}
    </div>
  );
}

export default App;
