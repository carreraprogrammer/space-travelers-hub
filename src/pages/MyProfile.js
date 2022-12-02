import { useSelector } from 'react-redux';
import React from 'react';

const MyProfile = () => {

  const filteredMissions = useSelector((state)=> state.Missions.myMissions)

  const filteredRockets = useSelector((state) => state.Rockets.rockets);

  return (
   <div id="profileContainer">
     <div id="missionsContainer">
      <table id="myMissions">
        <thead>
          <tr>
             <th>My Missions</th> 
          </tr>
        </thead>
        <tbody>
          
        {filteredMissions.map((mission) => {
          return (
              <tr key={mission.mission_id} >
                 <td className="myMissionInfo">{mission.mission_name}</td> 
              </tr>
          )   
       })}
        </tbody>
      </table>
      </div>
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
                  <tr key={rocket.rocket_id + "rockets"}>
                    <td>{rocket.rocketName}</td>
                  </tr>
                );
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyProfile;