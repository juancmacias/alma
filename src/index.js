import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
//import App from './App';
import Frame from './Componentes/Frame';
import Inicial from './Componentes/Inicial';
//import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Valores from './Componentes/Valores';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Inicial/>} />
        <Route path="/hubs" element={<Frame />} />
        <Route path="/valores" element={<Valores/>} />
      </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
