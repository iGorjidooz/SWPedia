import React from 'react';
import { Link } from 'react-router-dom';

const SWStarshipListItem = ({ starship, itemIndex }) => {
   return (
      <Link to={`/starship/${starship.id}`}>
         <h3>{itemIndex} {starship.name}</h3>
         <p>model: {starship.model}</p>
         <p>manufacturer: {starship.manufacturer}</p>
      </Link>
   );
};

export default SWStarshipListItem;