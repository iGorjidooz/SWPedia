import React from 'react';
import { footer, footerContent, footerLink } from '../styles/FooterStyles';

const Footer = () => (
   <footer className={footer}>
      <div className={footerContent}>
         Created By <a className={footerLink} href="https://github.com/iGorjidooz">Iman Gorjidooz</a>
      </div>
   </footer>
);

export default Footer;