import React from 'react';

import stock from '../assets/stock/carbot.jpg';

const Preview = () => {
  return (
    <div className="col-md-6 col-xs-6 SideSection--card-preview">
      <img className="SideSection--img" src={stock} alt="example" />
    </div>
  )
}

export default Preview;
