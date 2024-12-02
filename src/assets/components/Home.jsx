import Nosotros from "./Nosotros";
import ClientesSatisfechos from "./ClientesSatisfechos";
import NuestraFabrica from "./NuestraFabrica";
import Contacto from "./Contacto";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <div>
      {/* Sección de Nosotros */}
      <section id="home-page">
        <HomePage />
      </section>
      
      {/* Sección de Nosotros */}
      <section id="nosotros">
        <Nosotros />
      </section>

      {/* Sección de Nuestros Clientes */}
      <section id="clientes-satisfechos">
        <h1 className="h-clientessatisfechos">Nuestros Clientes</h1>
        <ClientesSatisfechos />
      </section>

      {/* Sección de Nuestra Fábrica */}
      <section id="fabrica">
        <NuestraFabrica />
      </section>

      {/* Sección de Contacto */}
      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
};

export default Home;
