import React from "react";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { CornerSelected } from "../../../context/CornerContext";
import schiller from '/assets/schiller_fondo.jpg'
import bridge from '/assets/bridge_logo.svg'


const NavBar = () => {

  const { user, rol, setRol, logOut } = UserAuth();
  const { corner } = CornerSelected();

  // const [activeProduct, setActiveProduct] = useState("")


  const cerrarSesion = async () => {
    try {
      await logOut();
      alert("Cerraste sesión correctamente. ¡Hasta pronto!")
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
    
    {user && 
    
    
    <div className="main-navBar-container">

      <div className="title-corner">
        <div>
          {corner === "thebridge" ? <img id="bridge_logo" src="assets/bridge_logo.svg" alt="bridge_logo" /> : <img id="schiller_logo" src="assets/schiller.png" alt="schiller_logo" style={{ background: 'white' }} />}
        </div>
        <p>{corner === "thebridge" ? "The Bridge" : "Schiller"}</p>        
      </div>



      <div className="title-ul">
        <div>
          <img id="graph-outline" src="assets/graph-outline.svg" alt="graph-outline" />
        </div>
        <p>Ventas</p>
      </div>
      <ul>
        <li>
          <NavLink to="/ventas/general" className={({ isActive }) => (isActive ? "active-link" : "")}>General</NavLink>
        </li>
        <li>
          <NavLink to="/ventas/analiticas" className={({ isActive }) => (isActive ? "active-link" : "")}>Analiticas</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>Beneficios</NavLink>
        </li>
      </ul>

      <div className="title-ul">
        <img id="clients" src="assets/clients.svg" alt="clients" />
        <p>Clientes</p>
      </div>
      <ul>
        <li>
          <NavLink to="/cliente/segmentacion" className={({ isActive }) => (isActive ? "active-link" : "")}>Segmentacion</NavLink>
        </li>
        <li>
          <NavLink to="/cliente/lista" className={({ isActive }) => (isActive ? "active-link" : "")}>Lista</NavLink>
        </li>
      </ul>


      <div className="title-ul">
        <img id="box-closed" src="assets/box-closed.svg" alt="box-closed"/>
        <p>Stock</p>
      </div>


      <div className="title-ul">
        <img id="settings" src="assets/settings.svg" alt="settings" />
        <p>Gestion</p>
      </div>

      <div id="logout" className="title-ul">
      <img id="log-logout" src="assets/logout.svg" alt="logout" />
        <a onClick={cerrarSesion}>
          <p>Cerrar Sesion</p>
        </a>
      </div>

      {rol &&
      <div className="title-ul">
      <img id="user-rounded" src="assets/user-rounded.svg" alt="user-rounded" />
          <NavLink to="/users" className={({ isActive }) => (isActive ? "active-link" : "")}>Usuarios</NavLink>
        </div>
      }

    </div>
  }
  </>
  )
};

export default NavBar;
