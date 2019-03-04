import React from 'react';

const Preview = ({ preview, duration }) => {
  return (
    <div className="col-md-6 col-xs-6 SideSection--card-preview">
      <span className="SideSection--card-duration-container">
        <span className="SideSection--card-icon circle">
          <i className="fas fa-play fa-sm" />
        </span>
        <span className="SideSection--card-duration">3:32</span>
      </span>
      <img className="SideSection--img" src={preview} alt="example" />
    </div>
  )
}

export default Preview;
