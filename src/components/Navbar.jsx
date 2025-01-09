import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Usamos Link de react-router-dom
import "../CSS/Navbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="nav fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/img/Logo.jpg"
            alt="Logo"
            width="200"
            height="45"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav-spacing">
            {/* Usamos Link para que react-router-dom maneje las rutas */}
            <Nav.Link as={Link} to="/#nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/#clientes-satisfechos">Nuestros Clientes</Nav.Link>
            <Nav.Link as={Link} to="/#fabrica">Nuestra Fábrica</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle as={Nav.Link} id="dropdown-proyectos">
                Proyectos
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="/Oficinas-Corporativas" disabled>Oficinas Corporativas</Dropdown.Item>
                <Dropdown.Item href="/Muebles-Clinicos-Hospitalarios" disabled>Muebles Clínicos - Hospitalarios</Dropdown.Item>
                <Dropdown.Item href="/puertas" disabled>Puertas - Revestimientos Fenólicos - Marcos Telescópicos</Dropdown.Item>
                <Dropdown.Item as={Link} to="/servicios">Servicios</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to="/#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
