import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomCard from './CustomCard';  // Asegúrate de importar tu CustomCard
import ClinicaBioBio from './ClinicaBioBio';  // Asegúrate de importar el nuevo componente

function App() {
  return (
    <Router>
      <Routes>
        {/* Definir la ruta para el componente ClinicaBioBio */}
        <Route path="/proyecto/clinica-bio-bio" element={<ClinicaBioBio />} />
             
        {/* Otras rutas, por ejemplo, la de tu componente de inicio o listado */}
        <Route path="/" element={<div>Inicio</div>} />
      </Routes>
    </Router>
  );
}

export default App;
