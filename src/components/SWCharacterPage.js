import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { css } from 'emotion';
import Header from './Header';
import Footer from './Footer';
import * as cStyles from '../styles/ContentStyles';
import * as gStyles from '../styles/GeneralStyles';

export const SWCharacterPage = (props) => {
   return props.character === undefined ? (
      <Redirect to="/"/>
   ) : (
      <div className={gStyles.pageWrapper}>
         <Header />
         <div className={css`${gStyles.container};${cStyles.contentWrapper};${cStyles.infoWrapper}`}>
            <Link to="/" className={cStyles.backToListBtn}>&larr; Back to List</Link>
            <h1>{props.character.name}</h1>
            <div className={cStyles.infoPanesWrapper}>
               <div className={cStyles.infoPane}>
                  <b>Profile:</b> <br/>
                  Height: {props.character.height} <br/>
                  Mass: {props.character.mass} <br />
                  Hair Color: {props.character.hair_color} <br />
                  Skin color: {props.character.skin_color} <br />
                  Eye Color: {props.character.eye_color} <br />
                  Birth Year: {props.character.eye_color} <br />
                  Gender: {props.character.gender} <br />
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
};

const mapStateToProps = (state, props) => ({
   character: state.people.items.find((character) => character.id === props.match.params.id)
});

export default connect(mapStateToProps)(SWCharacterPage);