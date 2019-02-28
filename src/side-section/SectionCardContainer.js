import React from 'react';
import Card from './Card';
import Preview from './Preview';

const SideSectionCardContainer = () => {
  return (
    <div className="row SideSection--card-container">
      <Preview />
      <Card />
    </div>
  )
}

export default SideSectionCardContainer;
