import React from 'react';
import MobileNav from './MobileNav';

const TopHeaderContainer = ({ mobileTitle, pcTitle, handleCurrentView }) => {
  return (
    <div className="TopHeader--title">
      <span className="TopHeader--title-mobile">{mobileTitle}</span> {pcTitle}
      <MobileNav handleCurrentView={handleCurrentView} />
    </div>
  )
}

export default TopHeaderContainer;
