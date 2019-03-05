import React from 'react';
import msgLogo from '../assets/stock/msg.png'
import moment from 'moment';

//get the difference between when the article/vid was posted to now
function calculateTimePosted(posted) {
  const today = moment(new Date()); 
  const datePosted = moment(posted);

  const dayDifference = today.diff(datePosted, 'days');
  const hoursDifference = today.diff(datePosted, 'hours');
  const minutesDifference = today.diff(datePosted, 'minutes');

  if (dayDifference >= 1) {
    return dayDifference + 'd'; //if posted more than a day ago
  } else if (hoursDifference >= 1) {
    return hoursDifference + 'h'; //if posted less than a day but more than an hour ago
  } else {
    return minutesDifference + 'm'; //if posted within the last hr
  }
}

const Card = ({ title, posted, commentCount }) => {
  return (
    <div className="col-md-6 col-xs-6 SideSection--card-info">
      <div className="SideSection--post-header">
        <span className="SideSection--post-time">
          {calculateTimePosted(posted)} -
        </span>
        <span className="SideSection--post-comment">
          <img className="SideSection--msg-logo" src={msgLogo} alt="message icon" />
        </span>
        <span className="SideSection--post-comment-count">
          {commentCount}
        </span>
      </div>
      <div className="SideSection--post-title">
      {title}
      </div>
    </div>
  )
}

export default Card;
