import { useEffect } from "react";
import { useLocation } from "react-router-dom";  // Importamos useLocation para detectar cambios en la URL

const ScrollToSection = ({ sectionId }) => {
  const location = useLocation();  // Hook para obtener la ubicación actual de la URL

  useEffect(() => {
    // Solo intentamos hacer scroll cuando el hash cambia
    if (location.hash && location.hash.substring(1) === sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight || 0; // Calcula la altura del navbar
        const offset = -navbarHeight - 20; // Ajusta el desplazamiento según la altura del navbar y un pequeño margen
        const sectionTop = section.getBoundingClientRect().top + window.scrollY + offset;

        // Desplázate suavemente
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    }
  }, [location, sectionId]);  // Dependemos de la ubicación para ejecutar el scroll cuando la URL cambia

  return null;
};

export default ScrollToSection;
