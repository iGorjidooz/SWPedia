import React from 'react';
import { Link } from 'react-router-dom';

const SWCharacterListItem = ({ character, listIndex }) => {
   return (
      <Link to={`/character/${character.id}`}>
         <h3>{listIndex} {character.name}</h3>
         <p>Birth Year: {character.birth_year}</p>
         <p>Gender: {character.gender}</p>
      </Link>
   );
};

export default SWCharacterListItem;