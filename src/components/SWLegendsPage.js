import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import SWLegendsList from './SWLegendsList';

const SWLegendsPage = props => {

   const scrollEventHandler = e => {
      if(window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 30) {
         return;
      }
      // if(!)
      console.log(window.innerHeight + document.documentElement.scrollTop);
      // const legendsList = document.getElementById('legendsList');
      // console.log(legendsList);
   }

   useEffect(() => {
      window.addEventListener('scroll', scrollEventHandler);
      return () => window.removeEventListener('scroll', scrollEventHandler);
   }, []);

   useEffect(() => {
      !props.hasMore && window.removeEventListener('scroll', scrollEventHandler);
   }, [props.hasMore])

   return (
      <div>
         <Header />
         <h1>SWLegendsPage</h1>
         {props.isFetching ? (
               <p>Loading ...</p>
            ) : (
               <div id="legendsList">
                  <SWLegendsList />
               </div>
            )}
      </div>
   );
};

const mapStateToProps = state => ({
   isFetching: state.starships.isFetching || state.people.isFetching,
   hasMore: !!state.starships.nextUrl
});

export default connect(mapStateToProps)(SWLegendsPage);