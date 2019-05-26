import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SWLegendsPage from '../components/SWLegendsPage';
import SWStarshipPage from '../components/SWStarshipPage';
import SWCharacterPage from '../components/SWCharacterPage';

const AppRouter = () => {
   return (
      <Router>
         <Route path="/" component={SWLegendsPage} exact={true} />
         <Route path="/starship/:id" component={SWStarshipPage} />
         <Route path="/character/:id" component={SWCharacterPage} />
      </Router>
   );
};

export default AppRouter;