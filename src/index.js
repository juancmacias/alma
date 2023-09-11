import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import Frame from './Componentes/Frame';
import Inicial from './Componentes/Inicial';
import { Route, Routes } from 'react-router-dom';
import Valores from './Componentes/Valores';
import reportWebVitals from './reportWebVitals';
import SesionTres from './Componentes/SesionTres'
import SesionCinco from './Componentes/SesionCinco';
import Enviado from './Componentes/Enviado';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Inicial/>} />
        <Route path="/hubs" element={<Frame />} />
        <Route path="/valores" element={<Valores/>} />
        <Route path="/sesiontres" element={<SesionTres/>} />
        <Route path="/sesioncinco" element={<SesionCinco/>} />
        <Route path='/enviado' element={<Enviado/>} />
      </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
