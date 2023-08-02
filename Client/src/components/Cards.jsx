import React from 'react';
import Card from './Card';
import styled from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
      <div className={styled.container}>
         {characters?.map(character => (
               <Card
                  // key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}
            />
         ))}
      </div>
   );
}
//PRUEBA PARA LOS CHICOS

//Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados.
//La propiedad key es especial en React y se utiliza para ayudar a identificar de forma única cada elemento en una lista. 