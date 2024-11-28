import "./CSS/OficinasCorporativas.css";
import { TbZoom } from "react-icons/tb"; // Importar el ícono de zoom

const MueblesOficina = () => {
  const images = [
    { src: "/img/DSC02841.JPG", alt: "Mueble 1" },
    { src: "/img/IMG_1382.JPG", alt: "Mueble 2" },
    { src: "/img/IMG-20230502-WA0004.jpg", alt: "Mueble 3" },
    { src: "/img/IMG-20230502-WA0003.jpg", alt: "Mueble 4" },

  ];

  const handleImageClick = (src) => {
    window.open(src, "_blank");
  };

  return (
    <div id="Oficinas-Corporativa" className="muebles-home">
      <h1>Oficinas Corporativas</h1>
      <h3>Titulo del proyecto</h3>
      <p>pequena descripcion</p>

      <div className="galeria">
        {images.map((image, index) => (
          <div className="galeria-item" key={index}>
            <img src={image.src} alt={image.alt} className="galeria-img" />
            <div className="overlay">
              <button
                className="zoom-icon"
                onClick={() => handleImageClick(image.src)}
              >
                <TbZoom size={32} color="white" /> {/* Ícono de lupa */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MueblesOficina;
