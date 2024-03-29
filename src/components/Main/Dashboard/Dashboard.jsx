import React from "react";
import { UserAuth } from "../../../context/AuthContext";
import NavBar from "../../Header/NavBar";

// import { transformJson } from "../../../helpers/transformJson";

const Dashboard = () => {
  const { user } = UserAuth();

  // transformJson()

  return (
    <>
      {user &&
        <>
          <section className="main-dashboard-container">
            <h2>Bienvenido {user.email}</h2>
          </section>
        </>
      }
      {!user &&
        <p>No tienes permiso para acceder a esta funcion</p>
      }
    </>

  );
};

export default Dashboard;
