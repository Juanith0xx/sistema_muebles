import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./CSS/Servicios.css";

const Servicios = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Cambia entre 0, 1 y 2
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div id="servicios" className="servicios-h">
      <h1 className="servicios-titulo">Nuestros Servicios</h1>
      <Container>
        <div className="servicios-grid">
          {[
            {
              src: "img/corte.png",
              alt: "Servicio de Dimensionado",
              titulo: "Servicio de Dimensionado",
            },
            {
              src: "img/pegado.png",
              alt: "Servicio de Pegado de Canto",
              titulo: "Servicio de Pegado de Canto",
            },
            {
              src: "img/prensado.png",
              alt: "Servicio de Mecanizado en CNC",
              titulo: "Servicio de Mecanizado en CNC",
            },
          ].map((servicio, index) => (
            <div className="servicio-item" key={index}>
              <img
                src={servicio.src}
                alt={servicio.alt}
                className={`servicio-imagen ${
                  activeIndex === index || hoveredIndex === index
                    ? "hover-subir-bajar"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              <h3 className="servicio-titulo">{servicio.titulo}</h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Servicios;
