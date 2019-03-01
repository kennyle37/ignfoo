import React, { Component } from 'react';
import NavItem from './NavItem';

class SideNavCardContainer extends Component {
  onNavSelection = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.currentTarget.classList.add('active');
  }

  render() {
    return (
      <div className="row SideNav--card-container">
        <NavItem active="active" handleSelection={this.onNavSelection} icon="fas fa-clock" description="Latest" />
        <NavItem handleSelection={this.onNavSelection} icon="fas fa-play" description="Videos" />
        <NavItem handleSelection={this.onNavSelection} icon="fas fa-file-alt" description="Articles" />
      </div>
    )
  }
}

  



export default SideNavCardContainer;
