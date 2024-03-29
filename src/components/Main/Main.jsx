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
        <Route path="/" element={ user ? <Navigate to={ "/dashboard" } /> : <Login /> } />
        <Route path="/password-reset" element={ user ? <Navigate to={ "/dashboard" } /> : <PaswordReset /> } />
        <Route path="/users" element={ user ? <Users /> : <Navigate to={ "/" } /> } />
        <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/general" element={ user ? rol === true ? <General /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/analiticas" element={ user ? rol === true ? <Analiticas /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/cliente/segmentacion" element={ user ? rol === true ? <Segmentacion /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/cliente/lista" element={ user ? rol === true ? <Lista /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/*" element={ <Navigate to={ "/dashboard" } /> } />
      </Routes>
    </main>
  );
};

export default Main;
