import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Home from "./assets/components/Home";
import Nosotros from "./assets/components/Nosotros";
import NuestraFabrica from "./assets/components/NuestraFabrica";
import OficinasCorporativas from "./assets/components/OficinasCorporativas";
import MueblesHospitalarios from "./assets/components/MueblesClinicos-Hospitalarios";
import Puertas from "./assets/components/Puertas";
import Servicios from "./assets/components/Servicios";
import ClientesSatisfechos from "./assets/components/ClientesSatisfechos";
import Contacto from "./assets/components/Contacto";
import ScrollToTop from './assets/components/ScrollToTop';


function App() {
  return (
    <Router
      future={{
        v7_relativeSplatPath: true, // Activa la compatibilidad con el comportamiento de rutas de v7
      }}
    >
      <ScrollToTop />
      <Routes>
        {/* Layout general con el Navbar */}
        <Route path="/" element={<Layout />}>
          {/* Rutas principales */}
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="fabrica" element={<NuestraFabrica />} />
          <Route path="clientes-satisfechos" element={<ClientesSatisfechos />} />
          <Route path="contacto" element={<Contacto />} />

          {/* Rutas específicas */}
          <Route path="Oficinas-Corporativas" element={<OficinasCorporativas />} />
          <Route path="Muebles-Clinicos-Hospitalarios" element={<MueblesHospitalarios />} />
          <Route path="puertas" element={<Puertas />} />
          <Route path="servicios" element={<Servicios />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
