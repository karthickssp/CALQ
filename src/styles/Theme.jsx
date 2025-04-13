import React from "react";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Theme() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </>
  );
}

export default Theme;
