import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';  // Importa Link para navegación entre rutas de React

function CustomCard({ title, image, description, projectId }) {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={image} className="card-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link 
          to={`/proyecto/${projectId}`} 
          target="_blank"  // Esto indica que debe abrirse en una nueva pestaña
          rel="noopener noreferrer" // Seguridad adicional al usar target="_blank"
          className="boton-p-p">
          Ver detalles
        </Link>
      </Card.Body>
    </Card>
  );
};
export default CustomCard;