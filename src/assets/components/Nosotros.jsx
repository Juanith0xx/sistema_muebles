import Button from "react-bootstrap/esm/Button";
import "./Nosotros.css"; // Asegúrate de importar el CSS si aún no lo tienes

const Nosotros = () => {
  return (
    <div className="nosotros-home">
      <h1 className="h1-nosotros">Nosotros</h1>
      <div className="content-nosotros">
        <img
          src="/img/Nosotros.jpg"
          alt="Logo"
          className="imagen-nosotros"
        />
        <div className="text-nosotros">
          <p className="p-nosotros">
            Somos una empresa dedicada al desarrollo integral de proyectos de interiorismo corporativo encargándonos del desarrollo, planimetría, fabricación e instalación en obra.
            Nuestra propuesta de valor se basa en el desarrollo, ya que contamos con un equipo multidisciplinario especializado en mobiliario, quienes en conjunto con el taller pueden desarrollar diversos proyectos lo que nos hace caracterizarnos por ser versátiles y adaptarnos a cada uno de los proyectos que el cliente requiera.
          </p>
          <a href="mailto:contacto@sistemamuebles.cl">
            <Button className="boton-p">Consúltanos ya</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
