// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.contactSection}>
      <h2 style={styles.title}>Contacto</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Tu Nombre" style={styles.input} required />
        <input type="email" placeholder="Tu Email" style={styles.input} required />
        <textarea placeholder="Tu Mensaje" style={styles.textarea} required></textarea>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </section>
  );
};

const styles = {
  contactSection: {
    backgroundColor: '#1d1d1d',
    padding: '2rem',
  },
  title: {
    color: '#ff5252',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '0.5rem 0',
    padding: '0.5rem',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ff5252',
    backgroundColor: '#2a2a2a',
    color: '#fff',
  },
  textarea: {
    margin: '0.5rem 0',
    padding: '0.5rem',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ff5252',
    backgroundColor: '#2a2a2a',
    color: '#fff',
  },
  button: {
    margin: '1rem 0',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ff5252',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Contact;
