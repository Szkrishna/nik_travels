import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Layout = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
      };
  
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
