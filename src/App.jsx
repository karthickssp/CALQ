import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import UserAccount from './pages/UserAccount';

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserAccount/>} />
        <Route path="/d" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
