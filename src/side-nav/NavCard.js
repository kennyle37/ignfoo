import React from 'react';
import '../sass/side-nav.scss';

const NavCard = () => {
  return (
    <div className="row SideNav--card">
      <li>
        <span className="col-md-3 col-xs-6 SideNav--card-logo">Logo</span>
        <span className="col-md-6 col-xs-6 SideNav--card-description">Description</span>
      </li>
      <li>
        <span className="col-md-3 col-xs-6 SideNav--card-logo">Logo</span>
        <span className="col-md-6 col-xs-6 SideNav--card-description">Description</span>
      </li>
      <li>
        <span className="col-md-3 col-xs-6 SideNav--card-logo">Logo</span>
        <span className="col-md-6 col-xs-6 SideNav--card-description">Description</span>
      </li>
    </div>
  )
}

export default NavCard;
