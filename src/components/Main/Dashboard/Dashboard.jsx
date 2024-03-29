import React, { useEffect } from "react";
import { UserAuth } from "../../../context/AuthContext";
import BarChart from "../BarChart/BarChart";

const Dashboard = () => {
  const { user, rol } = UserAuth();
  

  return (
    <>
      {user &&
        <>
          <section className="main-dashboard-container">
            <h2>Bienvenido {user.email}</h2>
          </section>
    <BarChart/>
        </>
      }
      {!user &&
        <p>No tienes permiso para acceder a esta funcion</p>
      }
    </>

  );
};

export default Dashboard;
