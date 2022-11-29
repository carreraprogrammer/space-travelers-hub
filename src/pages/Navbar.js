/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '../Images/planet.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="LogoContainer">
        <img className="planet" src={Logo} alt="" />
        <h1>Traverlers Hub</h1>
      </div>
      <div className="NavLinks">
        <NavLink to="./Rockets.js" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)} >Rockets</NavLink>
        <NavLink to="./Missions.js" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)} >Missions</NavLink>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)} >My Profile</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
