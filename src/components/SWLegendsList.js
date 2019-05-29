import React from 'react';
import { connect } from 'react-redux';
import SWStarshipListItem from './SWStarshipListItem';
import SWCharacterListItem from './SWCharacterListItem';

const SWLegendsList = (props) => {
   let count = 0

   return (
      <div>
         {props.starshipItems.map((item, index) => {
            if (count > 0 && count % 8 === 0) {
               return (<SWStarshipListItem key={item.id} starship={item} itemIndex={++count} />);
            } else {
               return (<SWCharacterListItem key={item.id} character={item} itemIndex={++count} />);
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