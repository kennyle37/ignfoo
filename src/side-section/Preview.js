import React from 'react';

import stock from '../assets/stock/carbot.jpg';

const Preview = ({ preview }) => {
  return (
    <div className="col-md-6 col-xs-6 SideSection--card-preview">
      <img className="SideSection--img" src={preview} alt="example" />
    </div>
  )
}

export default Preview;
