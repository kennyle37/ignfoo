import React from 'react';
import Card from './Card';
import Preview from './Preview';

const SideSectionCardContainer = () => {
  return (
    <div className="row SideSectionCard">
      <div className="col-md-6 col-xs-6">
        <Preview />
      </div>

      <div className="col-md-6 col-xs-6">
        <Card />
      </div>

    </div>
  )
}

export default SideSectionCardContainer;
