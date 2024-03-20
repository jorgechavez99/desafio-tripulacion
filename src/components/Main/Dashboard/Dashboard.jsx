import React from "react";
import { UserAuth } from "../../../context/AuthContext";

const Dashboard = () => {
  const { user, rol } = UserAuth();
  console.log("Esta funcionando el rol?", rol)
  console.log("Asegurando que en dashboard lee user", user)
  return (
    <>
      {user &&
        <section>
          <p>Estas en el DASHBOARD</p>
          {rol &&
            <p>Eres rol admin   {rol}</p>
          }
        </section>

      }
      {!user &&
        <p>No tienes permiso para acceder a esta funcion</p>
      }
    </>

  );
};

export default Dashboard;
