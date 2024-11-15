import Button from 'react-bootstrap/Button';

const NuestraFabrica = () => {
  return (
    <div className='fabrica-home'>
      <h1 className='nuestraf-h1'>Nuestra Fábrica</h1>
      <div className='content-fabrica'>
        <div className='text-fabrica'>
          <p className="p-fabrica">
            Con más de una década de experiencia en la industria inmobiliaria, sé que tengo lo necesario para encontrar la casa de tus sueños. No hay nada imposible.
          </p>
          <Button className='boton-p'>Saber Más</Button>
        </div>
        <img
          src="/img/nuestra fabrica.jpg"
          alt="Nuestra Fábrica"
          width="650"
          height="500"
          className="imagen-fabrica"
        />
      </div>
    </div>
  );
}

export default NuestraFabrica;
