import React from 'react';
import MobileNav from './MobileNav';

const TopHeaderContainer = (props) => {
  return (
    <div className="TopHeader--title">
      <span className="TopHeader--title-mobile">{props.mobileTitle}</span> {props.pcTitle}
      <MobileNav />
    </div>
  )
}

export default TopHeaderContainer;
