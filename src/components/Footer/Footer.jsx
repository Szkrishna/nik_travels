/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import FooterLogo1 from "../../assets/logo1.png";
import FooterLogo2 from "../../assets/logo2.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const FooterLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Best Places",
    link: "/best-places",
  },
  {
    id: 4,
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setHovering(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setHovering(false);
    }, 10000);
  };

  const handleMouseLeave = () => {
    setHovering(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const variants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: {
      opacity: 0.5,
      x: 1000,
      y: -130,
      transition: { duration: 10, delay: 1 },
    },
  };

  return (
    <div className="dark:bg-gray-950 py-8 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container md:px-32 px-8">
        <div className="grid md:grid-cols-4 bg-white/80 backdrop-blur-sm rounded-t-xl gap-8">
          <div className="md:py-6 px-8 pt-8">
            <motion.div
              variants={variants}
              initial="visible"
              animate={hovering ? "hidden" : "visible"} // Trigger animation on hover
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
              className="gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left"
            >
              <img src={FooterLogo1} alt="logo-img" className="max-h-[100px]" />
            </motion.div>
            <img src={FooterLogo2} alt="logo-text" className="max-h-[100px]" />
          </div>

          <div className="md:py-6 px-8">
            <h1 className="text-xl font-bold mb-4">Contact Us</h1>
            <div className="flex items-center gap-3 mb-4 cursor-pointer hover:translate-y-1 duration-200">
              <FaLocationArrow className="text-blue-500" />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mb-4 cursor-pointer hover:translate-y-1 duration-200">
              <FaEnvelope className="text-red-500" />
              <p>nik.travels@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:translate-y-1 duration-200">
              <FaMobileAlt className="text-green-500" />
              <p>+91 123456789</p>
            </div>
          </div>

          <div className="md:py-6 px-8">
            <h1 className="text-xl font-bold mb-4">Social</h1>
            <div className="mb-4">
              <a href="https://instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 duration-250">
                <FaInstagram className="text-purple-500 hover:text-pink-500 transition-colors text-xl" />
                <p>Instragram</p>
              </a>
            </div>
            <div className="mb-4">
              <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 duration-150">
                <FaFacebook className="text-blue-600 hover:text-blue-800 transition-colors text-xl" />
                <p>Facebook</p>
              </a>
            </div>
            <div>
              <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 duration-250">
                <FaLinkedin className="text-blue-500 hover:text-blue-700 transition-colors text-xl" />
                <p>Linkedin</p>
              </a>
            </div>
          </div>

          <div className="md:py-6 pb-8 px-8">
            <h1 className="text-xl font-bold text-justify sm:text-left mb-2">
              Important Links
            </h1>
            <ul className="flex flex-col gap-2">
              {FooterLinks.map((link, id) => (
                <li key={id} className="cursor-pointer hover:translate-x-1.5 duration-300 hover:text-blue-600 space-x-1 text-gray-700 dark:text-gray-200">
                  <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                    <span className="me-1">&#11162;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center py-3 px-4 md:px-16 border-t-2 border-gray-300/50 bg-primary text-white">
          <span>Copyright © 2025 Nik Travel Pvt Ltd. </span>
          <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
            <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Trademark Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
