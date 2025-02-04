/* eslint-disable no-unused-vars */
import React from 'react';
import Home from "./pages/Home";
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/Blog';
import BlogsDetails from "./pages/BlogsDetails";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import UnderConstruction from "./pages/UnderConstruction";
import AOS from "aos";
import "aos/dist/aos.css";
import { SignedIn, SignedOut, SignIn, SignUp, UserButton } from "@clerk/clerk-react";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Layout with Navbar and Authentication UI */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="coming-soon" element={<UnderConstruction />} />
          </Route>

          {/* Authentication Routes */}
          <Route path="/login" element={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <SignIn />
            </div>
          } />
          <Route path="/signup" element={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <SignUp />
            </div>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;