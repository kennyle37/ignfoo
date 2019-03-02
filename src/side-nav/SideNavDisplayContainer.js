import React from 'react';
import '../sass/index.scss';

import SideNavCardContainer from './SideNavCardContainer';

const SideNavDisplayContainer = ({ handleCurrentView }) => {
  return (
    <div className="SideNav--row">
      <SideNavCardContainer handleCurrentView={handleCurrentView}/>
    </div>
  )
}

export default SideNavDisplayContainer;
