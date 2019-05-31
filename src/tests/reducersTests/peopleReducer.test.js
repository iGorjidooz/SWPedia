/**
 * People Reducer Tests
 * Contains tests which make sure peopleReducer
 * generates new state correctly
 */
import peopleReducer from '../../reducers/peopleReducer';
import peopleFixtures from '../fixtures/peopleFixtures';

let initialState;

beforeEach(() => {
   initialState = {
      items: [],
      isFetching: false,
      nextPageUrl: '',
      error: null
   };
});

test('should set default state', () => {
   const state = peopleReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual({ ...initialState });
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
   const nextPageUrl = 'http://swapi.co/nextPage';
   const state = peopleReducer({ ...initialState, items: peopleFixtures }, { type: 'ADD_FETCHED_PEOPLE', people, nextPageUrl});
   expect(state).toEqual({ ...initialState, items: [...peopleFixtures,...people], isFetching: false, nextPageUrl });
});

test('should handle start fetch request', () => {
   const state = peopleReducer(initialState, { type: 'REQUEST_PEOPLE' });
   expect(state).toEqual({ ...initialState, isFetching: true });
});

test('should handle fetch people error', () => {
   const error = 'Oops! there was an error!'
   const state = peopleReducer(initialState, { type: 'HANDLE_FETCH_PEOPLE_ERROR', error });
   expect(state).toEqual({ ...initialState, error });
});

test('should set nextPageUrl', () => {
   const nextPageUrl = 'http://swapi.co/nextPage';
   const state = peopleReducer(initialState, { type: 'SET_PEOPLE_NEXT_PAGE_URL', nextPageUrl });
   expect(state).toEqual({ ...initialState, nextPageUrl });
});