import React from 'react';

//fetch the time and convert it into display format
function timeConverter(duration) {
  let time = '';
  let hours = Math.floor(duration / 3600);
  duration = duration - hours * 3600;

  let mins = Math.floor(duration / 60);
  let secs = duration - mins * 60;

  if (hours > 0) {
    time += hours + ':';

    if (mins < 10) {
      time += '0' + mins + ':';

      if (secs < 10) {
        time += '0' + secs;
      } else {
        time += secs;
      }
    } else {
      time += mins + ':';
    }

  } else if (hours === 0) {
    time += mins + ':';

      if (secs < 10) {
        time += '0' + secs;
      } else {
        time += secs;
      }
  }
  return time;
}

//display post's preview panel and the time
const Preview = ({ preview, duration }) => {
  let visible = duration ? 'SideSection--card-duration-container' : 'SideSection--card-duration-container hidden';
  let time;

  if (duration) {
    time = timeConverter(duration);

    if (time && time.length >= 6) {
      visible += ' stretched'
    }
  }
  

  return (
    <div className="col-md-6 col-xs-6 SideSection--card-preview">
      <span className={visible}>
        <span className="SideSection--card-icon circle">
          <i className="fas fa-play fa-sm" />
        </span>
        <span className="SideSection--card-duration">{time}</span>
      </span>
      <div className="SideSection--img-brightness">
        <img className="SideSection--img" src={preview} alt="example" />
      </div>
    </div>
  )
}

export default Preview;
