import React from 'react';
import { Link } from 'react-router-dom';
import * as generalStyles from '../styles/GeneralStyles';
import * as headerStyles from '../styles/HeaderStyle';

const Header = () => (
   <header className={headerStyles.header}>
      <div className={generalStyles.container}>
         <Link to="/" className={headerStyles.header__logo}>SWPedia</Link>
      </div>
   </header>
);

export default Header;