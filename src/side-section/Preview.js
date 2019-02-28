import React from 'react';

const stock = 'https://bnetproduct-a.akamaihd.net//70/dfdccc3712ed263d4903fa18806adab7-sc2-carbot-feature-003.jpg';

const Preview = () => {
  return (
    <div>
      <img src={stock} alt="example" width="325" height="165" />
    </div>
  )
}

export default Preview;
