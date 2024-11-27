import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import "./CSS/ClientesSatisfechos.css" 

function ImageCarousel() {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/Falp.png" alt="Falp" style={{ width: '138px', maxWidth: '100%', height: 'auto' }} />
            <h3 className="carousel-title">Falp</h3>
          </Col>
          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/ohl.png" alt="OHL" style={{ width: '138px', maxWidth: '100%', height: 'auto' }} />
            <h3 className="carousel-title">OHL</h3>
          </Col>
          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/parquearauco.png" alt="Parque Arauco" style={{ width: '138px', maxWidth: '100%', height: 'auto' }} />
            <h3 className="carousel-title">Parque Arauco</h3>
          </Col>
        </Row>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/Logo Clientes/ACHS.JPG" alt="ACHS" style={{ width: '138px', maxWidth: '100%', height: 'auto' }} />
            <h3 className="carousel-title">ACHS</h3>
          </Col>
          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/Logo Clientes/Biobio.JPG" alt="Clinica Bio bio" style={{ width: '200px', maxWidth: '100%', height: 'auto' }} />
            <h3 className="carousel-title">Clinica Bio Bio</h3>
          </Col>
          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/Logo Clientes/Mutual.JPG" alt="Cliente 3" style={{ width: '220px', maxWidth: '100%', height: 'auto' }} />
            <h3 className="carousel-title">Mutual de Seguridad</h3>
          </Col>
        </Row>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/Logo Clientes/Ahumada.JPG" alt="Farmacia Ahumada" style={{ width: '220px', maxWidth: '100%', height: 'auto'}} />
            <h3 className="carousel-title">Farmacias Ahumada</h3>
          </Col>

          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/Logo Clientes/CLC.JPG" alt="CLC Maderas" style={{ width: '150px', maxWidth: '100%', height: 'auto'}} />
            <h3 className="carousel-title">CLC Maderas</h3>
          </Col>
          <Col md={4} className="text-center">
            <img className="d-block carousel-image" src="/img/Logo Clientes/Mandarin.JPG" alt="Mandarin" style={{ width: '150px', maxWidth: '100%', height: 'auto'}} />
            <h3 className="carousel-title">Mandarin</h3>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>

    
  );
}

export default ImageCarousel;
