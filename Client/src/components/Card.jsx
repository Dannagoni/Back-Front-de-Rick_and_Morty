import React from 'react';
import styled from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addFav, removeFav} from '../../src/Redux/actions.js'
import { useState, useEffect } from 'react';


function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, species, gender, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styled.container}>
         {
            isFav ? (
               <button className={styled.corazon} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styled.corazon} onClick={handleFavorite}>🤍</button>
            )
         }
         <img className={styled.image} src={image} alt='' />
         
         <Link to={`/detail/${id}`}><h2 className={styled.h2}> {name}</h2></Link>
         <h2 className={styled.h2}>💫Species: {species}</h2>
         <h2 className={styled.h2}>💫Gender: {gender}</h2>
         <button className={styled.boton} onClick={() => onClose(id)}>X</button>
      </div>
      
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites  
   }
}
//dispatch, yo le estoy mandando acciones al reducer para q pueda procesarlas y actualizar el estado
//tengo q ejecutarla osea hacer addFav(), porque quiero su retorno, quiero un objeto. Al reducer le tiene q llegar un objeto
//le paso por props a este componente
//siempre va a tener un return de objeto
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}



export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
