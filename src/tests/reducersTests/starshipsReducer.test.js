/**
 * Starship Reducer Tests
 * Contains tests which make sure starshipReducer
 * generates new state correctly
 */
import starshipsFixtures from '../fixtures/starshipsFixtures';
import starshipsReducer from '../../reducers/starshipsReducer';

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
   const state = starshipsReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual({ ...initialState });
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
   const nextPageUrl = 'http://swapi.co/nextPage';
   const state = starshipsReducer({ ...initialState, items: starshipsFixtures }, { type: 'ADD_FETCHED_STARSHIPS', starships, nextPageUrl});
   expect(state).toEqual({ ...initialState, items:[...starshipsFixtures, ...starships], isFetching: false, nextPageUrl })
});

test('should handle start fetch request', () => {
   const state = starshipsReducer(initialState, { type: 'REQUEST_STARSHIPS' });
   expect(state).toEqual({ ...initialState, isFetching: true });
});

test('should handle fetch starships error', () => {
   const error = 'Oops! there was an error!'
   const state = starshipsReducer(initialState, { type: 'HANDLE_FETCH_STARSHIP_ERROR', error });
   expect(state).toEqual({ ...initialState, error });
});

test('should set nextPageUrl', () => {
   const nextPageUrl = 'http://swapi.co/nextPage';
   const state = starshipsReducer(initialState, { type: 'SET_STARSHIPS_NEXT_PAGE_URL', nextPageUrl });
   expect(state).toEqual({ ...initialState, nextPageUrl });
});