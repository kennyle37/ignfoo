import React from 'react';
import '../sass/side-nav.scss';

const NavCard = () => {
  return (
    <div className="NavCard">
      <div className="row NavCard--container">
        <div className="col-md-3 col-xs-6 NavCard--card">Logo</div>
        <div className="col-md-6 col-xs-6 NavCard--card">Description</div>
      </div>
    </div>
  )
}

export default NavCard;
