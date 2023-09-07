import React , { useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingSpinner from "./LoadingSpinner";
import { urlApi } from './../services/urls';

function Formulario() {
  const [ email, setEmail] = useState('');
  const [ nombre, setNombre] = useState('');
  const [ texto, setTexto ] = useState('');
  const [ maximo, setMaximo ] = useState(250);
  const [ botonState, changeBotonState] = useState(true);
  const [ isLoading, setIsLoading] = useState(false);
  const [ errorCorreo, setErrorCorreo] = useState('hideError');
  const [ errorNombre, setErrorNombre] = useState('hideError');
  const [ errorTexto, setErrorTexto] = useState('hideError');

  const handleEmailChange = (e) => {
    let posicionArroba = e.target.value.lastIndexOf('@');
    let posicionPunto = e.target.value.lastIndexOf('.');
    if (!(posicionArroba < posicionPunto && posicionArroba > 0 && e.target.value.indexOf('@@') === -1 && posicionPunto > 2 && (e.target.value.length - posicionPunto) > 2)) {
      setErrorCorreo('showError')
      console.log("Error del correo");
    }else{
      setErrorCorreo('hideError')
      console.log("Correo valido")
      setEmail(e.target.value);
    }
  };
  const handleNombreChange = (e) => {
    if (e.target.value.length < 2) {
      setErrorNombre('showError')
      console.log("Error nombre");
    }else{
      setErrorNombre('hideError')
      console.log("Nombre valido");
      setNombre(e.target.value);
    }
  };
  const handleTextoChange = (e) => {
    setMaximo(250 - e.target.value.length)
    if (e.target.value.length < 2) {
      setErrorTexto('showError')
      console.log("Error texto");
    }else{
      setErrorTexto('hideError')
      console.log("Nombre valido");
      setTexto(e.target.value);
    }
  };
  const handleChexbox = (e) => {
    if (!e.target.checked === true) {
      console.log("Error texto");
    }else{
      console.log("Chequeado")
      changeBotonState(false)
    }

  }

  const enviarMensaje = (e) => {
    e.preventDefault(); 
    setIsLoading(true);

    console.log("Enviar formulario");
    var raw = JSON.stringify({
      "nombreContacto": nombre,
      "consultaContacto": texto,
      "emailContacto": email
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'manual'
    };
    fetch(urlApi+'/api/contactos', requestOptions)
    .then((response) => response.json())
    .then((data) => {
        if(data.code === 401){
          console.log("Ha habido un error con el login");
        }else{
          console.log('Mensaje enviado:');  
        }
      })

    .catch((error) => {
      console.error('Error', error);
    })
    .finally(()=>{

      window.location.href='/enviado';
    
    });
  }
  const renderUser = (
    <div className="card">
    <div className="card-header">
      Contactar con Thinking
    </div>
    <div className="card-body">
      <form onSubmit={enviarMensaje}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nombre de contacto</label>
            <input type="text" id="nombre" onChange={handleNombreChange}  className="form-control"  aria-describedby="emailHelp" placeholder="Nombre de contacto" required />
            <span className={errorNombre}>Debes escribir un nombre</span>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Dirección de correo</label>
            <input type="email" id="email" onChange={handleEmailChange}  className="form-control"  aria-describedby="emailHelp" placeholder="Tu correo electrónico" required />
            <span className={errorCorreo}>El correo no tiene un formato correto</span>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Déjame tu consulta, máximo {maximo} caracteres</label>
            <textarea name="texto" id='texto' onChange={handleTextoChange} className="form-control" maxLength="250" placeholder='Déja tu consulta' rows={4} cols={43} required />
            <span className={errorTexto}>Haz una sujerencia o dejanos una pregunta</span>

          </div>
          <div className="form-check">
          <label  className="form-check-label" htmlFor="checked">Aceptar protección de datos</label>
            <input onChange={handleChexbox} type="checkbox" className="form-check-input" id="checked" required />
          </div>
          <button type="submit" disabled={botonState} className="btn btn-primary">Enviar formulario</button>
      </form>
    </div>
  </div>
  );
  return (
    <div>
      {isLoading ? <LoadingSpinner /> : renderUser}
    </div>
  )
}

export default Formulario