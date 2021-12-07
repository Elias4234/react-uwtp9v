import React, {useRef} from 'react';
import {baseDeDato} from './ConfiguracionFirebase.js';
import './Usuario';

function UsuarioNuevo({agregarNuevoUsuario}){

    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const telefonoRef = useRef(null);

    function agregarUsuario(){
      const usuario = {
        username: usernameRef.current.value,
        nombre: nombreRef.current.value,
        apellido: apellidoRef.current.value,
        telefono: telefonoRef.current.value,
      }

      baseDeDato.collection('usuarios').add(usuario);
      usernameRef.current.value = "";
      nombreRef.current.value = "";
      apellidoRef.current.value = "";
      telefonoRef.current.value = "";
      agregarNuevoUsuario(usuario);
    }

    return(
      <div className = "contenedor">
        <div className = "fila">
          <div claseName = "columna">
            Nombre Usuario
          </div>
          <div className = "columna">
            <input type = "text" className = "texto" ref = {usernameRef}/>
          </div>

          <div className = 'fila'>
            <div claseName = 'columna'>
             Nombre
            </div>
            <div className = "columna">
            <input type = "text" className = "texto" ref = {nombreRef}/>
            </div>
          </div>

          <div className = 'fila'>
            <div claseName = 'columna'>
             Apellido
            </div>
            <div className = "columna">
            <input type = "text" className = "texto" ref = {apellidoRef}/>
            </div>
          </div>

          <div className = 'fila'>
            <div claseName = 'columna'>
             Telefono
            </div>
            <div className = "columna">
            <input type = "text" className = "texto" ref = {telefonoRef}/>
            </div>
          </div>

          <div className = 'fila'>
            <div claseName = 'columna'>
             <button claseName = 'boton' onClick = {agregarUsuario}> Agregar </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default UsuarioNuevo;