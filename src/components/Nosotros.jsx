import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import emailjs from "emailjs-com"; // Asegúrate de importar emailjs
import "../CSS/Nosotros.css"; // Asegúrate de importar el CSS si aún no lo tienes

const Nosotros = () => {
  const [showForm, setShowForm] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [formError, setFormError] = useState(false); // Para manejar los errores de formulario
  const [showDownloadButton, setShowDownloadButton] = useState(false); // Para controlar la visibilidad del botón de descarga PDF

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si todos los campos están completos
    if (formData.name && formData.phone && formData.email) {
      // Configurar los parámetros del correo a enviar
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
      };

      // Usar EmailJS para enviar el correo
      emailjs
        .send(
          "service_c60cjid", // Service ID
          "template_m615mel", // Template ID
          templateParams,
          "kEfgki1uhnRq31pjs" // Public Key (API User ID)
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Formulario enviado correctamente. El archivo PDF se abrirá en una nueva pestaña.");

            // Abre el archivo PDF en una nueva pestaña
            const pdfUrl = "/portafolio.pdf"; // Cambia esta ruta al archivo real
            window.open(pdfUrl, "_blank");

            // Cambia el estado de 'formCompleted'
            setFormCompleted(true);
            setShowForm(false); // Oculta el formulario

            // Muestra el botón de descarga durante 15 segundos
            setShowDownloadButton(true);
            setTimeout(() => {
              setShowDownloadButton(false); // Oculta el botón después de 15 segundos
            }, 15000); // 15000 milisegundos = 15 segundos
          },
          (err) => {
            console.error("Error al enviar el formulario:", err);
            alert(`Hubo un problema al enviar el formulario. Por favor, intenta de nuevo más tarde. Error: ${err.text || err.message}`);
          }
        );
    } else {
      setFormError(true); // Si los campos están incompletos, muestra un error
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
              Obten Nuestro portafolio
            </Button>
          )}

          {showForm && (
            <div className="form-container">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" style={{ marginBottom: '10px' }}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    isInvalid={formError && !formData.name}
                  />
                </Form.Group>

                <Form.Group controlId="formPhone" style={{ marginBottom: '10px' }}>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu teléfono *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    isInvalid={formError && !formData.phone}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo electrónico *"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={formError && !formData.email}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="boton-p-f">
                  Enviar
                </Button>
              </Form>
            </div>
          )}

          {/* Mostrar el botón de descarga solo cuando el formulario ha sido enviado correctamente */}
          {formCompleted && showDownloadButton && (
            <a href="/portafolio.pdf" target="_blank" download>
              <Button className="boton-p-f">Descarga Portafolio</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
