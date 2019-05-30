import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';

export const SWCharacterPage = (props) => {
   return props.character === undefined ? (
      <Redirect to="/"/>
   ) : (
      <div>
         <Header />
         <Link to="/">Back to List</Link>
         <h1>{props.character.name}</h1>
         <div>
            Profile:
            height: {props.character.height} <br/>
            mass: {props.character.mass} <br />
            Hair Color: {props.character.hair_color} <br />
            Skin color: {props.character.skin_color} <br />
            Eye Color: {props.character.eye_color} <br />
            Birth Year: {props.character.eye_color} <br />
            Gender: {props.character.gender} <br />
         </div>
      </div>
   )
};

const mapStateToProps = (state, props) => ({
   character: state.people.items.find((character) => character.id === props.match.params.id)
});

export default connect(mapStateToProps)(SWCharacterPage);