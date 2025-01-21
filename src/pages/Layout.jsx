import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
      };
  
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
    </>
  );
};

export default Layout;
