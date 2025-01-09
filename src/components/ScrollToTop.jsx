import { useState, useEffect } from 'react';
import { BsArrowUpCircle } from "react-icons/bs"; // Importar el ícono
import '../CSS/ScrollToTop.css'; // Importar el CSS

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Detectar desplazamiento
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Agregar/quitar el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <BsArrowUpCircle size={40} /> {/* Tamaño del ícono */}
    </button>
  );
};

export default ScrollToTop;

