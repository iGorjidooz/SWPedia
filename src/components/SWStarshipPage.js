import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';

export const SWStarshipPage = (props) => {
   return props.starship === undefined ? (
      <Redirect to="/"/>
   ) : (
      <div>
         <Header />
         <Link to="/">Back to List</Link>
         <h1>{props.starship.name}</h1>
         <div>
            General Info: <br/>
            model: {props.starship.model} <br/>
            manufacturer: {props.starship.manufacturer} <br/>
            starship class: {props.starship.starship_class} <br/>
            Cost in credits: {props.starship.cost_in_credits} <br/>
            length: {props.starship.length}
         </div>
         <div>
            Performance: <br/>
            Max Atomsphering Speed: {props.starship.max_atmosphering_speed} <br />
            Hyperdrive Rating: {props.starship.hyperdrive_rating} <br />
            MGLT: {props.starship.MGLT} <br />
         </div>
         <div>
            Capacity: <br />
            crew: {props.starship.crew} <br/>
            passengers: {props.starship.passengers} <br />
            cargo Capacity: {props.starship.cargo_capacity} <br />
            consumables: {props.starship.consumables}
         </div>
      </div>
   )
};

const mapStateToProps = (state, props) => ({
   starship: state.starships.items.find((starship) => starship.id === props.match.params.id)
});

export default connect(mapStateToProps)(SWStarshipPage);