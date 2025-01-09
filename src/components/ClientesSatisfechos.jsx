import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";
import "../CSS/ClientesSatisfechos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel() {
  const settings = {
    dots: true, // Agrega indicadores
    infinite: true, // Ciclo infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de slides visibles
    slidesToScroll: 1, // Número de slides que avanza por transición
    autoplay: true, // Auto-rotación
    autoplaySpeed: 3000, // Tiempo entre rotaciones
    adaptiveHeight: true, // Ajuste de altura automático
    arrows: true, // Flechas de navegación
  };

  const slides = [
    [
      { src: "/img/Logo Clientes/Falp.png", alt: "Falp", title: "Falp", width: "138px" },
      { src: "/img/Logo Clientes/ohl.png", alt: "OHL", title: "OHL", width: "138px" },
      { src: "/img/Logo Clientes/parquearauco.png", alt: "Parque Arauco", title: "Parque Arauco", width: "138px" },
    ],
    [
      { src: "/img/Logo Clientes/ACHS.JPG", alt: "ACHS", title: "ACHS", width: "138px" },
      { src: "/img/Logo Clientes/Biobio.JPG", alt: "Clinica Bio bio", title: "Clinica Bio Bio", width: "200px" },
      { src: "/img/Logo Clientes/Mutual.JPG", alt: "Mutual", title: "Mutual de Seguridad", width: "220px" },
    ],
    [
      { src: "/img/Logo Clientes/Ahumada.JPG", alt: "Farmacia Ahumada", title: "Farmacias Ahumada", width: "220px" },
      { src: "/img/Logo Clientes/CLC.JPG", alt: "CLC Maderas", title: "CLC Maderas", width: "150px" },
      { src: "/img/Logo Clientes/Mandarin.JPG", alt: "Mandarin", title: "Mandarin", width: "150px" },
    ],
    [
      { src: "/img/Logo Clientes/BCG.JPG", alt: "BCG", title: "BCG", width: "220px" },
      { src: "/img/Logo Clientes/BHP.JPG", alt: "BHP", title: "BHP Billiton", width: "150px" },
      { src: "/img/Logo Clientes/Bradford.JPG", alt: "Bradford", title: "Bradford Hill", width: "150px" },
    ],
    [
      { src: "/img/Logo Clientes/Courtyard.JPG", alt: "Courtyard", title: "Courtyard", width: "220px" },
      { src: "/img/Logo Clientes/CristaleriasChile.JPG", alt: "CristalChile", title: "Cristalerias Chile", width: "150px" },
      { src: "/img/Logo Clientes/FLSmith.JPG", alt: "FLSmith", title: "FLSmith", width: "150px" },
    ],
    [
      { src: "/img/Logo Clientes/Hogares.JPG", alt: "Hogares", title: "Grupos Hogares", width: "220px" },
      { src: "/img/Logo Clientes/Idom.JPG", alt: "Idom", title: "Idom", width: "150px" },
      { src: "/img/Logo Clientes/Mandarin.JPG", alt: "Mandarin", title: "Mandarin", width: "150px" },
    ],
    [
      { src: "/img/Logo Clientes/LagoRiñihue.JPG", alt: "Lago Riñihue", title: "Lago Riñihue", width: "220px" },
      { src: "/img/Logo Clientes/Plaenge.JPG", alt: "Plaenge", title: "Plaenge", width: "150px" },
      { src: "/img/Logo Clientes/Implementos.JPG", alt: "Implementos", title: "Implementos", width: "150px" },
    ],
    [
      { src: "/img/Logo Clientes/Quest.JPG", alt: "Quest", title: "Quest", width: "220px" },
      { src: "/img/Logo Clientes/Quimica Latinoamericana.JPG", alt: "Quimica Latinoamericana", title: "Quimica Latinoamericana", width: "150px" },
      { src: "/img/Logo Clientes/Toesca.JPG", alt: "Toesca", title: "Toesca", width: "150px" },
    ],
  ];

  return (
    <Slider {...settings}>
      {slides.map((group, index) => (
        <div key={index}>
          <Row className="justify-content-center">
            {group.map((item, idx) => (
              <Col md={4} className="text-center" key={idx}>
                <img
                  className="d-block carousel-image"
                  src={item.src}
                  alt={item.alt}
                  style={{ width: item.width, maxWidth: "100%", height: "auto" }}
                />
                <h3 className="carousel-title">{item.title}</h3>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Slider>
  );
}

export default ImageCarousel;
