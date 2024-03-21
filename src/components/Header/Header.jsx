import React from "react";
import NavBar from "./NavBar/NavBar";
import { UserAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, rol } = UserAuth();

  return (
    <>
      <div>Header</div>
      
      {user && 
      <NavBar />
      }
    </>
  );
};

export default Header;
