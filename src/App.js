import './App.css';
import Formulario from './Componentes/Formulario';
import Frame from './Componentes/Frame';
import Inicial from './Componentes/Inicial';
import React from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Inicial/>} />
        <Route exact path="/contacto" element={<Formulario/>} />
        <Route path="/hubs" element={<Frame/>} />
      </Routes>
    </div>

  );
}

export default App;
