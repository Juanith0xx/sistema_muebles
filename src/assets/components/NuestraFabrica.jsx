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
          src="/nuestra-fabrica.mp4" // Ruta del video colocar el video ya que es muy pesado para git 
          width="1050"
          height="500"
          controls // Muestra controles para reproducir el video
          autoPlay // Opcional: Reproduce automáticamente
          loop // Opcional: Reproduce en bucle
          muted // Opcional: Silencia el video
        >
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
    </div>
  );
};

export default NuestraFabrica;