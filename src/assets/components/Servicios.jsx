import { Container } from "react-bootstrap";
import "./CSS/Servicios.css";

const Servicios = () => {
  return (
    <div id="servicios" className="servicios-h">
      <h1>Nuestos Servicios </h1>
      <Container >
      <div className="servicios-ul">
        <div><h3>Servicio de Dimensionado</h3></div>
        <div><h3>Servicio de Pegado de Canto</h3></div>
        <div><h3>Servicio de Mecanizado en CNC</h3></div>
        <div><h3>Servicio de Prensado</h3></div>
        <div><h3>Servicios de fabricación integral sin instalación</h3></div>
      </div>
      </Container>
    </div>
  )
}

export default Servicios
