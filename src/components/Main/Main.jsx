import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import PaswordReset from "./PasswordReset";
import Dashboard from "./Dashboard";
import LogOut from "./LogOut";
import Users from "./Users/Users";
import { UserAuth } from "../../context/AuthContext";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/*" element={<Navigate to={"/dashboard"} />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/*" element={<Navigate to={"/dashboard"} />} />
          </>
        )}
      </Routes>
    </main>
  );
};

export default Main;
