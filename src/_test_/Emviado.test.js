import ReactDOM from 'react-dom';
import Enviado from '../Componentes/Enviado'
test('Create render h2', async () => {
    const elemento = document.createElement('main');
    ReactDOM.render(<Enviado/>, elemento)
  });
