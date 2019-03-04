import React from 'react';

const TopHeaderContainer = (props) => {
  return (
    <div className="TopHeader--title">
      <span className="TopHeader--title-mobile">{props.mobileTitle}</span> {props.pcTitle}
    </div>
              
  )
}

export default TopHeaderContainer;
