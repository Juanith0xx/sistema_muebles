import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import CustomCard from './assets/components/CustomCard';
import MyNavbar from './assets/components/Navbar';
import Nosotros from './assets/components/Nosotros';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NuestraFabrica from './assets/components/NuestraFabrica';
import ClientesSatisfechos from './assets/components/ClientesSatisfechos';
import Contacto from './assets/components/Contacto';
import Home from './assets/components/Home';
import Footer from './assets/components/Footer';
import ProjectDetails from './assets/components/ProjectDetails';
import { Link } from 'react-router-dom';

const cardsData = [
  {
    projectId: 1,
    title: 'Clínica Bio Bio',
    image: '/img/clinica-bio-bio.png',
    description: 'Detalles de la Clínica Bio Bio',
  },
  {
    projectId: 2,
    title: 'ACHS Los Andes',
    image: '/img/achslosande.jpg',
    description: 'Detalles de ACHS Los Andes',
  },
  {
    projectId: 3,
    title: 'Clínica Santa María',
    image: '/img/clinica-santamaria.jpg',
    description: 'Detalles de la Clínica Santa María',
  },
];

function App() {
  const testimonialData = {
    logo: 'https://via.placeholder.com/100',
    name: 'Jaime Foldón',
    testimonial:
      'Los testimonios son citas cortas de personas a las que les encanta tu marca. Es una excelente forma de convencer a los clientes para que prueben tus servicios.',
  };

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container id="home">
                <Home />
              </Container>

              <Container id="nosotros">
                <Nosotros />
              </Container>

              <Container className="my-5">
                <h2 id="proyectos destacados" className="h2-proyectos">
                  Proyectos Destacados
                </h2>
                <Row className="justify-content-center">
                  {cardsData.map((card) => (
                    <Col md={4} key={card.projectId}>
                      <CustomCard
                        title={card.title}
                        image={card.image}
                        description={card.description}
                        projectId={card.projectId}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>

              <Container id="fabrica">
                <NuestraFabrica />
              </Container>

              <Container id="proyectos">
                <h2 className="clientes-h">Nuestros Clientes</h2>
                <ClientesSatisfechos
                  logo={testimonialData.logo}
                  name={testimonialData.name}
                  testimonial={testimonialData.testimonial}
                />
              </Container>

              <Container id="contacto">
                <Contacto />
              </Container>

              <Container>
                <Footer />
              </Container>
            </>
          }
        />

        {/* Ruta para los detalles del proyecto */}
        <Route path="/proyecto/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
