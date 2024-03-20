import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (

    <ul>
      <li><NavLink to="/"/>Dashboard</li>
      <li>Logout</li>
    </ul>
  )
};

export default NavBar;
