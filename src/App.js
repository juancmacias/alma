
import Frame from './Componentes/Frame';
import Inicial from './Componentes/Inicial';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SesionUno from './Componentes/SesionUno';

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Inicial/>} />
          <Route path="/hubs" element={<Frame/>} />
          <Route path="/sesionuna" element={<SesionUno/>} />
        </Routes>
    </div>
  );
}

export default App;
