/* eslint-disable no-unused-vars */
import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="container pt-20">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Where every journey tells a story... 🌍✈️ At Nik Travels, we believe that traveling isn't just about 
            reaching a destination - it's about the laughter you share along the way, the unexpected adventures 
            you stumble upon, and the memories that stay with you long after your return home. Whether you're 
            chasing sunsets across foreign horizons, reconnecting with loved ones, or finding yourself in unfamiliar 
            streets, we'll craft your perfect journey. Every trip we plan is personalized with love and care, drawing 
            from our own experiences and insider knowledge to create experiences that truly feel like yours.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
      <Footer />
    </>
  );
};

export default About;
