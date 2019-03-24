import React from 'react';
import NavItem from './NavItem';

const latest = require('../assets/stock/clock.svg')
const play = require('../assets/stock/play.svg');
const doc = require('../assets/stock/doc.svg')


const SideNavCardContainer = ({ handleCurrentView }) => {
  return (
    <div className="row SideNav--card-container">
      <NavItem active="active" handleSelection={handleCurrentView} icon={latest} description="Latest" />
      <NavItem handleSelection={handleCurrentView} icon={play} description="Videos" />
      <NavItem handleSelection={handleCurrentView} icon={doc} description="Articles" />
    </div>
  )
}

  



export default SideNavCardContainer;
