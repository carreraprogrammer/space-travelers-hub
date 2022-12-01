import '../Styles/Missions.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getMissions } from '../Redux/Missions/MissionSlice';


const Missions = () => {
  const dispatch = useDispatch();
  const state = true;

  const missions = useSelector((state) => state.Missions.data)
  useEffect(() => {
    dispatch(getMissions());
  });

  const joinBtn = () => {
   return state ? {display: 'none'} : {display: 'block'};
  }

  const leaveBtn = () => {
    return state ? {display: 'block'} : {display: 'none'};
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
          <tr key={mission.mission_id} id={mission.mission_id}>
            <td className="mission"> { mission.mission_name} </td>
            <td className="description"> { mission.description } </td>
            <td className="statusContainer"> <div className="status">NOT A MEMBER </div></td>
            <td className="joinContainer"> 
              <button className="joinBtn" style={joinBtn()}>Join Mission</button>
              <button className="leaveBtn" style={leaveBtn()}>Leave Mission</button> 
            </td>
          </tr>)
         })}
       </tbody>
      </table>
    </div>
  );
};

export default Missions;
