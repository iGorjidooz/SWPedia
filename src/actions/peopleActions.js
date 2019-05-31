// Synchronous action creator
// carrying "ADD" action type and fetched people data
export const addFetchedPeople = (peopleData, nextPageUrl) => ({
   type: 'ADD_FETCHED_PEOPLE',
   people: peopleData,
   nextPageUrl
});

// Synchronous action creator
// carrying "REQUEST" action type
export const requestPeople = () => ({
   type: 'REQUEST_PEOPLE'
});

// Synchronous action creator
// carrying "FETCH ERROR" action type and the error data
export const handlePeopleFetchError = (errorData) => ({
   type: 'HANDLE_FETCH_PEOPLE_ERROR',
   error: errorData
});

// Synchronous action creator
// carrying "SET NEXT PAGE URL" action type and the actual URL
export const setPeopleNextPageUrl = (nextPageUrl) => ({
   type: 'SET_PEOPLE_NEXT_PAGE_URL',
   nextPageUrl: nextPageUrl
});

// Asynchronous action creator which does the actual fetching,
// dispatches synchronous "REQUEST" action at the beginning of the async process,
// and synchronous "ADD" action when the async fetch is completed
// in case of fetch failure it will dispatch the "ERROR" action
export const startFetchingPeople = (nextPageUrl = 'https://swapi.co/api/people/') => {
   return dispatch => {
      dispatch(requestPeople());
      return fetch(nextPageUrl).then( response => {
         console.log('RESPOOOOONSE', response.ok)
         if(response.ok) {
            return response.json();
         } else {
            throw new Error('Something went wrong');
         }
      }).then(res => {
         const formattedData = res.results.map(character => ({
            ...character,
            id: character.url.match(/^.*\/(\d+)\/$/)[1]
         }));
         dispatch(addFetchedPeople(formattedData, res.next));
      }).catch(error => {
         dispatch(handlePeopleFetchError(error));
      });
   };
};