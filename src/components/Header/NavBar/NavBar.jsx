import React from "react";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

const NavBar = () => {

  const { user, rol } = UserAuth();

  return (

    <ul>
     
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    {rol &&
      <li>
        <NavLink to="/users">Usuarios</NavLink>
      </li>
    }
      <li>
        <NavLink to="/logout">LogOut</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;
