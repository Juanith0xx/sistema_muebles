import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MyNavbar from './assets/components/Navbar';
import Nosotros from './assets/components/Nosotros';
import Container from 'react-bootstrap/Container';
import NuestraFabrica from './assets/components/NuestraFabrica';
import ClientesSatisfechos from './assets/components/ClientesSatisfechos';
import Contacto from './assets/components/Contacto';
import Home from './assets/components/Home';
import Footer from './assets/components/Footer';
import ProjectDetails from './assets/components/ProjectDetails';
import Map from './assets/components/Map';


function App() {
  
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

              <Container id="fabrica">
                <NuestraFabrica />
              </Container>

              <Container className='content-clientes'>
                <h1 className='h-clientessatisfechos'>Nuestros Clientes</h1>
                <ClientesSatisfechos />
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

        <Route path="/proyecto/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
