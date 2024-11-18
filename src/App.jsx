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


const cardsData = [
  {
    title: 'Clínica Bio Bio',
    image: '/img/clinica-bio-bio.png',
  },
  {
    title: 'ACHS Los Andes',
    image: '/img/achslosande.jpg',
  },
  {
    title: 'Clínica Santa María',
    image: '/img/clinica-santamaria.jpg',    
  },
];

function App() {

  const testimonialData = {
    logo: 'https://via.placeholder.com/100',
    name: 'Jaime Foldón',
    testimonial:
      'Los testimonios son citas cortas de personas a las que les encanta tu marca. Es una excelente forma de convencer a los clientes para que prueben tus servicios.',
  }

  return (
    <>
      <MyNavbar />
    
    <Container id="home">
      <div>
        <Home />
      </div>
    </Container>

    <Container id='nosotros'>
      <div>
      <Nosotros />
      </div>
    </Container>

      <Container className="my-5">
        <h2 className="h2-proyectos">Proyectos Destacados</h2>
        <Row className="justify-content-center">
          {cardsData.map((card, index) => (
            <Col md={4} key={index}>
              <CustomCard
                title={card.title}
                image={card.image}
                description={card.description}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Container id='fabrica'>
        <div>
          <NuestraFabrica />
        </div>  
      </Container>

      <Container id='proyectos'>
      <div>
      <h2 className='clientes-h'>Nuestros Clientes</h2>
      </div>
      <div>
      <ClientesSatisfechos
        logo={testimonialData.logo}
        name={testimonialData.name}
        testimonial={testimonialData.testimonial}
      />
    </div>

    <Container id='contacto'>
      <div>
        <Contacto />
      </div>
    </Container>

    </Container>
    </>
  );
}

export default App;
