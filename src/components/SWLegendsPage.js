import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { css } from 'emotion';
import Header from './Header';
import SWLegendsList from './SWLegendsList';
import { startFetchingStarships } from '../actions/starshipsActions';
import { startFetchingPeople } from '../actions/peopleActions';
import * as gStyles from '../styles/GeneralStyles';
import * as cStyles from '../styles/ContentStyles';

export const SWLegendsPage = props => {
   // Scroll Event Handler Function
   // When the page scrolls to bottom it dispatches the actions to load next page of starships and people data, and unbind itself from event listener
   // throttle function from Lodash library has been used to improve performance of the scroll event handler
   const scrollEventHandler = (e) => {
      if(e.offsetHeight + e.scrollTop < (e.scrollHeight - 20)) {
         return;
      }
      if(!props.isFetching) {
         props.startFetchingStarships(props.nextStarshipsPageUrl);
         props.startFetchingPeople(props.nextPeoplePageUrl);
      }
   };

   const debouncedHandler = debounce(e => scrollEventHandler(e), 250, { maxWait: 500 });

   // Similar to componentDidUpdate lifecycle method
   // Looks for changes in props.isFetching and props.hasMoreStarships and binds or unbinds scrollEventHandler function to scroll event listener based on the condition
   // useLayoutEffect(() => {
   // //   props.hasMoreStarships && !props.isFetching
   // //     ? window.addEventListener("scroll", scrollEventHandler, {
   // //         passive: true
   // //       })
   // //     : window.removeEventListener("scroll", scrollEventHandler, {
   // //         passive: true
   // //       });
   // //   return () => {
   // //     window.removeEventListener("scroll", scrollEventHandler, {
   // //       passive: true
   // //     });
   // //   };
   // }, [props.isFetching, props.hasMoreStarships]);

   return (
     <div className={gStyles.pageWrapper}>
       <Header />
       <div className={css`${gStyles.container};${cStyles.contentWrapper}`}>
         <div
            id="legendsListWrapper"
            className={cStyles.listWrapper}
            onScroll={
            props.hasMoreStarships && !props.isFetching
               ? ({ currentTarget }) => debouncedHandler(currentTarget)
               : null
            }
         >
            <SWLegendsList />
         </div>
       </div>
     </div>
   );
};

const mapStateToProps = state => ({
   hasMoreStarships: !!state.starships.nextPageUrl,
   isFetching:  state.people.isFetching || state.starships.isFetching,
   nextStarshipsPageUrl: state.starships.nextPageUrl,
   nextPeoplePageUrl: state.people.nextPageUrl
});

const mapDispatchToProps = (dispatch) => ({
   startFetchingStarships: (nextStarshipsPageUrl) => dispatch(startFetchingStarships(nextStarshipsPageUrl)),
   startFetchingPeople: (nextPeoplePageUrl) => dispatch(startFetchingPeople(nextPeoplePageUrl))
 });

// Connecting the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(SWLegendsPage);