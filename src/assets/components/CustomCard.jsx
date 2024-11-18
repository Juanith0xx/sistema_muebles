import React from 'react';
import Card from 'react-bootstrap/Card';

function CustomCard({ title, image, description }) {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={image} className="card-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
