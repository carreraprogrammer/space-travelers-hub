import { useSelector } from 'react-redux';
import React from 'react';

const MyProfile = () => {

  const filteredMissions = useSelector((state)=> state.Missions.myMissions)

  return (
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
  )
}

export default MyProfile;