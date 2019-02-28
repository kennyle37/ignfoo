import React from 'react';
import '../sass/side-nav.scss';

const NavCard = () => {
  return (
    <div className="row SideNav--card">
      <div className="col-md-3 col-xs-6 SideNav--card-logo">Logo</div>
      <div className="col-md-6 col-xs-6 SideNav--card-description">Description</div>
    </div>
  )
}

export default NavCard;
