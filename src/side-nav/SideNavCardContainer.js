import React from 'react';
import NavItem from './NavItem';

const SideNavCardContainer = ({ handleCurrentView }) => {
  return (
    <div className="row SideNav--card-container">
      <NavItem active="active" handleSelection={handleCurrentView} icon="fas fa-clock" description="Latest" />
      <NavItem handleSelection={handleCurrentView} icon="fas fa-play" description="Videos" />
      <NavItem handleSelection={handleCurrentView} icon="fas fa-file-alt" description="Articles" />
    </div>
  )
}

  



export default SideNavCardContainer;
