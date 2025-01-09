import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import NuestraFabrica from "./components/NuestraFabrica";
import OficinasCorporativas from "./components/OficinasCorporativas";
import MueblesHospitalarios from "./components/MueblesClinicos-Hospitalarios";
import Puertas from "./components/Puertas";
import Servicios from "./components/Servicios";
import ClientesSatisfechos from "./components/ClientesSatisfechos";
import Contacto from "./components/Contacto";
import ScrollToTop from './components/ScrollToTop';
import ScrollToSection from "./Utils/ScrollToSection"; // Asegúrate de importar ScrollToSection

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
      
      {/* Asegúrate de manejar los anclajes con ScrollToSection */}
      <ScrollToSection sectionId="nosotros" />
      <ScrollToSection sectionId="clientes-satisfechos" />
      <ScrollToSection sectionId="fabrica" />
      <ScrollToSection sectionId="contacto" />
    </Router>
  );
}

export default App;
