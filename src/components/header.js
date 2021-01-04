import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Logo from "../../static/images/logo.png";
import NavMenu from './navmenu';
import HeaderSocial from './header-social';

export default () => (
  <header>
    <div className='logo'>
      <AnchorLink to='/#top'>
        <img alt='' src={Logo} />
      </AnchorLink>
      <div className='header-col title'>
        <h1 className='title whitespace-no-wrap'>
          RED FIVE
        </h1>
      </div>
    </div>
    <NavMenu />
    <HeaderSocial />
  </header>
);
