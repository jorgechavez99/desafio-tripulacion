import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import PaswordReset from "./PasswordReset";
import Dashboard from "./Dashboard";
import Users from "./Users/Users";
import { UserAuth } from "../../context/AuthContext";
import SegmentacionContainer from "./Clientes/SegmentacionContainer/SegmentacionContainer";
import General from "./Ventas/General";
import Analiticas from "./Ventas/Analiticas";
import Lista from "./Clientes/Lista";
import Corner from "./Corner/Corner";
import Vitrina from "./Ventas/Vitrina/Vitrina";
import Snacks from "./Ventas/Snacks/Snacks";

const Main = () => {
  const { user, rol } = UserAuth();

  return (
    <main  >
      <Routes>
        <Route path="/" element={ user ? <Navigate to={ "/corner" } /> : <Login /> } />
        <Route path="/password-reset" element={ user ? <Navigate to={ "/dashboard" } /> : <PaswordReset /> } />
        <Route path="/users" element={ user ? <Users /> : <Navigate to={ "/" } /> } />
        
        <Route path="/dashboard" element={ user ? <General /> : <Navigate to={ "/" } /> } />
        <Route path="/corner" element={ user ? rol === true ? <Corner /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> }/>
        <Route path="/ventas/general" element={ user ? rol === true ? <General /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/analiticas" element={ user ? rol === true ? <Analiticas /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/analiticas/vitrina" element={ user ? rol === true ? <Vitrina /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/analiticas/snacks" element={ user ? rol === true ? <Snacks /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/cliente/segmentacion" element={ user ? rol === true ? <SegmentacionContainer /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/cliente/lista" element={ user ? rol === true ? <Lista /> : <Navigate to={ "/dashboard" } /> : <Navigate to={ "/" } /> } />
        <Route path="/*" element={ <Navigate to={ "/dashboard" } /> } />
      </Routes>
    </main>
  );
};

export default Main;
