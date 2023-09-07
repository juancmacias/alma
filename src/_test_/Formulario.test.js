import ReactDOM from 'react-dom';


import Formulario from '../Componentes/Formulario';

test('Se carga formulario', () => {
  const elemento = document.createElement('card-body');
  ReactDOM.render(<Formulario/>, elemento)
});
