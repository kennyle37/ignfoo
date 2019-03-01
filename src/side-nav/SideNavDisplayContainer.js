import React from 'react';
import '../sass/index.scss';

import SideNavCardContainer from './SideNavCardContainer';

const SideNavDisplayContainer = () => {
  return (
    <div className="SideNav--row">
      <SideNavCardContainer />
    </div>
  )
}

export default SideNavDisplayContainer;
