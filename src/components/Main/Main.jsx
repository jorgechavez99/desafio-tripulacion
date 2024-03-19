import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'
import LogOut from './LogOut'

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  </main>;
};

export default Main;
