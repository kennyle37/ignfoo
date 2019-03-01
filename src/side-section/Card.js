import React from 'react';
import msgLogo from '../assets/stock/msg.png'

const Card = () => {
  return (
    <div className="col-md-6 col-xs-6 SideSection--card-info">
      <div className="SideSection--post-header">
        <span className="SideSection--post-time">
          3h -
        </span>
        <span className="SideSection--post-comment">
          <img className="SideSection--msg-logo" src={msgLogo} alt="message icon" />
        </span>
        <span className="SideSection--post-comment-count">
          1
        </span>
      </div>
      <div className="SideSection--post-title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  )
}

export default Card;
