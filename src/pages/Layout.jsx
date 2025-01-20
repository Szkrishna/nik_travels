import React from "react";
import Navbar from "../components/Navbar/Navbar";
const Layout = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
      };
  
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
    </>
  );
};

export default Layout;
