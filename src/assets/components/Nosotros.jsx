import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import "./CSS/Nosotros.css"; // Asegúrate de importar el CSS si aún no lo tienes

const Nosotros = () => {
  const [showForm, setShowForm] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email) {
      setFormCompleted(true);
      alert("Formulario enviado correctamente. El archivo PDF se abrirá en una nueva pestaña.");
      
      // Ruta del archivo PDF
      const pdfUrl = "/portafolio.pdf"; // Cambia esta ruta al archivo real
      
      // Abre el archivo PDF en una nueva pestaña
      window.open(pdfUrl, "_blank");

      // Esperar un momento antes de cambiar el estado de 'showForm' a false, para que el usuario vea el PDF.
      setTimeout(() => {
        setShowForm(false);
        setFormCompleted(false); // Si quieres también reiniciar el estado del formulario
      }, 10000);  // 3000 milisegundos (3 segundos) para permitir que el usuario vea la acción antes de ocultar el formulario
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div id="nosotros" className="nosotros-home">
      <h1 className="h1-nosotros">Nosotros</h1>
      <div className="content-nosotros">
        <img
          src="/img/Nosotros.JPG"
          alt="Logo"
          className="imagen-nosotros"
        />
        <div className="text-nosotros">
          <p className="p-nosotros">
            Somos una empresa dedicada al desarrollo integral de proyectos de interiorismo corporativo encargándonos del desarrollo, planimetría, fabricación e instalación en obra.
            Nuestra propuesta de valor se basa en el desarrollo, ya que contamos con un equipo multidisciplinario especializado en mobiliario, quienes en conjunto con el taller pueden desarrollar diversos proyectos lo que nos hace caracterizarnos por ser versátiles y adaptarnos a cada uno de los proyectos que el cliente requiera.
          </p>
          {!showForm && (
            <Button className="boton-p" onClick={() => setShowForm(true)}>
              Consúltanos ya
            </Button>
          )}

          {showForm && (
            <div className="form-container">
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

                <Form.Group controlId="formPhone">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu teléfono"
                    name="phone"
                    value={formData.phone}
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

                <Button variant="primary" type="submit" className="mt-3">
                  Enviar
                </Button>
              </Form>

              {formCompleted && (
                <a href="/portafolio.pdf" target="_blank" download>
                  <Button className="boton-p mt-3">Descargar PDF</Button>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
