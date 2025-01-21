/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

// eslint-disable-next-line react-refresh/only-export-components
export const NavbarLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 3,
        name: "Blogs",
        link: "/blogs",
    },
    {
        id: 4,
        name: "Best Places",
        link: "/best-places",
    },
];

const DropdownLinks = [
    {
        id: 5,
        name: "Our Services",
        link: "/coming-soon",
    },
    {
        id: 6,
        name: "Top Brands",
        link: "/coming-soon",
    },
    {
        id: 7,
        name: "Location",
        link: "/coming-soon",
    },
];

const Navbar = ({ handleOrderPopup }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
                <div className="bg-gradient-to-r from-primary to-secondary text-white">
                    <div className="container mx-auto py-2 sm:block hidden">
                        <div className="flex items-center justify-between sm:flex-row flex-col">
                            <p className="text-sm mb-2 sm:mb-0">
                                <span className="text-gray-400">🎉</span> 20% off on your next booking!
                            </p>
                            <p className="text-sm font-medium">
                                📞 Call us: <a href="tel:+91123456789" className="underline">+91 123456789</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 font-bold text-2xl">
                            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                                <img src={Logo} alt="" className="h-20 py-1" />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-6">
                                <li className="py-4">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="py-4">
                                    <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        Blogs
                                    </NavLink>
                                </li>
                                <li className="py-4">
                                    <NavLink to="/best-places" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        Best Places
                                    </NavLink>
                                </li>
                                <li className="py-4">
                                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="group relative cursor-pointer">
                                    <a
                                        href="/#home"
                                        className="flex h-[72px] items-center gap-[2px]"
                                    >
                                        Quick Links{" "}
                                        <span>
                                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                        </span>
                                    </a>
                                    <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                                        <ul className="space-y-3">
                                            {DropdownLinks.map((data) => (
                                                <li key={data.id}>
                                                    <a className="inline-block w-full rounded-md p-2 hover:bg-primary/20" href={data.link}>
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={() => { handleOrderPopup(); }}
                                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                                Book Now
                            </button>
                            {/* Mobile Hamburger icon */}
                            <div className="md:hidden block">
                                {showMenu ? (
                                    <HiMenuAlt1 onClick={toggleMenu} className=" cursor-pointer transition-all" size={30} />
                                ) : (
                                    <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
            </nav>
        </>
    );
};

export default Navbar;
