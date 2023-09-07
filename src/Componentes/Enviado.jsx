import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePrefersColorScheme from 'use-prefers-color-scheme'
import '../App.css';
import Sostenibles from './Sostenibles';
import Formulario from './Formulario';
import claro from '../resources/claro.svg'
import oscuro from '../resources/oscuro.svg'
import home from '../resources/home.svg'
import contacto from '../resources/formulario.svg'
import sonido_on from '../resources/speaker_on.svg'
import sonido_off from '../resources/speaker_off.svg'

function Enviado() {
      const prefersColorScheme = usePrefersColorScheme();
      const [theme, setTheme] = useState(localStorage.getItem('preferencia')=== null? prefersColorScheme:localStorage.getItem('preferencia'));
      const [ seleccion, setSeleccion] = useState('');
      const [sonido, setSonido] = useState(localStorage.getItem('sonido')=== null?'off':localStorage.getItem('sonido'));
      localStorage.removeItem("position")
      localStorage.setItem("sonido", sonido);
      localStorage.setItem("preferencia", theme);

      console.log("Seleccion color "+ prefersColorScheme);
      const verListado = (select) => {
            caches.keys().then((names) => {
                  names.forEach((name) => {
                    caches.delete(name);
                  });
                });
            setSeleccion(select);
          }
      const portalSeleccion = (ir) => {
            window.location.href=ir;
      }
    return (
      <div className={`${theme}`}>
            <header className="App-header">
                  <div className='header'>
                        <div className='name'>
                        <Link onClick={() => verListado('../')}>Thinking inmersivo</Link>
                        </div>
                        <div className='botons'>
                              
                              <button type="button"
                                    className={localStorage.getItem('sonido') === "on" ? "show" : "hidden"}
                                    aria-label="Sonido" onClick={() => setSonido('off')}
                                    title='Activar sonido'>
                                          <img src={sonido_on}  alt="Modo claro" />
                              </button>
                              <button type="button"
                                    className={localStorage.getItem('sonido') === "off" ? "show" : "hidden"}
                                    aria-label="Sonido" onClick={() => setSonido('on')}
                                    title='Desactivar sonido'>
                                          <img src={sonido_off}  alt="Modo claro" />
                              </button>
                              <button type="button"
                                    className={theme === "dark" ? "show" : "hidden"}
                                    aria-label="Use Dark Mode" onClick={() => setTheme('light')}
                                    title='Activar modo oscuro'>
                                          <img src={claro}  alt="Modo claro" />
                              </button>
                              <button type="button"
                                    className={theme === "light" ? "show" : "hidden"}
                                    aria-label="Use Light Mode" onClick={() => setTheme('dark')}
                                    title='Activar modo claro'>
                                          <img src={oscuro}  alt="Modo oscuro" />                              
                              </button>
                              <button type='button' className='show' onClick={() => verListado('formulario')} title='Contactar con Thinking With You'>
                                    <img src={contacto}  alt="Contactar" /> 
                              </button>
                              <button type='button' className='show' onClick={event =>  window.location.href='https://thinkingwithyou.com/'} title='Thinking With You'>
                                    <img src={home}  alt="Ir a Thinking With You" /> 
                              </button>
                              
                        </div>
                  </div>
            </header> 
            <main>
            {(function () {
                switch (seleccion) {
                  case 'sostenible':
                        return (
                              <Sostenibles/>
                        );
                  case 'formulario':
                        return (
                              <Formulario/>
                        );
                    case '../':
                        return (
                              portalSeleccion('../')
                        );
                  default:
                        return(
                            <div class="card_dos">
                            <div class="card-header">
                                <h2>Formulario enviado correctamente</h2>
                            </div>
                            <div class="card-body">
                            <p>
                              Te damos las gracias por contactar con nosotros.
                            </p>
                            <p>
                              Saludos cordiales.
                            </p>
                            
                            <p>
                              El equipo de desarrollo.
                            </p>
                            </div>
                          </div>
                        );
                }
            })()}
                  
            </main>
            <footer>
                  <Link onClick={() => verListado('sostenible')}>Comprometidos con la sostenibilidad - Saber más</Link>
            </footer> 
      </div>  
    );
  }
  
  export default Enviado;