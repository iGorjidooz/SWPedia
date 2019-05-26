import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import starshipsReducer from '../reducers/starshipsReducer';
import peopleReducer from '../reducers/peopleReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      starships: starshipsReducer,
      people: peopleReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
