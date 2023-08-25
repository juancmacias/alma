import ReactDOM from 'react-dom';
import App from './App';

test('Se carga main', () => {
  const elemento = document.createElement('main');
  ReactDOM.render(<App/>, elemento)
});
