import React from 'react';

const SideNavCardContainer = () => {
  return (
    <div className="row SideNav--card-container">
        <li className="col-md-12 SideNav--card active">
          <span className="col-md-3 col-xs-6 SideNav--card-logo">
            <i className="fas fa-clock" />
          </span>
          <span className="col-md-6 col-xs-6 SideNav--card-description">Latest</span>
        </li>
        
        <li className="col-md-12 SideNav--card">
          <span className="col-md-3 col-xs-6 SideNav--card-logo">
            <i className="fas fa-play" />
          </span>
          <span className="col-md-6 col-xs-6 SideNav--card-description">Videos</span>
        </li>

        <li className="col-md-12 SideNav--card">
          <span className="col-md-3 col-xs-6 SideNav--card-logo">
            <i className="fas fa-file-alt" />
          </span>
          <span className="col-md-6 col-xs-6 SideNav--card-description">Articles</span>
        </li>
    </div>
  )
}

export default SideNavCardContainer;
