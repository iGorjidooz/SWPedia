import React from 'react';
import { Link } from 'react-router-dom';
import * as hStyles from '../styles/HelperStyles';
import * as cStyles from '../styles/ContentStyles';

const SWStarshipListItem = ({ starship, listIndex }) => {
   return (
      <div className={cStyles.listItemWrapper}>
         <Link to={`/starship/${starship.id}`} className={cStyles.listItem}>
            <span className={cStyles.listIndex}>{listIndex}</span>
            <div>
               <h3 className={hStyles.margin0}>{starship.name}</h3>
               <p className={hStyles.margin0}>Model: {starship.model}</p>
               <p className={hStyles.margin0}>Manufacturer: {starship.manufacturer}</p>
            </div>
         </Link>
      </div>
   );
};

export default SWStarshipListItem;