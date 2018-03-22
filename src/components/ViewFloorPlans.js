import React from 'react';
import './view-floor-plan.css';

const ViewFloorPlans = () => {
  return (
    <div className="floor-plans">
      <h1 className="floorplan-header">Available Floor Plans</h1>
      <div className="model">
        <h2 className="floor-title">2 Bedroom - 1 Bathroom</h2>
        <img className="floor-img" src={require('../assets/second.svg')} />
      </div>
      <div className="model">
        <h2 className="floor-title">2 Bedroom - 2 Bathroom</h2>
        <img className="floor-img" src={require('../assets/third.svg')} />
      </div>
    </div>
  );
};

export default ViewFloorPlans;
