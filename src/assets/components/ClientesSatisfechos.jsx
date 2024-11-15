import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaStar } from 'react-icons/fa';

function ClientesSatisfechos({ logo, name, testimonial }) {
  return (
    <Card className="testimonial-card text-center">
      <Card.Body>
        <Image src={logo} roundedCircle style={{ width: '100px', height: '100px' }} />
        <Card.Title className="mt-3 fw-bold">{name}</Card.Title>
        <Card.Text className="text-muted">
          {testimonial}
        </Card.Text>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color="#D35400" size={20} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ClientesSatisfechos;
