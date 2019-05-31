import React from 'react';
import { Link } from 'react-router-dom';
import * as hStyles from '../styles/HelperStyles';
import * as cStyles from '../styles/ContentStyles';

const SWCharacterListItem = ({ character, listIndex }) => {
   return (
      <div className={cStyles.listItemWrapper}>
         <Link to={`/character/${character.id}`} className={cStyles.listItem}>
            <span className={cStyles.listIndex}>{listIndex}</span>
            <div>
               <h3 className={hStyles.margin0}>{character.name}</h3>
               <p className={hStyles.margin0}>Birth Year: {character.birth_year}</p>
               <p className={hStyles.margin0}>Gender: {character.gender}</p>
            </div>
         </Link>
      </div>
   );
};

export default SWCharacterListItem;