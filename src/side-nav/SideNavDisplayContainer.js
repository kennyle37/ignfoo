import React from 'react';
import '../sass/side-nav.scss';

import SideNavCardContainer from './SideNavCardContainer';

const SideNavDisplayContainer = () => {
  return (
    <div className="SideNavContainer">
      <SideNavCardContainer />
    </div>
  )
}

export default SideNavDisplayContainer;
