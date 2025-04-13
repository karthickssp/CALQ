import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Theme from "../styles/Theme";

function Dashboard() {
  return (
    <>
      <Theme />
      <Header />
      <Sidebar />
    </>
  );
}

export default Dashboard;
