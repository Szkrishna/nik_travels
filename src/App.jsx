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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="under-construction" element={<UnderConstruction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;