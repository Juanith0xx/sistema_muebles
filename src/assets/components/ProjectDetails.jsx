import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Estilos de Lightbox
import './ProjectDetails.css'; // Tus propios estilos opcionales

const projectData = {
  1: {
    title: 'Proyecto Clínica Bio Bio',
    description: 'Descripción detallada del Proyecto Clínica Bio Bio.',
    images: [
      '/img/fondo.jpg',
      '/img/Clinica Biobio.JPG',
      '/img/Clinica Biobio.JPG',
      '/img/Clinica Biobio.JPG',
    ],
  },
  2: {
    title: 'ACHS Los Andes',
    description: 'Descripción detallada del proyecto ACHS Los Andes.',
    images: [
      '/img/proyecto2/imagen1.jpg',
      '/img/proyecto2/imagen2.jpg',
      '/img/proyecto2/imagen3.jpg',
    ],
  },
  3: {
    title: 'Clínica Santa María',
    description: 'Descripción detallada del Proyecto Clínica Santa María.',
    images: [
      '/img/proyecto3/imagen1.jpg',
      '/img/proyecto3/imagen2.jpg',
      '/img/proyecto3/imagen3.jpg',
    ],
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!project) {
    return <p>Proyecto no encontrado.</p>;
  }

  const { title, description, images } = project;

  return (
    <div className="project-details">
      <h1 className="project-title">{title}</h1>
      <p className="project-description">{description}</p>

      {/* Galería de imágenes */}
      <div className="project-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - Imagen ${index + 1}`}
            className="project-image"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox para imágenes en pantalla completa */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* Enlace para volver a la página principal */}
      <Link to="/" className="boton-p-p">Volver a la página principal</Link>
    </div>
  );
};

export default ProjectDetails;
