import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { css } from 'emotion';
import Header from './Header';
import * as cStyles from '../styles/ContentStyles';
import * as gStyles from '../styles/GeneralStyles';

export const SWStarshipPage = (props) => {
   return props.starship === undefined ? (
      <Redirect to="/"/>
   ) : (
      <div className={gStyles.pageWrapper}>
         <Header />
         <div className={css`${gStyles.container};${cStyles.contentWrapper};${cStyles.infoWrapper}`}>
            <Link to="/" className={cStyles.backToListBtn}>&larr; Back to List</Link>
            <h1>{props.starship.name}</h1>
            <div className={cStyles.infoPanesWrapper}>
               <div className={cStyles.infoPane}>
                  <b>General Info:</b> <br/>
                  Model: {props.starship.model} <br/>
                  Manufacturer: {props.starship.manufacturer} <br/>
                  Starship Class: {props.starship.starship_class} <br/>
                  Cost in Credits: {props.starship.cost_in_credits} <br/>
                  Length: {props.starship.length}
               </div>
               <div className={cStyles.infoPane}>
                  <b>Performance:</b> <br/>
                  Max Atomsphering Speed: {props.starship.max_atmosphering_speed} <br />
                  Hyperdrive Rating: {props.starship.hyperdrive_rating} <br />
                  MGLT: {props.starship.MGLT} <br />
               </div>
               <div className={cStyles.infoPane}>
                  <b>Capacity:</b> <br />
                  Crew: {props.starship.crew} <br/>
                  Passengers: {props.starship.passengers} <br />
                  Cargo Capacity: {props.starship.cargo_capacity} <br />
                  Consumables: {props.starship.consumables}
               </div>
            </div>
         </div>
      </div>
   )
};

const mapStateToProps = (state, props) => ({
   starship: state.starships.items.find((starship) => starship.id === props.match.params.id)
});

export default connect(mapStateToProps)(SWStarshipPage);