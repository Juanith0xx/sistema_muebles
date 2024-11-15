import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const cardsData = [
    {
      title: 'FALP SANTIAGO',
      image: 'https://via.placeholder.com/300x200',
      description: 'Desarrollo de mobiliario clínico y hospitalario',
    },
    {
      title: 'PUERTAS CLÍNICAS',
      image: 'https://via.placeholder.com/300x200',
      description: 'Desarrollamos y fabricamos puertas clínicas de HPL',
    },
    {
      title: 'MUEBLES COCINA',
      image: 'https://via.placeholder.com/300x200',
      description: 'Fabricamos muebles de cocina con la más alta tecnología',
    },
  ];

function CustomCard({ title, image, description }) {
  return (
    <Card className="custom-card mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center fw-bold">{title}</Card.Title>
        <Card.Text className="text-center">
          {description}
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="outline-secondary">Ver más</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
