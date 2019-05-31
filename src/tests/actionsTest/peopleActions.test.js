import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as peopleActions from '../../actions/peopleActions';
import peopleFixtures from '../fixtures/peopleFixtures';

beforeEach(() => {
   fetchMock.resetBehavior()
});

// fetchMock.config.overwriteRoutes = true;

test('should set up add fetched people action object', () => {
   const action = peopleActions.addFetchedPeople(peopleFixtures);
   expect(action).toEqual({
      type: 'ADD_FETCHED_PEOPLE',
      people: peopleFixtures
   });
});

test('should set up request people action object', () => {
   const action = peopleActions.requestPeople();
   expect(action).toEqual({ type: 'REQUEST_PEOPLE' });
});

test('should set up set next page url action object', () => {
   const nextPageUrl = 'https://swapi.co/api/next/'
   const action = peopleActions.setPeopleNextPageUrl();
   expect(action).toEqual({ type: 'SET_PEOPLE_NEXT_PAGE_URL' }, nextPageUrl);
});

test('should fetch the people and add them to store', (done) => {
   const defaultPeopleState = { items: [], isFetching: false };
   const createMockStore = configureMockStore([thunk]);
   const store = createMockStore(defaultPeopleState);

   fetchMock.mock('https://swapi.co/api/people/', { results: peopleFixtures });
   
   store.dispatch(peopleActions.startFetchingPeople()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([
         {
            type: 'REQUEST_PEOPLE'
         }, {
            type: 'ADD_FETCHED_PEOPLE',
            people: peopleFixtures
         }
      ]);
      done();
   });
});

test('should fetch the people and handle fetch error', (done) => {
   const defaultPeopleState = { items: [], isFetching: false };
   const createMockStore = configureMockStore([thunk]);
   const store = createMockStore(defaultPeopleState);

   fetchMock.mock('https://swapi.co/api/people/', () => 404);
   
   store.dispatch(peopleActions.startFetchingPeople()).then(() => {}).catch(error => {
      const actions = store.getActions();
      expect(actions).toEqual([
         {
            type: 'REQUEST_PEOPLE'
         }, {
            type: 'HANDLE_FETCH_PEOPLE_ERROR',
            error
         }
      ]);
      done();
   });
});

