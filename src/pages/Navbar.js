/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '../Images/planet.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Logo-Container">
        <img className="planet" src={Logo} alt="" />
        <h1>Traverlers Hub</h1>
      </div>
      <div className="Nav-Links">
        <NavLink to="/Rockets.js">Rockets</NavLink>
        <NavLink to="./Missions.js">Missions</NavLink>
        <NavLink to="/">My Profile</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
