
import Frame from './Componentes/Frame';
import Inicial from './Componentes/Inicial';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div>

        <Routes>
          <Route exact path="/" element={<Inicial/>} />
          <Route path="/hubs" element={<Frame/>} />
        </Routes>


    </div>
  );
}

export default App;
