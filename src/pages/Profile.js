import { useSelector } from 'react-redux';
import React from 'react';

const Profile = () => {
  const filteredRockets = useSelector((state) => state.Rockets.rockets);
  return (
    <div id="rocketsContainer">
      <table id="myRockets">
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>
          {filteredRockets.map((rocket) => {
            if (rocket.reserved === true)
              return (
                <tr key={rocket.id}>
                  <td>{rocket.rocketName}</td>
                </tr>
              );
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
