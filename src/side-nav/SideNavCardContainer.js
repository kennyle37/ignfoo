import React, { Component } from 'react';

class SideNavCardContainer extends Component {
  state = {
    selected: false,
  }

  onNavSelection = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.currentTarget.classList.add('active');
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="row SideNav--card-container">
          <li className="col-md-12 SideNav--card active" onClick={this.onNavSelection}>
            <span className="col-md-3 col-xs-6 SideNav--card-logo">
              <i className="fas fa-clock" />
            </span>
            <span className="col-md-6 col-xs-6 SideNav--card-description">Latest</span>
          </li>
          
          <li className="col-md-12 SideNav--card" onClick={this.onNavSelection}>
            <span className="col-md-3 col-xs-6 SideNav--card-logo">
              <i className="fas fa-play" />
            </span>
            <span className="col-md-6 col-xs-6 SideNav--card-description">Videos</span>
          </li>
  
          <li className="col-md-12 SideNav--card" onClick={this.onNavSelection}>
            <span className="col-md-3 col-xs-6 SideNav--card-logo">
              <i className="fas fa-file-alt" />
            </span>
            <span className="col-md-6 col-xs-6 SideNav--card-description">Articles</span>
          </li>
      </div>
    )
  }
}

  



export default SideNavCardContainer;
