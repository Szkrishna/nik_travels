/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

const ContactPopup = ({ contactPopups, setContactPopup }) => {
    return (
        <>
            {/* {contactPopups && ( */}
            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
                    {" "}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold text-black/70">
                                Contact Us
                            </h1>
                        </div>
                        <div>
                            <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setContactPopup(false)} />
                        </div>
                    </div>
                    {/* <div className="mt-4">
                            <input type="text" placeholder="Name"
                                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" />
                            <input type="email" placeholder="email"
                                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" />
                            <input type="text" placeholder="Address"
                                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" />
                            <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                                    Book Now
                                </button>
                            </div>
                        </div> */}
                            <div className="mt-4">
                                <input type="text" placeholder="Name"
                                    className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-primary"/>
                                <input type="email" placeholder="Email"
                                    className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-primary"/>
                                <input type="text" placeholder="Phone"
                                    className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-primary"/>
                                <textarea type="text" placeholder="Message"
                                    className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-primary"/>
                                <div className="flex justify-center">
                                    <button className="bg-blue-500  hover:scale-105 duration-200 text-white py-2 px-6 rounded shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none"
                                        onClick={() => setContactPopup(false)}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default ContactPopup;