import Button from "react-bootstrap/esm/Button"
import "./CSS/HomePage.css"
import { Container } from "react-bootstrap"

const HomePage = () => {
  return (
    <Container className="content-home">
    <div className="home-m">
      <h1 className="h1-home">Una <br></br>Solución<br></br>Integral</h1>
        <a href="mailto:contacto@sistemamuebles.cl">
            <Button className="boton-p">Mas información</Button>
          </a> 
    </div>
    </Container>
  )
}

export default HomePage
