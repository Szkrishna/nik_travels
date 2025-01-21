/* eslint-disable no-unused-vars */
import React from "react";
import FooterLogo from "../../assets/logo.png";
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
  return (
    <>
      <div className=" dark:bg-gray-950 py-8 relative overflow-hidden">
        <video autoPlay loop muted className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]">
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container md:px-32 px-8">
          <div className="grid md:grid-cols-3 bg-white/80 backdrop-blur-sm rounded-t-xl gap-8">
            {/* Logo and About Section */}
            <div className="md:py-8 px-8">
              <h1 className="flex justify-start items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[100px]" />
              </h1>
              <p className="text-sm pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere
                ab hic accusamus omnis dolor.
              </p>
            </div>

            {/* Address and Contact Section */}
            <div className="md:py-8 px-8">
              <h1 className="text-xl font-bold mb-4">Contact Us</h1>
              <div className="flex items-center gap-3 mb-3">
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <FaEnvelope />
                <p>nik.travels@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="md:py-8 pb-8 px-8">
              <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link, id) => (
                  <li key={id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                      <span>&#11162;</span>
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
    </>
  );
};

export default Footer;
