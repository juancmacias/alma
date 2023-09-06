
import Frame from './Componentes/Frame';
import Inicial from './Componentes/Inicial';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Formulario from './Componentes/Formulario';
import SesionCinco from './Componentes/SesionCinco';

function App() {
  return (
    <div>

        <Routes>
          <Route exact path="/" element={<Inicial/>} />
          <Route path="/hubs" element={<Frame/>} />
          <Route path="/sesioncinco" element={<SesionCinco/>} />
        </Routes>


    </div>
  );
}

export default App;
