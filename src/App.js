import React from "react";
import {useState, useEffect} from 'react';
import {baseDeDato} from './ConfiguracionFirebase.js';
import UsuarioNuevo from "./UsuarioNuevo.js";
import Usuario from "./Usuario.js";
import "./App.css";

function App() {
 Const [usuarios, setUsuarios] = useState([]);

 function agregarNuevoUsuario(usuario){
  cargarUsuarios();
 }
 function cargarUsuarios(){
  const listado = [];
  baseDeDato.collection('usuarios').get()
  .then(resultado =>{
   resultado.forEach(usuario => {
     listado.push(usuario.data());
    })
   setUsuarios(listado);
 }).catch(error => console.log(error));
 }
 
 useEffect(cargarUsuarios,[]);
  
 return (
    <div className = "App">
      <header className = "App-header">
        <UsuarioNuevo agregarNuevoUsuario={agregarNuevoUsuario} />
        {
          usuarios && usuarios.length && usuario.slice().reverse().map((usuario,i) => {
            const {nombre, apellido, telefono} = usuario;
            return (<Usuario key = {i} nombre ={nombre} apellido = {apellido} telefono = {telefono}/>)
          })
        }
      </header>
    </div>
  );
}

export default App;