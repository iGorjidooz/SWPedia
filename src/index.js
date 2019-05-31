import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global, css } from "@emotion/core";
import emotionNormalize from 'emotion-normalize';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import AppRouter from './router/AppRouter';
import { startFetchingStarships } from './actions/starshipsActions';
import { startFetchingPeople } from './actions/peopleActions';
import { globalStyles } from './styles/CoreStyles';

const store = configureStore();

store.dispatch(startFetchingStarships());
store.dispatch(startFetchingPeople());

const jsx = (
   <Provider store={store}>
      <Global
         styles={css`
            ${emotionNormalize}
            ${globalStyles}
         `}
      />
      <AppRouter />
   </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// fetch('https://swapi.co/api/starships/', {
// }).then(response => {
//    return response.json()
// }).then(res => {
//    console.log(res)
//    return fetch('https://swapi.co/api/people/')
// }).then(response => {
//    return response.json()
// }).then(res => {
//    console.log(res);
// }).catch(error => console.log(error));