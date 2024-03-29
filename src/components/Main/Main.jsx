import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import PaswordReset from "./PasswordReset";
import Dashboard from "./Dashboard";
import Users from "./Users/Users";
import { UserAuth } from "../../context/AuthContext";
import Segmentacion from "./Clientes/Segmentacion";
import General from "./Ventas/General";
import Analiticas from "./Ventas/Analiticas";
import Lista from "./Clientes/Lista";

const Main = () => {
  const { user, rol } = UserAuth();

  return (
    <main className="container">


      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/password-reset" element={<PaswordReset />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
            
          </>
        ) : rol === false && user ? (
          <>
            <Route path="/users" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Navigate to={"/dashboard"} />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/ventas/general" element={<General/>} />
            <Route path="/ventas/analiticas" element={<Analiticas/>} />
            <Route path="/cliente/segmentacion" element={<Segmentacion/>} />
            <Route path="/cliente/lista" element={<Lista/>} />
            <Route path="/*" element={<Navigate to={"/dashboard"} />} />
          </>
        )}
      </Routes>
    </main>
  );
};

export default Main;
