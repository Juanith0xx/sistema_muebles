import { useEffect } from "react";

const ScrollToSection = ({ sectionId }) => {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("Navbar").offsetHeight || 0; // Calcula la altura del navbar
      const offset = -navbarHeight - 20; // Ajusta el desplazamiento según la altura del navbar y un pequeño margen
      const sectionTop = section.getBoundingClientRect().top + window.scrollY + offset;

      // Desplázate suavemente
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  }, [sectionId]);

  return null;
};

export default ScrollToSection;
