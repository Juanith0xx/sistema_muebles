import Button from "react-bootstrap/esm/Button";
import "./CSS/HomePage.css";

const HomePage = () => {
  return (
    <div className="content-home"> {/* Cambié Container por div */}
      <div className="home-m">
        <h1 className="h1-home">Una <br />Solución<br />Integral</h1>
        <a href="mailto:contacto@sistemamuebles.cl">
          <Button className="boton-p">Mas información</Button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;