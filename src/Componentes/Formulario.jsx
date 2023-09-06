import React , { useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingSpinner from "./LoadingSpinner";


function Formulario() {
  const [ email, setEmail] = useState('');
  const [ nombre, setNombre] = useState('');
  const [ texto, setTexto ] = useState('');
  const [ maximo, setMaximo ] = useState(250);
  const [botonState, changeBotonState] = useState(true);
  const [ isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    let posicionArroba = e.target.value.lastIndexOf('@');
    let posicionPunto = e.target.value.lastIndexOf('.');
    if (!(posicionArroba < posicionPunto && posicionArroba > 0 && e.target.value.indexOf('@@') === -1 && posicionPunto > 2 && (e.target.value.length - posicionPunto) > 2)) {

      console.log("Error del correo");
    }else{
      console.log("Correo valido");

      setEmail(e.target.value);
    }
    
  };
  const handleNombreChange = (e) => {

    if (e.target.value.length < 2) {
      console.log("Error nombre");

    }else{
      console.log("Nombre valido");

      setNombre(e.target.value);
    }
    
  };
  const handleTextoChange = (e) => {
    setMaximo(250 - e.target.value.length)
    if (e.target.value.length < 2) {
      console.log("Error texto");

    }else{
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


    fetch('http://127.0.0.1:8000/formulario/nuevo?email='+email+'&nombre='+nombre+'&texto='+texto, {
      method: 'GET',
    })
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
      setIsLoading(false);
      //window.location.reload();
    });
  }
  const renderUser = (
    <div class="card">
    <div class="card-header">
      Contactar con Thinking
    </div>
    <div class="card-body">
      <form onSubmit={enviarMensaje}>
        <div class="form-group">
            <label for="exampleInputEmail1">Nombre de contacto</label>
            <input type="text" id="nombre" onChange={handleNombreChange}  class="form-control"  aria-describedby="emailHelp" placeholder="Nombre de contacto" required />
            
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Dirección de correo</label>
            <input type="email" id="email" onChange={handleEmailChange}  class="form-control"  aria-describedby="emailHelp" placeholder="Tu correo electrónico" required />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Déjame tu consulta, máximo {maximo} caracteres</label>
            <textarea name="texto" id='texto' onChange={handleTextoChange} class="form-control" maxlength="250" placeholder='Déja tu consulta' rows={4} cols={43} required />
            

          </div>
          <div class="form-check">
          <label  class="form-check-label" for="checked">Aceptar protección de datos</label>
            <input onChange={handleChexbox} type="checkbox" class="form-check-input" id="checked" required />
          </div>
          <button type="submit" disabled={botonState} class="btn btn-primary">Enviar formulario</button>
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