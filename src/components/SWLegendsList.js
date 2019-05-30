import React from 'react';
import { connect } from 'react-redux';
import SWStarshipListItem from './SWStarshipListItem';
import SWCharacterListItem from './SWCharacterListItem';

export const SWLegendsList = (props) => {
   return (
      <div>
         {props.starshipItems.map((item, arrayIndex) => {
            const listIndex = arrayIndex + Math.floor(arrayIndex / 8) + 1;
            if (props.peopleItems.length > 0 && arrayIndex > 0 && (arrayIndex + 1) % 8 === 0) {
               const characterIndex = Math.floor(arrayIndex / 8);
               return (
                  <React.Fragment key={'listItemsWrapper' + arrayIndex}>
                     <SWStarshipListItem key={listIndex} starship={item} listIndex={listIndex} />
                     <SWCharacterListItem key={listIndex + 1} character={props.peopleItems[characterIndex]} listIndex={listIndex + 1} />
                  </React.Fragment>
               );
            } else {
               return (<SWStarshipListItem key={listIndex} starship={item} listIndex={listIndex} />);
            }
         })}
         {props.isFetching && <div>Loading...</div>}
      </div>
   );
};

const mapStateToProps = (state) => ({
   starshipItems: state.starships.items,
   peopleItems: state.people.items,
   isFetching: state.starships.isFetching || state.people.isFetching
});

export default connect(mapStateToProps)(SWLegendsList);