import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getRockets, joinMission } from '../components/Redux/RocketsRedux';

const Rockets = (props) => {
  const { id } = props;

  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) dispatch(getRockets());
  });

  const handleJoin = async (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div className="centered">
      {rockets.map((rocket) => (
        <div className="info" key={id}>
          <img className="rocket-img" src={rocket.flickrImages} alt="" />
          <div className="center">
            <h2>{rocket.rocketName}</h2>
            <h2>{rocket.type}</h2>
            <p>{rocket.description}</p>
            <h1>{rocket.reserved.toString()}</h1>

            <button
              type="button"
              id={rocket.rocket_id}
              onClick={() => handleJoin(rocket.rocket_id, rocket.reserved)}
              className={!rocket.reserved ? 'reserve-btn ' : 'cancel-btn'}
            >
              {!rocket.reserved ? 'Reserve Rocket' : 'Cancel Reservation'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
