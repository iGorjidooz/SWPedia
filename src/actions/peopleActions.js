// Synchronous action creator which returns the action object 
// carrying "ADD" action type and fetched people data
export const addFetchedPeople = (peopleData, nextPageUrl) => ({
   type: 'ADD_FETCHED_PEOPLE',
   people: peopleData,
   nextPageUrl
});

// Synchronous action creator which returns the action object 
// carrying "REQUEST" action type
export const requestPeople = () => ({
   type: 'REQUEST_PEOPLE'
});

// Asynchronous action creator which does the actual fetching,
// dispatches synchronous "REQUEST" action at the beginning of the async process,
// and dispatches synchronous "ADD" action when the async fetch is completed
export const startFetchingPeople = (nextPageUrl = 'https://swapi.co/api/people/') => {
   return dispatch => {
      dispatch(requestPeople());
      return fetch(nextPageUrl).then( response => response.json() ).then(res => {
         const formattedData = res.results.map(character => ({
            ...character,
            id: character.url.match(/^.*\/(\d+)\/$/)[1]
         }));
         dispatch(addFetchedPeople(formattedData, res.next));
      });
   };
};