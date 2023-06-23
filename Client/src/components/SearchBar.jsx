import { useState } from "react";
import styled from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {
   const[id, setId] = useState('');
   
   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styled.container}>
         <input className={styled.barra} type='search' onChange={handleChange} value={id}/>
         <button className={styled.boton} onClick={() => {onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}
//pasar el argumento a una funcion q esta como un atributo lo hago con un callback.
//Cuando alguien le haga click a ese boton recien ahi se tiene q ejecutar esa funcion