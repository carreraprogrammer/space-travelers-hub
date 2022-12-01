import { useSelector } from 'react-redux';
import React from 'react';

const MyProfile = () => {

  const filteredMissions = useSelector((state)=> state.Missions.myMissions)

  return (
    <>
      {filteredMissions.map((mission) => {
        return ( 
          <h1 key={mission.mission_id}>{mission.mission_name}</h1>
        )
     })}
    </>
  )
}

export default MyProfile;