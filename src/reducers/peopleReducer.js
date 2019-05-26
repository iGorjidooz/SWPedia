/**
 * People Redcuers
 * Responsible for generating new state
 * based on the previous state and
 * the provided action through dispatch
 */

const peopleDefaultState = {
   items: [],
   isFetching: false,
   nextPageUrl: ''
};

export default (state = peopleDefaultState, action) => {
   switch (action.type) {
      case 'ADD_FETCHED_PEOPLE':
         return { ...state, 
            items: [
               ...state.items,
               ...action.people
            ],
            isFetching: false,
            nextPageUrl: action.nextPageUrl
         };
      case 'REQUEST_PEOPLE':
         return { ...state, isFetching: true };
      default:
         return state;
   }
};