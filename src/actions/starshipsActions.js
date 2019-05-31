// Synchronous action creator
// carrying "ADD" action type and fetched starships data
export const addFetchedStarships = (starshipsData, nextPageUrl) => ({
   type: 'ADD_FETCHED_STARSHIPS',
   starships: starshipsData,
   nextPageUrl
});

// Synchronous action creator
// carrying "REQUEST" action type
export const requestStarships = () => ({
   type: 'REQUEST_STARSHIPS'
});

// Synchronous action creator
// carrying "FETCH ERROR" action type and the error data
export const handleStarshipFetchError = (errorData) => ({
   type: 'HANDLE_FETCH_STARSHIP_ERROR',
   error: errorData
});

// Synchronous action creator
// carrying "SET NEXT PAGE URL" action type and the actual URL
export const setStarshipsNextPageUrl = (nextPageUrl) => ({
   type: 'SET_STARSHIPS_NEXT_PAGE_URL',
   nextPageUrl: nextPageUrl
});

// Asynchronous action creator which does the actual fetching,
// dispatches synchronous "REQUEST" action at the beginning of the async process,
// and dispatches synchronous "ADD" action when the async fetch is completed
export const startFetchingStarships = (nextPageUrl = 'https://swapi.co/api/starships/') => {
   return dispatch => {
      dispatch(requestStarships());
      return fetch(nextPageUrl).then(response => {
         if(response.ok) {
            return response.json();
         } else {
            throw new Error('Something went wrong');
         }
      }).then(res => {
         const formattedData = res.results.map(starship => ({
            ...starship,
            id: starship.url.match(/^.*\/(\d+)\/$/)[1]
         }));
         dispatch(addFetchedStarships(formattedData, res.next));
      }).catch(error => {
         dispatch(handleStarshipFetchError(error))
      });
   };
};