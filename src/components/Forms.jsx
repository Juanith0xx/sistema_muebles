import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function DownloadPDFButton() {
  const [formCompleted, setFormCompleted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormCompleted(true);
      alert("Formulario enviado correctamente. Ahora puedes descargar el archivo.");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {formCompleted && (
        <a href="/path-to-your-file.pdf" download>
          <Button className="boton-p mt-3">Descargar PDF</Button>
        </a>
      )}
    </div>
  );
}

export default DownloadPDFButton;
