import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getRockets } from '../components/Redux/RocketsRedux';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);
  useEffect(() => {
    dispatch(getRockets());
  });
  return (
    <div className="centered">
      {rockets.map((rocket) => (
        <div className="info" key={rocket.id}>
          <img className="rocket-img" src={rocket.flickrImages} alt="" />
          <div className="center">
            <h2>{rocket.rocketName}</h2>
            <h2>{rocket.type}</h2>
            <p>{rocket.description}</p>
            <button className="reserve-btn">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
