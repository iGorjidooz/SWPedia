/**
 * Starships Redcuers
 * Responsible for generating new state
 * based on the previous state and
 * the provided action through dispatch
 */

const starshipsDefaultState = {
   items: [],
   isFetching: false,
   nextPageUrl: '',
   error: null
};

export default (state = starshipsDefaultState, action) => {
   switch (action.type) {
      case 'ADD_FETCHED_STARSHIPS':
         return { ...state,
            items: [
               ...state.items,
               ...action.starships
            ],
            isFetching: false,
            nextPageUrl: action.nextPageUrl
         };
      case 'REQUEST_STARSHIPS':
         return { ...state, isFetching: true };
      case 'HANDLE_FETCH_STARSHIP_ERROR':
         return {
            ...state,
            isFetching: false,
            error: action.error
         };
      case 'SET_STARSHIPS_NEXT_PAGE_URL':
         return { ...state, nextPageUrl: action.nextPageUrl };
      default:
         return state;
   }
};