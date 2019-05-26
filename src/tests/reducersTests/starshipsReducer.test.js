/**
 * Starship Reducer Tests
 * Contains tests which make sure starshipReducer
 * generates new state correctly
 */

import starshipReducer from '../../reducers/starshipsReducer';
import starshipsFixtures from '../fixtures/starshipsFixtures';

test('should set default state', () => {
   const state = starshipReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual({ items: [], isFetching: false, nextPageUrl: '' });
});

test('should add starships to the state', () => {
   const starships = [{
      "name": "Death Star",
      "model": "DS-1 Orbital Battle Station",
      "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems"
   }, {
      "name": "Millennium Falcon",
      "model": "YT-1300 light freighter",
      "manufacturer": "Corellian Engineering Corporation"
   }];
   const initialState = {
      items: starshipsFixtures,
      isFetching: false
   }
   const state = starshipReducer(initialState, { type: 'ADD_FETCHED_STARSHIPS', starships});
   expect(state).toEqual({ items: [...starshipsFixtures,...starships], isFetching: false })
});
