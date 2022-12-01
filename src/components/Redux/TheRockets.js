import React from 'react';
import { useSelector } from 'react-redux';

const TheRockets = () => {
  const rockets = useSelector((state) => state.Rockets.rockets);
  return (
    <div>
      <h2>The Rockets</h2>
      <ul>
        {rockets.map((rocket) => {
          if (rocket.reserved === true)
            return <li key={rocket.id}>{rocket.rocketName}</li>;
          return null;
        })}
      </ul>
    </div>
  );
};

export default TheRockets;
