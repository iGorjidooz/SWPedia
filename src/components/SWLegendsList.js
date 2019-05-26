import React from 'react';
import { connect } from 'react-redux';
import SWStarshipListItem from './SWStarshipListItem';

const SWLegendsList = (props) => {
   return (
      <ul>
         {props.items.map(item => <SWStarshipListItem key={item.id} starship={item} />)}
      </ul>
   );
};

const mapStateToProps = (state) => ({
   items: state.starships.items
});

export default connect(mapStateToProps)(SWLegendsList);