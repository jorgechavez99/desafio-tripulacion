import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'
import LogOut from './LogOut'

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  </main>;
};

export default Main;