// src/components/Hero.js
import React from 'react';
import { FaLaptopCode, FaRobot } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <div>
        <h2 style={styles.title}>¡Hola, soy Zer0Dev!</h2>
        <p style={styles.description}>
          Soy <FaLaptopCode /> desarrollador web y <FaRobot /> creador de bots para Discord.
        </p>
      </div>
      <img 
        src="https://media.discordapp.net/attachments/1298208134061621288/1298760949439791104/e0d1ecb269f4417b4144614dcd7da4f7_1.jpg?ex=671abce4&is=67196b64&hm=9205ea857425bd674faf6a0eca6035b11159fe8a7ca710ea30455856d275da3a&=&format=webp" 
        alt="Avatar de Zer0Dev" 
        style={styles.avatar}
      />
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#121212',
  },
  title: {
    color: '#ff5252',
    fontSize: '2.5rem',
  },
  description: {
    color: '#e0e0e0',
    fontSize: '1.5rem',
  },
  avatar: {
    width: '150px',
    borderRadius: '50%',
    border: '5px solid #ff5252',
    transition: 'border 0.3s ease, transform 0.3s ease',
  },
};

export default Hero;
