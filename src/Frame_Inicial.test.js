import ReactDOM from 'react-dom';

import Frame from './Componentes/Frame';

test('Create scene principal', () => {
  const elemento = document.createElement('Scene');
  ReactDOM.render(<Frame/>, elemento)
});
