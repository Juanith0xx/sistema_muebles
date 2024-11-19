import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura los datos del correo
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email, // Este campo debe coincidir
      message: formData.message,
    };

    // Envía el correo usando EmailJS
    emailjs.send(
      'service_c60cjid', // Service ID
      'template_m615mel', // Template ID
      templateParams,
      'kEfgki1uhnRq31pjs' // Public Key (API User ID)
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Formulario enviado de forma correcta. Gracias por contactarnos.');
      })
      .catch((err) => {
        console.error('Error al enviar el formulario:', err);
        alert(`Hubo un problema al enviar el formulario. Por favor, intenta de nuevo más tarde. Error: ${err.text || err.message}`);
      });
  };

  return (
    <>
      <div className='contact-h'>
        <h1 className='contact-h1'>Contacto</h1>
      </div>
  
      <Form className='contact' onSubmit={handleSubmit}>
        <Form.Group controlId="formName" style={{ marginBottom: '10px' }}>
          <Form.Label><b>Nombre</b></Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group controlId="formEmail" style={{ marginBottom: '10px' }}>
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
  
        <Form.Group controlId="formMessage">
          <Form.Label><b>Mensaje</b></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Escribe tu mensaje"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        <div className='b-contact'>
          <Button type="submit" className='boton-p'>
            Enviar
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ContactForm;
