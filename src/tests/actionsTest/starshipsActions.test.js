import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as starshipsActions from '../../actions/starshipsActions';
import starshipsFixture from '../fixtures/starshipsFixtures';

beforeEach(() => {
   fetchMock.resetBehavior()
});

test('should set up add fetched starships action object', () => {
   const action = starshipsActions.addFetchedStarships(starshipsFixture);
   expect(action).toEqual({
      type: 'ADD_FETCHED_STARSHIPS',
      starships: starshipsFixture
   });
});

test('should set up request starships action object', () => {
   const action = starshipsActions.requestStarships();
   expect(action).toEqual({ type: 'REQUEST_STARSHIPS' });
});

test('should fetch the starships and add them to store', (done) => {
   const defaultStarshipState = { items: [], isFetching: false };
   const createMockStore = configureMockStore([thunk]);
   const store = createMockStore(defaultStarshipState);

   fetchMock.mock('https://swapi.co/api/starships/', { results: starshipsFixture });
   
   store.dispatch(starshipsActions.startFetchingStarships()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([{
         type: 'REQUEST_STARSHIPS'
      }, {
         type: 'ADD_FETCHED_STARSHIPS',
         starships: starshipsFixture
      }]);
      done();
   });
})