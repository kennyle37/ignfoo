import React from 'react';

const NavItem = ({ active, handleSelection, icon, description }) => {
  const name = 'col-md-12 SideNav--card ' + (active ? active : '');
  
  return (
    <li className={name} onClick={handleSelection}>
      <span className="col-md-3 col-xs-6 SideNav--card-logo">
        <img className="SideNav--display-icon" src={icon} alt="logo" />
      </span>
      <span className="col-md-6 col-xs-6 SideNav--card-description">{description}</span>
    </li> 
  )
}

export default NavItem;
