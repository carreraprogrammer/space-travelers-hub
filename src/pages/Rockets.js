import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { getRockets } from '../components/Redux/RocketsRedux';
import {
  reserveRocket,
  cancelReservation,
} from '../components/Redux/RocketsRedux';

const Rockets = (props) => {
  const { reserved, id } = props;
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);
  useEffect(() => {
    dispatch(getRockets());
  });

  const reservedhandler = (e) => {
    if (reserved === false) {
      dispatch(reserveRocket(e.target.id));
    } else {
      dispatch(cancelReservation(e.target.id));
    }
    console.log(reserved);
    console.log(rockets);
  };

  return (
    <div className="centered">
      {rockets.map((rocket) => (
        <div className="info">
          <img className="rocket-img" src={rocket.flickrImages} alt="" />
          <div className="center">
            <h2>{rocket.rocketName}</h2>
            <h2>{rocket.type}</h2>
            <p>{rocket.description}</p>
            <button
              type="button"
              id={id}
              onClick={reservedhandler}
              className={!reserved ? 'reserve-btn ' : 'cancel-btn'}
            >
              {!reserved ? 'Reserve Rocket' : 'Cancel Reservation'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
