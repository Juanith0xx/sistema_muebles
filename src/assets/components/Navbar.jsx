import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import "./Navbar.css"


function MyNavbar() {
  return (
    <Navbar expand="lg" className="nav fixed-top">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#proyectos">Nuestros Clientes</Nav.Link>
            <Nav.Link href="#fabrica">Nuestra Fábrica</Nav.Link>
            <Dropdown>
          <Dropdown.Toggle as={Nav.Link} id="dropdown-proyectos">
            Proyectos
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-menu'>
            <Dropdown.Item href="#proyecto1">Muebles de Oficina</Dropdown.Item>
            <Dropdown.Item href="#proyecto2">Muebles Hospitalarios</Dropdown.Item>
            <Dropdown.Item href="#proyecto3">Puertas</Dropdown.Item>
            <Dropdown.Item href="#proyecto3">Servicios</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;