// src/components/Projects.js
import React from 'react';
import Slider from "react-slick";

// Lista de proyectos
const projects = [
  {
    name: 'Bot de Discord - Gestor de Servidores',
    image: 'https://media.discordapp.net/attachments/1298208134061621288/1298769676830117960/ab65dbf18581f1920247e4ee6c93f5d8.png?ex=671ac504&is=67197384&hm=ce796f1c5a93cdd16f54f5c32c7fedfc03ca8c0dfe9f5a32ba56d35f746a403f&=&format=webp&quality=lossless',
    description: 'Un bot para gestionar roles y actividades en el servidor.',
    serverName: 'Servidor Cool',
    tech: 'Node.js, Discord.js',
  },
  {
    name: 'Sitio Web de Portafolio',
    image: 'https://media.discordapp.net/attachments/1298208134061621288/1298769676830117960/ab65dbf18581f1920247e4ee6c93f5d8.png?ex=671ac504&is=67197384&hm=ce796f1c5a93cdd16f54f5c32c7fedfc03ca8c0dfe9f5a32ba56d35f746a403f&=&format=webp&quality=lossless',
    description: 'Mi propio sitio personal para mostrar mi trabajo.',
    serverName: 'N/A',
    tech: 'React.js, CSS',
  },
  {
    name: 'Aplicación de Notas',
    image: 'https://media.discordapp.net/attachments/1298208134061621288/1298769676830117960/ab65dbf18581f1920247e4ee6c93f5d8.png?ex=671ac504&is=67197384&hm=ce796f1c5a93cdd16f54f5c32c7fedfc03ca8c0dfe9f5a32ba56d35f746a403f&=&format=webp&quality=lossless',
    description: 'Aplicación para tomar y gestionar notas fácilmente.',
    serverName: 'N/A',
    tech: 'React.js, Firebase',
  },
];

// Componente de Proyectos
const Projects = () => {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilitar desplazamiento automático
    autoplaySpeed: 3000, // Tiempo en milisegundos entre desplazamientos
  };

  return (
    <section id="projects" style={styles.projectsSection}>
      <h2 style={styles.title}>Mis Proyectos</h2>
      <Slider {...settings} style={styles.slider}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <div style={styles.projectContent}>
              <img src={project.image} alt={project.name} style={styles.projectImage} />
              <div style={styles.projectInfo}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p><strong>Servidor:</strong> {project.serverName}</p>
                <p><strong>Tecnologías:</strong> {project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const styles = {
  projectsSection: {
    backgroundColor: '#1d1d1d',
    padding: '2rem',
  },
  title: {
    color: '#ff5252',
    textAlign: 'center',
  },
  projectCard: {
    backgroundColor: '#1d1d1d',
    border: '2px solid #ff5252',
    borderRadius: '10px',
    padding: '1rem',
  },
  projectContent: {
    display: 'flex', // Usamos flexbox para alinear la imagen y la información
    alignItems: 'center', // Alinea verticalmente el contenido
  },
  projectImage: {
    width: '150px', // Ancho máximo de la imagen
    height: 'auto', // Mantener la proporción de la imagen
    borderRadius: '10px',
    marginRight: '20px', // Espacio entre la imagen y la información
  },
  projectInfo: {
    color: '#e0e0e0',
  },
  slider: {
    marginTop: '20px',
  },
};

export default Projects;
