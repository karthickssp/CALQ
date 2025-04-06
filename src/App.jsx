import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';

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
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </>
  )
}

export default App
