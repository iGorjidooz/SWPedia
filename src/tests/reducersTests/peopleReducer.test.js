/**
 * People Reducer Tests
 * Contains tests which make sure peopleReducer
 * generates new state correctly
 */
import peopleReducer from '../../reducers/peopleReducer';
import peopleFixtures from '../fixtures/peopleFixtures';

test('should set default state', () => {
   const state = peopleReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual({ items: [], isFetching: false, nextPageUrl: '' });
});

test('should add people to the state', () => {
   const people = [{
      "name": "Leia Organa",
      "height": "150",
      "mass": "49"
   }, {
      "name": "Owen Lars",
      "height": "178",
      "mass": "120"
   }];
   const initialState = {
      items: peopleFixtures,
      isFetching: false
   };
   const state = peopleReducer(initialState, { type: 'ADD_FETCHED_PEOPLE', people});
   expect(state).toEqual({ items: [...peopleFixtures,...people], isFetching: false });
});
