import React from 'react';
import Card from './Card';
import Preview from './Preview';

const SideSectionCardContainer = ({ preview, title, duration }) => {
  return (
    <div className="row SideSection--card-container">
      <Preview preview={preview} duration={duration} />
      <Card title={title} />
    </div>
  )
}

export default SideSectionCardContainer;
