import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'
import LogOut from './LogOut'
import Users from './Users/Users';
import { UserAuth } from '../../context/AuthContext';

const Main = () => {

  const { user, rol } = UserAuth();


  return <main>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    {!rol ? (
      <>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
      </>
      ):
      <>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users/>} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
      </>
    }
    </Routes>

  </main>;
};

export default Main;