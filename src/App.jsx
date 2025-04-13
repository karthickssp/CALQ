import './App.css'
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserAccount from './pages/UserAccount';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

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
        <Route path="/" element={<Dashboard/>} />
        <Route path="/account" element={<UserAccount/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/header" element={<Header/>} />
      </Routes>
    </>
  )
}

export default App
