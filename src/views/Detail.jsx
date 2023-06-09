import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "./Detail.module.css"
import imageSrc from '/Users/Danna/Desktop/rick_and_morty/src/imagen/rickrosa.png';
import imageSrc2 from '/Users/Danna/Desktop/rick_and_morty/src/imagen/mortyrosaa.png';

const Detail= () => {

const { id } = useParams();

const [character, setCharacter]= useState({});

// [NOTA]: este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.
useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
         setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (

            <div className={styled.container}>
                <div className={styled.container2}>
                <div className={styled.imagenrick} style={{ backgroundImage: `url(${imageSrc})` }}></div>
                <div className={styled.imagenmorty} style={{ backgroundImage: `url(${imageSrc2})` }}></div>
                <h1 className={styled.h1}>{character?.name}</h1>
                </div>
                <h2 className={styled.h2}>🌺Status: {character?.status}</h2>
                <h2 className={styled.h2}>🌺Species: {character?.species}</h2>
                <h2 className={styled.h2}>🌺Gender: {character?.gender}</h2>
                <h2 className={styled.h2}>🌺Origin: {character?.origin?.name}</h2>
                <img src={character?.image} alt={character?.name} className={styled.imagen} />
                </div>
            
        
    );
}

export default Detail;