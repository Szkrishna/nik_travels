/* eslint-disable no-unused-vars */
import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Footer from "../components/Footer/Footer";

const Blogs = () => {
  return (
    <div>
      <div className="min-h-screen pt-14 bg-gray-100">
        <BlogsComp />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
