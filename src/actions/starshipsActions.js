// Synchronous action creator which returns the action object 
// carrying "ADD" action type and fetched starships data
export const addFetchedStarships = (starshipsData, nextPageUrl) => ({
   type: 'ADD_FETCHED_STARSHIPS',
   starships: starshipsData,
   nextPageUrl
});

// Synchronous action creator which returns the action object 
// carrying "REQUEST" action type
export const requestStarships = () => ({
   type: 'REQUEST_STARSHIPS'
});

// Asynchronous action creator which does the actual fetching,
// dispatches synchronous "REQUEST" action at the beginning of the async process,
// and dispatches synchronous "ADD" action when the async fetch is completed
export const startFetchingStarships = (nextPageUrl = 'https://swapi.co/api/starships/') => {
   return dispatch => {
      dispatch(requestStarships());
      return fetch(nextPageUrl).then( response => response.json() ).then(res => {
         const formattedData = res.results.map(starship => ({
            ...starship,
            id: starship.url.match(/^.*\/(\d+)\/$/)[1]
         }));
         dispatch(addFetchedStarships(formattedData, res.next));
      });
   };
};