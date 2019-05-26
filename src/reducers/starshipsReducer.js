/**
 * Starships Redcuers
 * Responsible for generating new state
 * based on the previous state and
 * the provided action through dispatch
 */

const starshipsDefaultState = {
   items: [],
   isFetching: false,
   nextPageUrl: ''
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
         return { ...state, isFetching: true }
      default:
         return state;
   }
};