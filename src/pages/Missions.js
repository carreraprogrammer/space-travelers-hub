import '../Styles/Missions.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getMissions, joinMission } from '../Redux/Missions/MissionSlice';


const Missions = () => {
  const dispatch = useDispatch();
 

  const missions = useSelector((state) => state.Missions.data)

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  },);


  const handleJoin = async (id) => {
     dispatch(joinMission(id))
  }

  const joinBtn = (state) => {
    return state === true ? {display: 'none'} : {display: 'block'};
   }
 
  const leaveBtn = (state) => {
     return state === true ? {display: 'block'} : {display: 'none'};
   }


  return (
    <div id="table-container">
      <table className="missions-table">
       <thead>
         <tr>
           <th>Mission</th>
           <th>Description</th>
           <th>Status</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         {missions.map((mission) => {

          return (
          <tr key={mission.mission_id} >
            <td className="mission"> { mission.mission_name} {mission.reserved.toString()} </td>
            <td className="description"> { mission.description } </td>
            <td className="statusContainer"> 
              <div className="joinStatus" style={joinBtn(mission.reserved)}>NOT A MEMBER </div>
              <div className="activeStatus" style={leaveBtn(mission.reserved)}>Active Member</div>
            </td>
            <td className="joinContainer"> 
              <button 
                className="joinBtn"   
                id={mission.mission_id} 
                onClick={ () => handleJoin(mission.mission_id, mission.reserved) }
                style={joinBtn(mission.reserved)}
                >
                  Join Mission
               </button>
              <button 
                className="leaveBtn"  
                id={mission.mission_id} 
                onClick={ () => handleJoin(mission.mission_id) }
                style={leaveBtn(mission.reserved)}>
                Leave Mission
              </button> 
            </td>
          </tr>)
         })}
       </tbody>
      </table>
    </div>
  );
};

export default Missions;
