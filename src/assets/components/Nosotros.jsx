import Button from "react-bootstrap/esm/Button";

const Nosotros = () => {
  return (
    <div className="nosotros-home">
      <h1 className="h1-nosotros">Nosotros</h1>
      <div className="content-nosotros">
        <img
          src="/img/Nosotros.JPG"
          alt="Logo"
          width="650"
          height="500"
          className="d-inline-block align-top"
        />
        <div className="text-nosotros">
          <p className="p-nosotros">
            Con más de dos década de experiencia en la industria inmobiliaria, sé que tengo lo necesario para encontrar la casa de tus sueños. No hay nada imposible.
          </p>
          <Button className="boton-p">Consultanos ya</Button>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;

