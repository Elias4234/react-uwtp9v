import React from "react";
import {useState, useEffect} from 'react';
import {baseDeDato} from './ConfiguracionFirebase.js';
import UsuarioNuevo from "./UsuarioNuevo.js";
import Usuario from "./Usuario.js";
import "./App.css";

function App() {
 Const [contactos, setContactos] = useState([]);

 function agregarNuevoContacto(contacto){
  cargarContactos();
 }
 function cargarContactos(){
  const listado = [];
  baseDeDato.collection('contactos').get()
  .then(resultado =>{
   resultado.forEach(contacto => {
     listado.push(contacto.data());
    })
   setContactos(listado);
 }).catch(error => console.log(error));
 }
 
 useEffect(cargarContactos,[]);
  
 return (
    <div className = "App">
      <header className = "App-header">
        <ContactoNuevo agregarNuevoContacto={agregarNuevoContacto} />
        {
          contactos && contactos.length && contactos.slice().reverse().map((contacto,i) => {
            const {nombre, apellido, telefono} = contacto;
            return (<Contacto key = {i} nombre ={nombre} apellido = {apellido} telefono = {telefono}/>)
          })
        }
      </header>
    </div>
  );
}

export default App;