import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </main>;
};

export default Main;
