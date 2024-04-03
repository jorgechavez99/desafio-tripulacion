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
import Cafe from "./Ventas/Cafe";
import CafeJ from "./Ventas/Cafe/CafeJ";


const Main = () => {
  const { user, rol } = UserAuth();

  return (
    <main  >
      <Routes>
        <Route path="/" element={ user ? <Navigate to={ "/corner" } /> : <Login /> } />
        <Route path="/password-reset" element={ user ? <Navigate to={ "/dashboard" } /> : <PaswordReset /> } />
        <Route path="/users" element={ user ? rol? <Users /> : <Navigate to={ "/corner" } />: <Navigate to={ "/" }/> } />
        
        <Route path="/dashboard" element={ user ? <General /> : <Navigate to={ "/" } /> } />
        <Route path="/corner" element={ user ?  <Corner /> : <Navigate to={ "/" } /> }/>
        <Route path="/ventas/general" element={ user ? <General /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/analiticas" element={ user ? <Analiticas /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/analiticas/cafe" element={ user ?  <CafeJ /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/analiticas/vitrina" element={ user ? <Vitrina /> : <Navigate to={ "/" } /> } />
        <Route path="/ventas/analiticas/snacks" element={ user ? <Snacks /> : <Navigate to={ "/" } /> } />
        <Route path="/cliente/segmentacion" element={ user ? <SegmentacionContainer /> : <Navigate to={ "/" } /> } />
        <Route path="/cliente/lista" element={ user ?  <SegmentacionContainer /> : <Navigate to={ "/" } /> } />
        <Route path="/*" element={ user ?  <Navigate to={ "/corner" } /> : <Navigate to={ "/" } />} />
      </Routes>
    </main>
  );
};

export default Main;
