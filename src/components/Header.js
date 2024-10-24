// src/components/Header.js
import React from 'react';
import { FaDiscord, FaCode, FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Zer0Dev</h1>
      <nav>
        <a href="#home"><FaHome /> Inicio</a>
        <a href="#projects"><FaCode /> Proyectos</a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /> Discord</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1d1d1d',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
  logo: {
    color: '#ff5252', /* Efecto de neón para el nombre */
    fontSize: '2.5rem',
    fontFamily: "'Pacifico', cursive",
    textShadow: '0 0 10px #ff5252, 0 0 20px #ff5252', /* Efecto de neón */
    transition: 'transform 0.5s ease-in-out',
  },
};

export default Header;
