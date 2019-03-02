import React, { Component } from 'react';
import NavItem from './NavItem';

class SideNavCardContainer extends Component {
  render() {
    return (
      <div className="row SideNav--card-container">
        <NavItem active="active" handleSelection={this.props.handleCurrentView} icon="fas fa-clock" description="Latest" />
        <NavItem handleSelection={this.props.handleCurrentView} icon="fas fa-play" description="Videos" />
        <NavItem handleSelection={this.props.handleCurrentView} icon="fas fa-file-alt" description="Articles" />
      </div>
    )
  }
}

  



export default SideNavCardContainer;
