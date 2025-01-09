import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../CSS/ProjectDetails.css'; // Tus propios estilos opcionales lll

const projectData = {
  1: {
    title: 'Proyecto Clínica Bio Bio',
    images: [
      '/img/DSC02841.JPG',
      '/img/DSC02845.JPG',
      '/img/IMG-4565.JPG',
      '/img/IMG-4624.JPG',
      '/img/IMG-4632.JPG',
      '/img/IMG-4639.JPG',
      '/img/IMG-4642.JPG',
      '/img/IMG-4648.JPG',

    ],
  },
  2: {
    title: 'ACHS Los Andes',
    images: [
      '/img/IMG_1382.JPG',
      '/img/IMG_1384.JPG',
      '/img/IMG_1395.JPG',
      '/img/IMG_1398.JPG',
    ],
  },
  3: {
    title: 'Clínica Santa María',
    images: [
      '/img/IMG-20230502-WA0004.jpg',
      '/img/IMG-20230502-WA0003.jpg',
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