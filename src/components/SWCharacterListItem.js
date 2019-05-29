import React from 'react';
import { Link } from 'react-router-dom';

const SWCharacterListItem = ({ character, itemIndex }) => {
   return (
      <Link to={`/people/${character.id}`}>
         <h3>{itemIndex} {character.name}</h3>
         <p>model: {character.model}</p>
         <p>manufacturer: {character.manufacturer}</p>
      </Link>
   );
};

export default SWCharacterListItem;