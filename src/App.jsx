import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Dashboard from './pages/Dashboard';
import UserAccount from './pages/UserAccount';
import './App.css'
import Sidebar from './components/Sidebar';

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme')==='dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if(darkMode){
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  },[darkMode]);

  return (
    <>
    <button onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? <MdLightMode/> : <MdDarkMode/>}
      </button>
      <Routes>
        <Route path="/" element={<UserAccount/>} />
        <Route path="/d" element={<Dashboard/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
      </Routes>
    </>
  )
}

export default App
