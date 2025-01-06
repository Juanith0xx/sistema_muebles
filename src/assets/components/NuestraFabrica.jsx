import "./CSS/NuestraFabrica.css";

const NuestraFabrica = () => {
  return (
    <div className='fabrica-home'>
      <h1 className='nuestraf-h1'>Nuestra Fábrica</h1>
      <div className='content-fabrica'>
        <div className='text-fabrica'>
          {/*<p className="p-fabrica">
            Descripcion para el video
          </p> */}
          {/* <Button className='boton-p'>Saber Más</Button> */}
        </div>
        <video
  className="video-fabrica"
  src="public/nuestra-fabrica.mp4"
  type="video/mp4" // Especifica explícitamente el tipo MIME
  width="1050"
  height="500"
  controls
  autoPlay
  loop
  muted
>
  Tu navegador no soporta videos HTML5.
</video>
      </div>
    </div>
  );
};

export default NuestraFabrica;
